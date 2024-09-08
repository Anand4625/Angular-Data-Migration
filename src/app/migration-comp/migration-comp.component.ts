import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { interval, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-migration-comp',
  templateUrl: './migration-comp.component.html',
  styleUrls: ['./migration-comp.component.scss']
})
export class MigrationCompComponent implements OnInit {
  public timer: boolean = false;
  public percentage = 0;
  public currentCount = 0;
  public maxTime = 15000;
  public maxCount = 100;
  public intervalTime = this.maxTime / this.maxCount;
  private counterSubscription: Subscription | undefined;
  public showToggle = false;

  constructor(public canvas: NgbOffcanvas,private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }

  startMigration(content: any) {
    this.currentCount = 0;
    this.timer = true;
    this.canvas.open(content, {
      position: 'bottom',
      backdrop: false,
      panelClass: 'canvas'
    })
    this.countup();
    setInterval(() => {
      this.timer = false;
      this.canvas.dismiss();
    }, 15000);
  }

  countup() {
    const counter$ = interval(this.intervalTime);
    this.counterSubscription = counter$.subscribe(value => {
      this.currentCount = value + 1;
      if (this.currentCount >= this.maxCount) {
        this.counterSubscription?.unsubscribe();
        this.showToggle = false;
        this.toastr.success('Migration applied successfully.', 'Success');
      } else {
        this.showToggle = true;
      }
    });
  }

  toggle(content:any){
    this.canvas.open(content, {
      position: 'bottom',
      backdrop: false,
      panelClass: 'canvas'
    })
  }

  ngOnDestroy() {
    this.counterSubscription?.unsubscribe();
  }
}

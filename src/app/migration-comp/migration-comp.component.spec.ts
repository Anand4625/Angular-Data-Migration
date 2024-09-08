import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationCompComponent } from './migration-comp.component';

describe('MigrationCompComponent', () => {
  let component: MigrationCompComponent;
  let fixture: ComponentFixture<MigrationCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigrationCompComponent]
    });
    fixture = TestBed.createComponent(MigrationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

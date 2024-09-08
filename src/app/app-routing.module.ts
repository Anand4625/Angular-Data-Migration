import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrationCompComponent } from './migration-comp/migration-comp.component';

const routes: Routes = [
  {path: '', component: MigrationCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

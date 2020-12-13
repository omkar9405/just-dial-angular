import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: 'app-dashboard', component: DashboardComponent,
  children: [
      {
          path: 'app-admin',
          component: AdminComponent ,
      },
      {
          path: 'app-employee',
          component: EmployeeComponent,
      }
  ]},
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { HomeComponent } from './components/home/home.component';


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
  { path: 'app-home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

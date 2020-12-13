import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { DashboardRoutingModule } from './components/dashboard/dashboard-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { NavComponent } from './components/dashboard/nav/nav.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "", redirectTo: "app-home", pathMatch: "full" },
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
  { path: 'app-nav', component: NavComponent },
 { path: 'app-sidebar', component: SidebarComponent },
];

@NgModule({
 
  imports: [
    DashboardRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

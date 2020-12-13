import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { LoginComponent } from './components/login-section/login/login.component';
import { SignupComponent } from './components/login-section/signup/signup.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { NavComponent } from './components/dashboard/nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './components/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerComponent,
    EmployeeComponent,
    HomeComponent,
    ServicesComponent,
    LocationsComponent,
    LoginSectionComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  

  ],
  providers: [
    {provide:LocationStrategy,useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

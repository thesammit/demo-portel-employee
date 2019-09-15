import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeBaseComponent } from './components/employee-base/employee-base.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeRouteActivatorService } from './services/employee-route-activator.service';
import { EmployeeService } from './services/employee.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, EmployeeBaseComponent, EmployeeListComponent, CreateEmployeeComponent,
    EmployeeDetailsComponent, NotFoundComponent, SidenavComponent, ToolbarComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule,
    MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [EmployeeRouteActivatorService, EmployeeService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

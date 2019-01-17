import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FrontComponent } from './front/front.component';
import { FrontOfficeModule } from './front-office/front-office.module';
import { UnauthorizedComponent } from './views/error/Unauthorized.component';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessfullComponent } from './views/successfull/successfull.component';
import { DoctorModule } from './doctor/doctor.module';
import { DoctorRoutingModule } from './doctor/doctor-routing.module';
import { LoaderComponent } from './loader.component';

import { DataTablesModule } from 'angular-datatables';
import { PathService } from './services/path.service';
import { TreatmentService } from './services/treatment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportService } from './services/report.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    DoctorModule,
    DoctorRoutingModule,
    ChartsModule,
    CommonModule,
    FrontOfficeModule,
    FormsModule,
    ReactiveFormsModule,
    FrontOfficeModule,
    DataTablesModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    FrontComponent,
    UnauthorizedComponent,
    SuccessfullComponent,
    LoaderComponent
  ],
  providers: [
    PathService,
    TreatmentService,
    ReportService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

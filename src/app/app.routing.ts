import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {AppComponent} from './app.component';
import {FrontComponent} from './front/front.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthorizedComponent } from './views/error/Unauthorized.component';
import { SuccessfullComponent } from './views/successfull/successfull.component';
import { DoctorComponent } from './doctor/doctor.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    data: {
      title: 'test'
    },
    children: [
      {
        path: '',
        loadChildren: './front-office/front-office.module#FrontOfficeModule'
      }
    ]
  },
  {
    path: 'dash',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path : 'unauthorized',
    component : UnauthorizedComponent
  },
  {
    path : 'successfull',
    component : SuccessfullComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'admin',
    canActivate : [AuthGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'doctolib',
        loadChildren: './views/doctolib/doctolib.module#DoctolibModule'
      },
      {
        path: 'chatbot',
        loadChildren: './views/chatbot/chatbot.module#ChatbotModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'paths',
        loadChildren: './paths/paths.module#PathsModule'
      },
      {
        path: 'treats',
        loadChildren: './treatments/treatments.module#TreatmentsModule'
      },
      {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
      }
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

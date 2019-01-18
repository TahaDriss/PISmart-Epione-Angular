import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FrontComponent } from './front/front.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthorizedComponent } from './views/error/Unauthorized.component';
import { SuccessfullComponent } from './views/successfull/successfull.component';
import { DoctorComponent } from './front-office/doctor/doctor.component';
import { AppointmentComponent } from './front-office/appointment/appointment.component';
import { PatientAppointmentComponent } from './front-office/patient-appointment/patient-appointment.component';
import { PatientProfileComponent } from './front-office/patient-profile/patient-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: '',
        loadChildren: './front-office/front-office.module#FrontOfficeModule'
      },
      {
        path: 'profile',
        component: PatientProfileComponent,
      },
      {
        path: 'allDoctors',
        component: DoctorComponent,
      },
      {
        path: 'appointment/:id/:name',
        component: AppointmentComponent,
      },
      {
        path: 'patientAppointment',
        component: PatientAppointmentComponent,
      },
      {
        path: 'doctors/:name',
        component: DoctorComponent,
      },
      {
        path: 'doctors/:latitude/:longitude',
        component: DoctorComponent,
      },
      {
        path: 'doctors/:speciality_id',
        component: DoctorComponent,
      },
      {
        path: 'doctors/:name/:speciality_id',
        component: DoctorComponent,
      },
      {
        path: 'doctors/:name/:speciality_id/:latitude/:longitude',
        component: DoctorComponent,
      }
    ]
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
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: 'successfull',
    component: SuccessfullComponent
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
    canActivate: [AuthGuard],
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
        path : '**',
        redirectTo: '404',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

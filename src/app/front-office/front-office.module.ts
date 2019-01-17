import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from '@angular/router';
import {DoctorComponent} from './doctor/doctor.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
const routes: Routes = [
  { path : '', component : AccueilComponent },
  {path: 'doctors', component: DoctorComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'patientAppointment', component: PatientAppointmentComponent}
,
{path: 'patientProfile', component: PatientProfileComponent}
];
@NgModule({
  declarations: [AccueilComponent, DoctorComponent, AppointmentComponent, PatientAppointmentComponent, PatientProfileComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule,   ReactiveFormsModule, DialogModule, CalendarModule, RouterModule.forChild(routes)
  ]
})
export class FrontOfficeModule { }

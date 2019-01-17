import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from '@angular/router';
import {RatingComponent} from '../rating/rating.component';
import {RoundPipe} from '../rating/pipe/round.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ChatComponent} from '../chat/chat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChatModule } from '../chat/chat.module';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../shared/material/material.module';
import {SocketService} from '../chat/shared/services/socket.service';
import {DialogUserComponent} from '../chat/dialog-user/dialog-user.component';
import {DoctorComponent} from './doctor/doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
const routes: Routes = [
  { path : '', component : AccueilComponent },
  {path: 'doctors', component: DoctorComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'patientAppointment', component: PatientAppointmentComponent},
  { path : 'rating', component : RatingComponent },
  { path : 'chat', component : ChatComponent },
{path: 'patientProfile', component: PatientProfileComponent}
];
@NgModule({
  declarations: [
    AccueilComponent,
    DoctorComponent,
    AppointmentComponent,
    PatientAppointmentComponent,
    PatientProfileComponent,
    RatingComponent,
    ChatComponent,
    DialogUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    CalendarModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [SocketService],
  entryComponents: [DialogUserComponent]
})
export class FrontOfficeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorService} from "../services/doctor.service";
import { DocListComponent } from './doc-list/doc-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultationAddComponent } from './consultation-add/consultation-add.component';
import { NgbdRatingDecimal } from './rating/rating-decimal';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CalendrierComponent } from './calendrier/calendrier.component';
import {FullCalendarModule} from "ng-fullcalendar";
import { MapComponent } from './map/map.component';
import { BestConsComponent } from './best-cons/best-cons.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {DataTablesModule} from "angular-datatables";
import { AppointmentdelComponent } from './appointmentdel/appointmentdel.component';
import { AccueilComponent } from './accueil/accueil.component';




const routes: Routes=[
  { path:'doctorList',component:DocListComponent, runGuardsAndResolvers: 'always'},
  { path:'consultationsList',component:ConsultationsComponent, runGuardsAndResolvers: 'always'},
  { path:'consultationsAdd',component:ConsultationAddComponent, runGuardsAndResolvers: 'always'},
  { path:'rating',component:NgbdRatingDecimal, runGuardsAndResolvers: 'always'},
  { path:'calendar',component:CalendrierComponent, runGuardsAndResolvers: 'always'},
  { path:'map',component:MapComponent, runGuardsAndResolvers: 'always'},
  { path:'bestCons',component:BestConsComponent, runGuardsAndResolvers: 'always'},
  { path:'app',component:AppointmentComponent, runGuardsAndResolvers: 'always'},
  { path:'appDel',component:AppointmentdelComponent, runGuardsAndResolvers: 'always'},
  { path:'welcome',component:AccueilComponent, runGuardsAndResolvers: 'always'}
]

@NgModule({
  declarations: [DocListComponent,ConsultationsComponent, ConsultationAddComponent, NgbdRatingDecimal, CalendrierComponent, MapComponent, BestConsComponent, AppointmentComponent, AppointmentdelComponent, AccueilComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, NgbModule,FullCalendarModule, DataTablesModule
  ],
  providers:[DoctorService],
})
export class DoctorsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultationAddComponent } from './consultation-add/consultation-add.component';
import { NgbdRatingDecimal } from './rating/rating-decimal';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppointmentdelComponent } from './appointmentdel/appointmentdel.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BestConsComponent } from './best-cons/best-cons.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    DoctorComponent,
    DocListComponent,
    ConsultationsComponent,
    ConsultationAddComponent,
    NgbdRatingDecimal,
    CalendrierComponent,
    MapComponent,
    BestConsComponent,
    AppointmentComponent,
    AppointmentdelComponent,
    AccueilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FullCalendarModule,
    DataTablesModule
  ]
})
export class DoctorModule { }

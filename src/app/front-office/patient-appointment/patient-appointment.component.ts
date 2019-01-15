import { Component, OnInit } from '@angular/core';
import {PatientAppointmentService} from '../../services/patient-appointment.service';
import {Appointment} from '../../model/appointment';
import {Message} from 'primeng/api';


@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.scss']
})
export class PatientAppointmentComponent implements OnInit {
 appointments: Appointment[];
  display: boolean = false;
  constructor(private appointmentServ: PatientAppointmentService) { }
  msgs: Message[] = [];
  ngOnInit() {
    this.appointmentServ.getAllAppointments().subscribe(data => this.appointments = data);
  }
  showDialog(id:number) {

    this.appointmentServ.cancelAppointment(id);
    this.display = true;
  }
cancelAppointment(id:number) {
  console.log(id);
  this.appointmentServ.cancelAppointment(id);

}
ok(){
 window.location.reload();



}
}

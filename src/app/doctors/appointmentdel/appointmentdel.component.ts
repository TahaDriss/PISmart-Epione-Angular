import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Appointment} from "../../models/Appointment";

@Component({
  selector: 'app-appointmentdel',
  templateUrl: './appointmentdel.component.html',
  styleUrls: ['./appointmentdel.component.scss']
})
export class AppointmentdelComponent implements OnInit {
  apps : Appointment[] = [];
  x:number;
  constructor(public ds:DoctorService) { }

  ngOnInit() : void {
    this.ds.getAppointmentsById().subscribe(
        data => { this.apps= data as any;
          console.log(data)}
    )
  }

  deleteApp(id) {
    this.ds.deleteApp(id).subscribe();
    this.x= this.apps.indexOf(id);
    this.apps.splice(this.x,1);
  }

}

import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Appointment} from "../../models/Appointment";
import {DataTablesModule} from "angular-datatables";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  apps : Appointment[] = [];
  dtOptions: any = {};

  constructor(private ds:DoctorService) { }

  ngOnInit():void {
    this.ds.getAppointmentsById().subscribe(
        data => { this.apps= data as any;
          console.log(data)}
    )
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel'
      ]
    };
  }

}

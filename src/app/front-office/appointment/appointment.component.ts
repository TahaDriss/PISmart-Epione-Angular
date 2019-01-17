import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Appointment, Reason} from '../../model/appointment';
import {AppointmentService} from '../../services/appointment.service';
import {Doctor} from '../../model/doctor';
import DateTimeFormat = Intl.DateTimeFormat;
import {CalendarModule} from 'primeng/calendar';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointment: Appointment=new Appointment();
id: number;
name: string;
  value: DateTimeFormat;
  date7:Date;
reasons :Reason[];
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private appointmentService: AppointmentService) { }

  ngOnInit() {  this.activatedRoute.params.subscribe((params: Params) => {

    this.id = params['id'],
      this.name = params['name'];
    console.log(this.id);

  });
    this.appointmentService.getReasons(this.id).subscribe(data => this.reasons = data);
  }
  addAppointment(app:Appointment){


    app.doctor=new Doctor();
app.doctor.id = this.id;
    this.appointmentService.addAppointment(app);








    this.router.navigate(['../patientAppointment']);
    window.location.reload();
  }

}

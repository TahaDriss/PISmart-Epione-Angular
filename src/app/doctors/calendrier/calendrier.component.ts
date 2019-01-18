import {Component, OnInit, ViewChild} from '@angular/core';
import {Options} from "fullcalendar";
import {CalendarComponent} from "ng-fullcalendar";
import {ActivatedRoute} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss'],
  providers:[DoctorService]
})
export class CalendrierComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;
  events = null;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;


  constructor(private ServiceDoctor: DoctorService,private route:ActivatedRoute) { }

  ngOnInit() {


    this.calendarOptions = {
      editable: true,
      contentHeight:500,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: []
    };

    this.ServiceDoctor.getAppointmentsById().subscribe(data => {
      this.events = data;
      console.log(data);
    });


  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      id: model.event.id,
      start: model.event.start,
      end: model.event.end,
      title: model.event.title,
      // other params

    }
    this.displayEvent = model;
    console.log(model.title);

  }





}

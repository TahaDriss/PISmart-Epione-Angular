import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Appointement} from '../Models/Appointment.model';
import {User} from '../Models/User.model';
import {RatingService} from './service/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnDestroy  {

  appointments: Appointement[];
  private appointmentsSub: Subscription;
  rates = [];
  private appWithRates: { id: number; date_start: Date;  date_end: Date; message: string; state: string; doctor: User; patient: User }[];
  all = true;
  rated: boolean;
  name: String;
  constructor(private rateService: RatingService) { }

  ngOnInit() {
    this.appointmentsSub = this.rateService.getAppointments().subscribe(
      (response) => {
            this.appointments = response;
            console.log('111', response);
                          },
      (e) => {
            console.log('errorr', e);
                          },
      () => {
            this.appointments.forEach((a) => {
                  console.log('222', a);
                  this.rateService.getdoctorRate(a.doctor.id).subscribe(
                    (res) => {
                      console.log('333', res);
                        if (typeof res === 'number') {
                            this.rates.push({rate: res});
                        } else {
                            this.rates.push({rate: 0});
                               }
                                   },
                    () => {
                      console.log('444', a);
                        console.log('error');
                                },
                    () => {
                      console.log('555', a);
                        this.appWithRates = this.appointments.map((item, index) => ({ ...item, ...this.rates[index] }));
          }
        );
      });
    });

  }
  getapp() {
    console.log('efe', this.name);
    this.rateService.getapp(this.name).subscribe((data : any) => {
      return this.appWithRates = data;
    });
  }

  ngOnDestroy() {
    this.appointmentsSub.unsubscribe();
  }

}

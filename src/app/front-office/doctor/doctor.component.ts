import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../services/doctor.service';
import {Doctor} from '../../Models/Doctor';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  providers: [DoctorService]
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[];
  constructor(private  doctorService: DoctorService,private activatedRoute: ActivatedRoute) { }
  n:string;
  speciality_id:number;
  city:string;
  latitude:string;
  longitude:string;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.n = params['name'],
      this.speciality_id = params['speciality_id'],
      this.city = params['city'];
      this.latitude = params['latitude'];
      this.longitude = params ['longitude'];
      console.log(this.latitude);
    });
 if(this.activatedRoute.snapshot.url.toString() === 'allDoctors')
 {
   console.log(this.activatedRoute.url);
   this.doctorService.getAllDoctors().subscribe(data => this.doctors = data);
 }
else
    this.doctorService.getDoctors(this.n,this.speciality_id,this.latitude,this.longitude).subscribe(data => this.doctors = data);
  }


}

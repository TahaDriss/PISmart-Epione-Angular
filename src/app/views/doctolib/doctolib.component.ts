import { Component, OnInit } from '@angular/core';
import { DoctolibService } from '../../services/doctolib.service';

@Component({
  selector: 'app-doctolib',
  templateUrl: './doctolib.component.html',
  styleUrls: ['./doctolib.component.scss']
})
export class DoctolibComponent implements OnInit {

  city: string = "france";
  speciality: string = "medecin-generaliste";
  name: string;
  doctors:any = [];

  constructor(public rest : DoctolibService) { }

  ngOnInit() {
  }

  getDoctorsByName(){
    this.doctors = [];
    this.rest.getDoctorsByName(this.name,this.city).subscribe((data: {}) => {
      console.log(data);
      this.doctors = data;
    });
  }

  getDoctorsBySpeciality(){
    this.doctors = [];
    this.rest.getDoctorsBySpeciality(this.speciality,this.city).subscribe((data: {}) => {
      console.log(data);
      this.doctors = data;
    });
  }

}

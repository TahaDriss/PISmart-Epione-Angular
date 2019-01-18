import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Consultation} from "../../models/Consultation";
import {Appointment} from "../../models/Appointment";

@Component({
  selector: 'app-consultation-add',
  templateUrl: './consultation-add.component.html',
  styleUrls: ['./consultation-add.component.scss']
})
export class ConsultationAddComponent implements OnInit {
  apps: Appointment[] = [];
  priceX:number;
  ratingX:number;
  remarksX:string;
  appointmentX: Appointment;
  constructor(private docService:DoctorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.docService.getListAppointments().subscribe(data => {this.apps = data,
        console.log(this.apps); });
  }

  AddConsultation(consultation: Consultation) {

    const newCons: Object = {

      price: this.priceX,
      rating: this.ratingX,
      remarks: this.remarksX,

    };
    this.docService.AddConsultation(newCons)
        .subscribe();
    this.router.navigate(['/admin/doctors/consultationsList']);
  }
}

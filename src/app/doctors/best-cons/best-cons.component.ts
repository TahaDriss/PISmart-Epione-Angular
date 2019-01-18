import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Consultation} from "../../models/Consultation";

@Component({
  selector: 'app-best-cons',
  templateUrl: './best-cons.component.html',
  styleUrls: ['./best-cons.component.scss']
})
export class BestConsComponent implements OnInit {
  consultations : Consultation[] = [];
  constructor(private ds:DoctorService) { }

  ngOnInit():void {
    this.ds.getBestCons().subscribe(
        data => { this.consultations= data as any;
          console.log(data)}
    )
  }

}

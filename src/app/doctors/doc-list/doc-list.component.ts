import {Component, OnInit, ViewChild} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {ActivatedRoute} from "@angular/router";
import {Doctor} from "../../models/Doctor";


@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit {
  doctors : Doctor[] = [];
  listDoc : Doctor[];


  constructor(public doctorService:DoctorService, private route: ActivatedRoute) { }

  ngOnInit() : void {
    this.doctorService.getDoctors().subscribe(
        data => { this.doctors= data as any;
          console.log(data)}
    )

  }

}

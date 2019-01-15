import { Component, OnInit } from '@angular/core';
import {PatientProfileService} from '../../services/patient-profile.service';
import {Profile} from '../../model/profile';
import {User} from '../../model/user';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
  user : User[];
  constructor(private profileServ: PatientProfileService) { }

  ngOnInit() {
    this.profileServ.getProfile().subscribe(data => this.user = data);
  }

}

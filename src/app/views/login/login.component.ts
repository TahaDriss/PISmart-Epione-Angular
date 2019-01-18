import { Component } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username:string;
  password:string;
  constructor(private ds:DoctorService,private route:Router){}
  ngOnInit() {}
  Login() {

    this.ds.login(this.username, this.password);
  this.route.navigate(['admin/doctors/welcome']);
  }
}

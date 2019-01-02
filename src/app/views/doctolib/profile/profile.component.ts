import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DoctolibService } from '../../../services/doctolib.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  doctor : any = null;

  isCollapsedRPPS : boolean = true;
  isCollapsedMemberAGA : boolean = true;
  isCollapsedstatuts : boolean = true;
  isCollapsednbreInscriptionOrdre : boolean = true;
  isCollapsednbreRCS : boolean = true;
  isCollapsedformeJuridique : boolean = true;
  isCollapsedadresseSocialeSiege : boolean = true;
  isCollapsedsocialReason: boolean = true;

  constructor(private route: ActivatedRoute,private router: Router,public rest : DoctolibService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
            console.log(params.path);
            this.rest.getDoctorsProfile(params.path).subscribe((data: {}) => {
              console.log(data);
              this.doctor = data;
            });
        })
  }

}

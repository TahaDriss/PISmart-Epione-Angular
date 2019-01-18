import {Component, OnInit, ViewChild} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Consultation} from "../../models/Consultation";
import {ActivatedRoute} from "@angular/router";
import {Popup} from "ng2-opd-popup";
import {ModalModule} from "ngx-bootstrap";
import {ModalsComponent} from "../../views/notifications/modals.component";
import {User} from "../../models/User";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {
  consultations : Consultation[] = [];
  x:number;
  user:User;
  priceX:number;
  ratingX:number;
  remarksX:string;

  constructor(public consService: DoctorService, private route: ActivatedRoute, private popup:Popup) { }
  @ViewChild(ModalsComponent) mod:ModalsComponent;
  ngOnInit() : void{
    this.consService.getConsultations().subscribe(
        data => { this.consultations= data as any;
          console.log(data)}
    )
  }

  delete(id) {
    this.consService.delete(id).subscribe();
    this.x= this.consultations.indexOf(id);
    this.consultations.splice(this.x,1);
  }

  clicked() {
    this.mod.primaryModal.display;
    this.popup.show();
  }


  update(consultation: Consultation) {
    const newCons: Object = {

      price: this.priceX,
      rating: this.ratingX,
      remarks: this.remarksX,
    };

    this.consService.updateConsultation(newCons).subscribe();
  }

}

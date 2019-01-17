import { Component, OnInit } from '@angular/core';
import {Path} from '../../models/Path';
import {ActivatedRoute, Router} from '@angular/router';
import {PathService} from '../../services/path.service';
import {TreatmentService} from '../../services/treatment.service';

@Component({
  selector: 'app-detail-path',
  templateUrl: './detail-path.component.html',
  styleUrls: ['./detail-path.component.scss']
})
export class DetailPathComponent implements OnInit {

  id: number;
  private sub: any;
  path: Path = new Path();
  treatments : Object;

  constructor( public pathService: PathService, public treatmentService: TreatmentService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.pathService.getPathById(this.id).subscribe(data => {
      this.path = data;
      console.log(data)
    }, err=>{
      console.log(err)
    });
      this.treatmentService.getTreatmentByPath(this.id).subscribe(data => {
        this.treatments = data;
        console.log(data)
      }, err=>{
        console.log(err)
      })


  }
  deleteTreatFromPath(idTreat){
    this.treatmentService.deleteTreatmentById(idTreat)
      .subscribe(data => {
          console.log(data);

      }, err=>{
        console.log(err)
      });



  }

}

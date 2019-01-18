import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ActivatedRoute} from '@angular/router';
import { Treatment } from '../../../Models/Treatment';
import { TreatmentService } from '../../../services/treatment.service';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})

export class AddListComponent implements OnInit {
  id: number;
  query: string ="";
  private sub: any;
  treatments : Treatment[] = [];

  all : Treatment[]= [];


  constructor(public treatmentService: TreatmentService, private route: ActivatedRoute) { }

  drop(event: CdkDragDrop<string[]>) {
    console.log("Drop start");
    if (event.previousContainer === event.container) {
      console.log("Same container");
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("Other container");
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        console.log("Other Container End");

    }
  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.treatmentService.getTreatmentByPath(this.id).subscribe(data => {
      this.treatments = data;
      console.log(data)
    }, err=>{
      console.log(err)
    });
    this.treatmentService.getTreatments().subscribe(data => {
      this.all = data;
      console.log(data)
    }, err=>{
      console.log(err)
    })



  }

  getTreatmentsColor():string{
    if (this.treatments.length >= 8)
      return "#f86c6b";
    else if (this.treatments.length >=5)
    return "#63c2de";
    else if (this.treatments.length > 1)
      return "#4dbd74";
    else
      return "#ffc107";
}
  addTreatments(){
    this.treatmentService.copyListTreatments(this.treatments, this.id)
      .subscribe(data => {
        console.log(data)
      }, err=>{
        console.log(err)
      })
  }





}




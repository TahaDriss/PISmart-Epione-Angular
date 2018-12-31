import { Component, OnInit } from '@angular/core';
import {Path} from '../../models/Path';
import {PathService} from '../../services/path.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-path',
  templateUrl: './add-path.component.html',
  styleUrls: ['./add-path.component.scss']
})
export class AddPathComponent implements OnInit {


  path:Path = new Path();
  pathForm: FormGroup;
  constructor(public pathService: PathService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pathForm = this.formBuilder.group(
      {
        description : ['', [ Validators.required]],
        date : ['', [ Validators.required]]

      })
  }



  ajouterPath(desc , d){
    this.path.description = desc.value;
    this.path.date_path = d.value;
    console.log(this.path);
    this.pathService.addPath(this.path)
      .subscribe(data => {
        console.log(data)
      }, err=>{
        console.log(err)
      })
  }
  get date() { return this.pathForm.get('date'); }

  get description() { return this.pathForm.get('description'); }

}

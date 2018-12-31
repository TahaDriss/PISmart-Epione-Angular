import { Component, OnInit } from '@angular/core';
import {PathService} from '../../services/path.service';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-list-paths',
  templateUrl: './list-paths.component.html',
  styleUrls: ['./list-paths.component.scss']
})
export class ListPathsComponent implements OnInit {
  paths: Object;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private service : PathService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.service.getPaths().subscribe(result => {
      this.paths = result;
      console.log(this.paths);
      this.dtTrigger.next();

    });

  }

}

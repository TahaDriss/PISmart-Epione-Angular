import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Report} from '../../models/Report';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-detail-report',
  templateUrl: './detail-report.component.html',
  styleUrls: ['./detail-report.component.scss']
})
export class DetailReportComponent implements OnInit {
  id: number;
  private sub: any;
  report : Report = new Report();
  constructor(public reportService: ReportService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.reportService.getReportById(this.id).subscribe(result => {
      this.report = result;
      console.log(this.report);
    });
  }

}

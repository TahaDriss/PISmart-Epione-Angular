import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: 'app-list-reports',
  templateUrl: './list-reports.component.html',
  styleUrls: ['./list-reports.component.scss']
})
export class ListReportsComponent implements OnInit {

  reports: object;
  constructor(public reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getReports().subscribe(result => {
      this.reports = result;
      console.log(this.reports);
    });
  }

}

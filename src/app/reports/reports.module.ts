import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReportComponent } from './add-report/add-report.component';
import { ListReportsComponent } from './list-reports/list-reports.component';
import { DetailReportComponent } from './detail-report/detail-report.component';
import {RouterModule, Routes} from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {FormsModule} from '@angular/forms';
import {ReportService} from '../services/report.service';



const routes: Routes = [
  { path : '', component : ListReportsComponent },
  { path : 'add', component : AddReportComponent },
  { path : 'detail/:id', component : DetailReportComponent, runGuardsAndResolvers: 'always' },


];
@NgModule({
  declarations: [AddReportComponent, ListReportsComponent, DetailReportComponent],
  imports: [
    CommonModule,    RouterModule.forChild(routes), CKEditorModule, FormsModule

  ],
  providers: [ReportService],

})
export class ReportsModule { }

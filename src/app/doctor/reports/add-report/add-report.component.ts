import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as jspdf from "jspdf";
import html2canvas from 'html2canvas';
import { ReportService } from '../../../services/report.service';
import { Report } from '../../../Models/Report';



@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {
  report: Report = new Report();
  public Editor = ClassicEditor;
  public model = {
    editorData: ''
  };

  constructor(public reportService: ReportService) { }

  ngOnInit() {
    this.model.editorData = '<h2><strong>Report</strong> Reference</h2><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;01/01/1900</p><blockquote><p>Lorem ipsum dolor sit amet</p></blockquote><p><i><strong>content : </strong></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eaque incidunt magni minus modi officiis porro quasi quidem sapiente soluta? Ducimus facere fuga illo in quos recusandae repellat repudiandae voluptates.</p><ol><li>Lorem ipsum dolor sit amet,</li><li>Lorem ipsum dolor sit amet,</li><li>Lorem ipsum dolor sit amet,</li><li>&nbsp;</li></ol>';

  }
  public captureScreen()  {
    var data = document.getElementById('contentToConvert2');

    // data.innerHTML= this.model.editorData;
    console.log(data);
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
  ajouterReport(){
    this.report.content = this.model.editorData;
    //this.report.date_rep = Date.now().toLocaleString();
    console.log(this.report);
    this.reportService.addReport(this.report)
      .subscribe(data => {
        console.log(data)
      }, err=>{
        console.log(err)
      })
  }

}

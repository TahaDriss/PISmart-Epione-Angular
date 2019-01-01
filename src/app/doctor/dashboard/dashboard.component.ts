import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DoctorService } from '../../services/doctor.service';
import { Helpers } from './../../helpers';

@Component({
  templateUrl: 'dashboard.component.html',
  styles : [`
  .top-card-value {
    width:calc(100% - 40px);
    display:inline-block;
    text-align : center;
    margin: 0;
  }
  .app-card-heading {
    marging: 0;
  }
  `]
})
export class DashboardComponent implements OnInit {

  appointments = [];
  average_duration: number;
  week_appointments: number;
  patients_count: number;
  apps_per_day: number;
  next_ongoing;
  dayChartData: Array<any> = [];
  dayChartLabels: Array<any> = [];
  monthChartData: Array<any> = [];
  monthChartLabels: Array<any> = [];
  yearChartData: Array<any> = [];
  yearChartLabels: Array<any> = [];
  chartOptions: any = {
    responsive: true
  };
  chartLegend = true;
  hideDropDown = true;
  chart = 1;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    Helpers.setLoading(true);
    this.doctorService.getDashboard().subscribe(
      data => {
        this.appointments = data['appointments upcoming'];
        this.average_duration = data['average duration for consultations'];
        this.week_appointments = data['total appointments this week'];
        this.patients_count = data['total patients'];
        this.apps_per_day = data['average appointements per day'];
        this.next_ongoing = data['ongoing'];
        const days_map = new Map(Object.entries(data['appointment per day']));
        this.dayChartLabels = Array.from(days_map.keys()).reverse();
        this.dayChartData = [
          {data: Array.from(days_map.values()).reverse(), label: 'Appointments per day'},
        ];
        const month_map = new Map(Object.entries(data['appointment per month']));
        this.monthChartLabels = Array.from(month_map.keys());
        this.monthChartData = [
          {data: Array.from(month_map.values()), label: 'Appointments per month'},
        ];
        const year_map = new Map(Object.entries(data['appointment per year']));
        this.yearChartLabels = Array.from(year_map.keys());
        console.log(this.yearChartLabels);
        this.yearChartData = [
          {data: Array.from(year_map.values()), label: 'Appointments per year'},
        ];
        Helpers.setLoading(false);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  toggleDropDown() {
    document.getElementById('chartDropDown').classList.toggle('show');
  }
}

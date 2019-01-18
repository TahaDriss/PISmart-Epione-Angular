import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../containers';
import { AuthGuard } from '../auth/auth.guard';
import { DocListComponent } from './doc-list/doc-list.component';
import { NgbdRatingDecimal } from './rating/rating-decimal';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { MapComponent } from './map/map.component';
import { BestConsComponent } from './best-cons/best-cons.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentdelComponent } from './appointmentdel/appointmentdel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultationAddComponent } from './consultation-add/consultation-add.component';

const routes: Routes = [{
  path: 'doctor',
  canActivate: [AuthGuard],
  component: DefaultLayoutComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: '',
      redirectTo: '/doctor/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'paths',
      loadChildren: './paths/paths.module#PathsModule'
    },
    {
      path: 'treats',
      loadChildren: './treatments/treatments.module#TreatmentsModule'
    },
    {
      path: 'reports',
      loadChildren: './reports/reports.module#ReportsModule'
    },
    {
      path: 'consultationsList',
      component: ConsultationsComponent,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'consultationsAdd',
      component: ConsultationAddComponent,
      runGuardsAndResolvers: 'always'
    },

    {
      path: 'calendar',
      component: CalendrierComponent,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'appDel',
      component: AppointmentdelComponent,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'bestCons',
      component: BestConsComponent,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'app',
      component: AppointmentComponent,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'doctorList',
      component: DocListComponent,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'rating',
      component: NgbdRatingDecimal,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'map',
      component: MapComponent,
      runGuardsAndResolvers: 'always'
    },
    {
      path: 'welcome',
      component: AccueilComponent,
      runGuardsAndResolvers: 'always'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }

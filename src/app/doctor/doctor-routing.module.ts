import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DefaultLayoutComponent } from '../containers';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [{
  path: 'doctor',
  canActivate: [AuthGuard],
  component: DefaultLayoutComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path : '',
      redirectTo : '/doctor/dashboard',
      pathMatch : 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }

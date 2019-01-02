import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DoctolibComponent } from './doctolib.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DoctolibComponent,
    data: {
      title: 'Doctolib'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Doctolib'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctolibRoutingModule {}

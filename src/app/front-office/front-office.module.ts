import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path : '', component : AccueilComponent },
];
@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,  RouterModule.forChild(routes)
  ]
})
export class FrontOfficeModule { }

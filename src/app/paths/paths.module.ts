import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPathsComponent } from './list-paths/list-paths.component';
import {RouterModule, Routes} from '@angular/router';
import {PathService} from '../services/path.service';
import {DataTablesModule} from 'angular-datatables';
import { AddPathComponent } from './add-path/add-path.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailPathComponent } from './detail-path/detail-path.component';
import {TreatmentService} from '../services/treatment.service';




const routes: Routes = [
  { path : '', component : ListPathsComponent },
  { path : 'add', component : AddPathComponent },
  { path : 'detail/:id', component : DetailPathComponent, runGuardsAndResolvers: 'always' },


];
@NgModule({
  declarations: [ListPathsComponent, AddPathComponent, DetailPathComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PathService, TreatmentService],


})
export class PathsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListComponent } from './add-list/add-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule, Routes} from '@angular/router';
import {PathService} from '../services/path.service';
import {TreatmentService} from '../services/treatment.service';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from '../pipes/SearchPipe';

const routes: Routes = [
  { path : 'detail/:id', component : AddListComponent, runGuardsAndResolvers: 'always' },


];
@NgModule({
  declarations: [AddListComponent, SearchPipe],
  imports: [
    CommonModule, DragDropModule, RouterModule.forChild(routes), FormsModule

  ],
  providers: [PathService, TreatmentService],

})
export class TreatmentsModule { }

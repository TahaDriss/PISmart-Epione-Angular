import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import {RoundPipe} from '../rating/pipe/round.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    RoundPipe
  ],
  declarations: [
    RoundPipe,
  ]
})
export class SharedModule { }

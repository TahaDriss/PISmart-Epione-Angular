import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from '@angular/router';
import {RatingComponent} from '../rating/rating.component';
import {RoundPipe} from '../rating/pipe/round.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ChatComponent} from '../chat/chat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChatModule } from '../chat/chat.module';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../shared/material/material.module';
import {SocketService} from '../chat/shared/services/socket.service';
import {DialogUserComponent} from '../chat/dialog-user/dialog-user.component';


const routes: Routes = [
  { path : '', component : AccueilComponent },
  { path : 'rating', component : RatingComponent },
  { path : 'chat', component : ChatComponent },
];
@NgModule({
  declarations: [AccueilComponent, RatingComponent, ChatComponent, DialogUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [SocketService],
  entryComponents: [DialogUserComponent]
})
export class FrontOfficeModule { }

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotService } from '../../services/chatbot.service';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from './components';

@NgModule({
  declarations: [ChatbotComponent,
    MessageListComponent,
  MessageFormComponent,
  MessageItemComponent],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers:[
    ChatbotService
  ]
})
export class ChatbotModule { }

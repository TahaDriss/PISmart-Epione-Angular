import { Component, OnInit } from '@angular/core';
import { Message } from '../../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  public message : Message;
  public messages : Message[];

  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [];
   }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../../services/chatbot.service';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  private message: Message;

  constructor() { }

  ngOnInit() {
  }

}

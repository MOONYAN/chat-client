import { Message } from './../model/message.vm';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() messages: Message[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Message } from './model/message.vm';
import { SendMessageDto } from './dto/send-message.dto';
import { UserService } from './user.service';
import { NewedMessage } from './model/newed-message.vm';
import { RoomService } from './room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  messages: Message[] ;

  constructor(
    private roomService: RoomService,
    private userService: UserService) { }


  ngOnInit(): void {
    this.messages = [
      new Message({name:'Ninja', text:"Init room"}),
      new Message({name:'Ninja', text:"Enjoy messaging"}),
    ];
  }

  sendMessage(newedMessage: NewedMessage) {
    console.log(newedMessage);
    const dto = {
      name: this.userService.getName(),
      text: newedMessage.text
    } as SendMessageDto;
    this.roomService.send(dto);
  }
}

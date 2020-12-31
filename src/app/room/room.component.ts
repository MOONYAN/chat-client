import { Message } from './model/message.vm';
import { SendMessageDto } from './dto/send-message.dto';
import { UserService } from './user.service';
import { NewedMessage } from './model/newed-message.vm';
import { RoomService } from './room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnDestroy {

  messages: Message[] = [];
  private destory$ = new Subject();

  constructor(
    private roomService: RoomService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.messages.push(
      new Message({ name: 'Ninja', text: "Init room" }),
      new Message({ name: 'Ninja', text: "Enjoy messaging" })
    );
    this.receiveMessage();
  }

  sendMessage(newedMessage: NewedMessage) {
    console.log(newedMessage);
    const dto = {
      name: this.userService.getName(),
      text: newedMessage.text
    } as SendMessageDto;
    this.roomService.send(dto);
  }

  brocastMessage(newedMessage: NewedMessage) {
    console.log(newedMessage);
    const dto = {
      name: this.userService.getName(),
      text: newedMessage.text
    } as SendMessageDto;
    this.roomService.brocast(dto);
  }

  private receiveMessage() {
    this.roomService.receive().pipe(
      map(dto => new Message(dto)),
      takeUntil(this.destory$)
    ).subscribe(
      msg => this.messages.push(msg)
    );
  }

  ngOnDestroy(): void {
    this.destory$.next();
  }
}

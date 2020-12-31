import { Observable } from 'rxjs';
import { ReceiveMessageDto } from './dto/receive-message.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private socket: Socket) { }

  send(dto: SendMessageDto) {
    this.socket.emit('chatToServer', dto)
    console.log(`Room service send: ${dto}`);
  }

  brocast(dto: SendMessageDto) {
    this.socket.emit('brocastToServer', dto)
    console.log(`Room service brocast: ${dto}`);
  }

  receive(): Observable<ReceiveMessageDto> {
    return this.socket.fromEvent<ReceiveMessageDto>('chatToClient');
  }
}

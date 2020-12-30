import { SendMessageDto } from './dto/send-message.dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  send(dto: SendMessageDto) {
    console.log(`Room service send: ${dto}`);
  }
}

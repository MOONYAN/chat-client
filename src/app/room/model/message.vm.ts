import { ReceiveMessageDto } from './../dto/receive-message.dto';
export class Message {
  name: string;
  text: string;

  constructor(dto: ReceiveMessageDto) {
    this.name = dto.name;
    this.text = dto.text;
  }
}

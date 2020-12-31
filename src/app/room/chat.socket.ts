import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ChatSocket extends Socket {

  constructor() {
    const config: SocketIoConfig = {
      url: 'ws://localhost:3000/chat',
      options: {
        transports: ['websocket']
      }
    }
    super(config);
  }
}

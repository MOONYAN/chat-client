import { environment } from './../../environments/environment';
import { UserService } from './../user/user.service';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatSocket extends Socket {

  constructor(userService: UserService) {
    const config: SocketIoConfig = {
      url: `${environment.websocket_url}/chat`,
      options: {
        transports: ['websocket'],
        query: {
          name: userService.getName()
        }
      }
    }
    super(config);
  }
}

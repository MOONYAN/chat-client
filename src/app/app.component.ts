import { Profile } from './user/model/profile.vm';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'chat-client';

  profile$: Observable<Profile>

  constructor(
    private router: Router,
    userService: UserService
  ) {
    this.profile$ = userService.getProfile();
  }

  leaveChat() {
    this.router.navigate(['/user'])
  }
}

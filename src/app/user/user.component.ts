import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Profile } from './model/profile.vm';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router:Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  updateProfile(profile: Profile) {
    this.userService.updateProfile(profile);
    this.router.navigate(['/room']);
  }
}

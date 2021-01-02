import { Profile } from './model/profile.vm';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject = new BehaviorSubject<Profile>(new Profile('Anonymous'));

  constructor() { }

  getName(): string {
    const profile = this.subject.value;
    return profile.name;
  }

  getProfile(): Observable<Profile> {
    return this.subject.asObservable();
  }

  updateProfile(profile: Profile) {
    this.subject.next(profile);
  }
}

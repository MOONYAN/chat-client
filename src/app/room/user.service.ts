import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private name: string = 'Alice';

  constructor() { }

  setName(name:string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

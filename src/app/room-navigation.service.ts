import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RoomNavigationService {

  private roomToGoTo = new BehaviorSubject('');
  currentMessage = this.roomToGoTo.asObservable();

  constructor() { }

  changeRoom(message: string) {
    console.log("Navigation service got request to change room to " + message);
    this.roomToGoTo.next(message);
  }

}
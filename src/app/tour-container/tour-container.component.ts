import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TolstoiFirstFloorComponent } from '../tolstoi-first-floor/tolstoi-first-floor.component';
import { RoomNavigationService } from '../room-navigation.service';

@Component({
  selector: 'app-tour-container',
  templateUrl: './tour-container.component.html',
  styleUrls: ['./tour-container.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('0.75s ease-out', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})

export class TourContainerComponent implements OnInit {
  building: string = '';
  room: string = '';
  showControls = true;
  roomToNavigateTo: string = '';
  currentFloor = 1;

  constructor(private route: ActivatedRoute, private roomService: RoomNavigationService) { 
    this.roomService.currentMessage.subscribe(message =>  {
      console.log("Update received by tour container, attempting to navigate to " + message);
      this.roomToNavigateTo = message;
    });
  }   

  

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.building = data['building'];
      if (this.building == 'teine') {
        this.currentFloor = 2;
      }
      console.log('Entered building ' + this.building);
    });
  }


  closeControlDialog() {
    this.showControls = false;
  }

  public readRoomName(event: any) {
    this.room = event;
  }

}

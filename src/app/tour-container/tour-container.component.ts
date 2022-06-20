import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TolstoiFirstFloorComponent } from '../tolstoi-first-floor/tolstoi-first-floor.component';
import { RoomNavigationService } from '../room-navigation.service';
import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
import {Location} from "@angular/common";
const TWEEN = Panolens.TWEEN;
const PANOLENS = Panolens.PANOLENS;



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
  showControls = false;
  roomToNavigateTo: string = '';
  currentFloor = 1;
  viewer: any;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomNavigationService,
    private router: Router,
    private location: Location
  ) {
    this.roomService.currentMessage.subscribe(message =>  {
      console.log("Update received by tour container, attempting to navigate to " + message);
      this.roomToNavigateTo = message;
    });
  }



  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.currentFloor = data['floor'] as number;
      console.log('Entered building ' + this.building);
    });
    if (this.viewer == null) console.warn("no viewer found on init");
  }


  closeControlDialog() {
    this.showControls = false;
  }

  public readRoomName(event: any) {
    this.room = event;
  }

  getViewer(event: any) {
    this.viewer = event;
    this.route.queryParams.subscribe(params => {
      console.error('Received params');
      console.error(params);
      if (params['hideControls'] != null) {
        this.showControls = params['hideControls'] == true;
      } else {
        this.showControls = true;
      }
      this.roomService.changeRoom(params['startingRoom']);
      if (params['floor']) {
        this.location.replaceState(
          this.router.createUrlTree(
            [params['floor']],
          ).toString()
        )
      }
    });
    console.warn("found viewer!");
    console.warn(event);
  }

  changeFloor(event: any) {
    const newFloor = event as number;
    console.log("Changing to floor " + newFloor)
    let floorNav = '';
    let startingRoom = '';
    switch (newFloor) {
      case 1:
        floorNav = '/tolstoi';
        startingRoom = 'lobbyPano3';
        break;
      case 2:
        floorNav = '/tolstoi2';
        if (this.currentFloor == 3) {
          startingRoom = 'stairsPano2';
        }
        break;
      case 3:
        floorNav = '/tolstoi3';
        break;
      case 4:
        floorNav = '/tolstoi0';
        startingRoom = 'enterancePano';
        break;
      
    }
    this.router.navigate([floorNav], { queryParams: {
        startingRoom: startingRoom,
        hideControls: true,
        floor: floorNav.substring(1),
      }});
  }

  zoomIn() {
    var currentZoom = this.viewer.camera.fov;
    var newZoom = currentZoom - 10;
    if(newZoom < 30) newZoom = 30;
    this.viewer.setCameraFov(newZoom);
  }

  zoomOut() {
    var currentZoom = this.viewer.camera.fov;
    var newZoom = currentZoom + 10;
    if(newZoom > 110) newZoom = 110;
    this.viewer.setCameraFov(newZoom);
  }

  ROTATION_POSITION = 0.05;
  ROTATION_SPEED = 50;

  rotateLeftRight(param: number /* 0 - right, 1 - left */) {
      let go = this.ROTATION_POSITION;
      let back = - this.ROTATION_POSITION;
      let pos  = param < 1 ? go : back;
      let easing = {val : pos};
      let tween = new TWEEN.Tween(easing)
          .to({val: 0}, this.ROTATION_SPEED)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(() => {
              this.viewer.OrbitControls.rotateLeft(easing.val)
      }).start();
  }

  rotateUpDown(param: number /* 0 - down, 1- up */) {
      let go = this.ROTATION_POSITION;
      let back = -this.ROTATION_POSITION;
      let pos  = param < 1 ? go : back;
      let easing = {val : pos};
      let tween = new TWEEN.Tween(easing)
          .to({val: 0}, this.ROTATION_SPEED)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(() => {
              this.viewer.OrbitControls.rotateUp(easing.val)
      }).start();
  }

}

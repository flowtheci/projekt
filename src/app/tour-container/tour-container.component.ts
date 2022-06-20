import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TolstoiFirstFloorComponent } from '../tolstoi-first-floor/tolstoi-first-floor.component';
import { RoomNavigationService } from '../room-navigation.service';
import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
import {DOCUMENT, Location} from "@angular/common";
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
  elem: any;
  isFullscreen = false;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomNavigationService,
    private router: Router,
    private location: Location,
    @Inject(DOCUMENT) private document: any
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
    this.elem = document.documentElement;
  }


  closeControlDialog() {
    this.showControls = false;
  }

  public readRoomName(event: any) {
    this.room = event;
  }

  toggleFullScreen() {
    this.isFullscreen = !this.isFullscreen;
    this.isFullscreen ? this.openFullscreen() : this.closeFullscreen();
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
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
      case 0:
        floorNav = '/tolstoi0';
        startingRoom = 'enterancePano';
        break;
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
        floorNav = '/tolstoi3';
        startingRoom = 'hallway5Pano'; 
        break;
      case 5:
        floorNav = '/tolstoi2';
        startingRoom = 'stairsPano1';
        break;
      case 6:
        floorNav = '/tolstoi';
        startingRoom = 'room118';
         break;
      case 7:
        floorNav = '/tolstoi2';
        startingRoom = 'roomPano2';
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

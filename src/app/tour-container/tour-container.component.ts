import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TolstoiFirstFloorComponent } from '../tolstoi-first-floor/tolstoi-first-floor.component';
import { RoomNavigationService } from '../room-navigation.service';
import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
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
  showControls = true;
  roomToNavigateTo: string = '';
  currentFloor = 1;
  viewer: any;

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
    console.log("YEEEP!: " + this.room);
  }

  getViewer(event: any) {
    this.viewer = event;
  }


  zoomSetup() {
    document.querySelector( '#zoom-in' )?.addEventListener( 'click', () =>{
      var currentZoom = this.viewer.camera.fov;
        var newZoom = currentZoom - 10;
        if(newZoom < 30) newZoom = 30;
        this.viewer.setCameraFov(newZoom);
      });
    document.querySelector( '#zoom-out' )?.addEventListener( 'click', () =>{
      var currentZoom = this.viewer.camera.fov;
      var newZoom = currentZoom + 10;
      if(newZoom > 110) newZoom = 110;
      this.viewer.setCameraFov(newZoom);
      });
    document.querySelector( '#left' )?.addEventListener( 'click', () =>{
      this.rotateLeftRight(1);
      });
    document.querySelector( '#right' )?.addEventListener( 'click', () =>{
      this.rotateLeftRight(0);
      });
    document.querySelector( '#up' )?.addEventListener( 'click', () =>{
      this.rotateUpDown(1);
      });
    document.querySelector( '#down' )?.addEventListener( 'click', () =>{
      this.rotateUpDown(0);
      });	
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

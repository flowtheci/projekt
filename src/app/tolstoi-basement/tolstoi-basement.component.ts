import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
const TWEEN = Panolens.TWEEN;
const PANOLENS = Panolens.PANOLENS;


@Component({
  selector: 'app-tolstoi-basement',
  templateUrl: './tolstoi-basement.component.html',
  styleUrls: ['./tolstoi-basement.component.scss']
})
export class TolstoiBasementComponent implements OnInit, AfterViewInit, OnDestroy {

  pano = PANOLENS;
  selectedRoom: string = '';

  @Input() set goToRoom(value: string) {
    if (value == null || value == '') return;
    console.log("Navigation event received, attempting navigation...");
    this.navigateToRoom(value);
 
 }
  @Output() roomMessage = new EventEmitter<string>();
  @Output() tourViewer = new EventEmitter<any>;
  @Output() requestFloorChange = new EventEmitter<number>();

  // Load all images as constants
  entranceImage = 'assets/Tolstoi/kelder/3_0_koridor klassi 001-Edit-Edit.jpg'
  basementImage = 'assets/Tolstoi/kelder/3_0_001-Edit-Edit.jpg'
  
  entrancePano = new PANOLENS.ImagePanorama(this.entranceImage);
  basementPano = new PANOLENS.ImagePanorama(this.basementImage);


  constructor() { }

  setRoom(room: string) {
    this.selectedRoom = room;
    this.roomMessage.emit(this.selectedRoom)
  }

  changeFloor(floor: number) {
    this.requestFloorChange.emit(floor);
  }

  ngOnInit(): void {
    this.tourViewer.emit(this.viewer);
  }

  ngAfterViewInit(): void {
    this.loadFloorData();
  }

  ngOnDestroy(): void {
    this.disposePanoramaContainer();
  }

  viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
    controlButtons: ['setting'],
});

public disposePanoramaContainer(){
  this.viewer.destroy();
  const elements = document.getElementsByClassName('panolens-container');
  while(elements.length > 0){
      elements[0].parentNode?.removeChild(elements[0]);
  }
}

public getCurrentRoom() {
  return this.selectedRoom;
}

navigateToRoom(room: string) {
  const roomPano = eval("this." + room);
  this.viewer.setPanorama(roomPano);
}


public loadFloorData() {
  this.viewer.add(this.entrancePano);
  this.viewer.add(this.basementPano);
  
  
  // Entrance door view
  this.entrancePano.link(this.basementPano, new THREE.Vector3(3030.67, -3947.14, 419.42));
  this.basementPano.link(this.entrancePano, new THREE.Vector3(-2502.38, -800.33, 4250.98));

  // Floor change button
  const goUpFloor = new PANOLENS.Infospot(300, '/assets/icons/elevator.png');
  goUpFloor.position.set(-4959.32, 401.28, -461.82);
  goUpFloor.addEventListener('click', () => {
    this.changeFloor(1);
  });
  this.entrancePano.add(goUpFloor);

  var lookAtPositions = [
    new THREE.Vector3(4438.96, -2278.17, 218.82 ),
    new THREE.Vector3(4752.31, -292.03, 1511.91 ),
  
  
    ];

  // Add console log event listeners for every panorama object
  this.entrancePano.addEventListener('enter-fade-start', () => {
    console.log('entrancePano entered');
    this.setRoom('entrancePano');
    this.viewer.tweenControlCenter( lookAtPositions[0], 0 );
  })
  this.basementPano.addEventListener('enter-fade-start', () => {
    console.log('basementPano entered')
    this.setRoom('basementPano');
    this.viewer.tweenControlCenter( lookAtPositions[1], 0 );
  })

  window.dispatchEvent(new Event('resize'));

  }
}
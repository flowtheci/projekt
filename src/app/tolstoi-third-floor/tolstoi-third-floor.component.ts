import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
import { Input, Output, EventEmitter } from '@angular/core';
const TWEEN = Panolens.TWEEN;
const PANOLENS = Panolens.PANOLENS;


@Component({
  selector: 'app-tolstoi-third-floor',
  templateUrl: './tolstoi-third-floor.component.html',
  styleUrls: ['./tolstoi-third-floor.component.scss']
})
export class TolstoiThirdFloorComponent implements OnInit, AfterViewInit, OnDestroy {

  pano = PANOLENS;
  selectedRoom: string = '';

  @Input() set goToRoom(value: string) {
    if (value == null || value == '') return;
    console.log("Navigation event received, attempting navigation...");
    this.navigateToRoom(value);
  }



  @Output() tourViewer = new EventEmitter<any>;
  @Output() roomMessage = new EventEmitter<string>();
  @Output() requestFloorChange = new EventEmitter<number>();

  changeFloor(floor: number) {
    this.requestFloorChange.emit(floor);
 
 }
  stairsImage = 'assets/Tolstoi/3.korrus/3_3_300 trepp alla-Edit.jpg'
  hallwayImage = 'assets/Tolstoi/3.korrus/3_3_300-Edit.jpg'
  workroomImage = 'assets/Tolstoi/3.korrus/3_3_302-Edit.jpg'
  workroom2Image = 'assets/Tolstoi/3.korrus/3_3_308-Edit.jpg'
  workroom3Image = 'assets/Tolstoi/3.korrus/3_3_309-Edit.jpg'
  workroom4Image = 'assets/Tolstoi/3.korrus/3_3_310-Edit.jpg'
  hallway2Image = 'assets/Tolstoi/3.korrus/3_3_314 koridor 1.1-Edit.jpg'
  hallway3Image = 'assets/Tolstoi/3.korrus/3_3_314 koridor 1.2-Edit.jpg'
  hallway4Image = 'assets/Tolstoi/3.korrus/3_3_314 koridor 1.3-Edit.jpg'
  roomImage = 'assets/Tolstoi/3.korrus/3_3_315-Edit.jpg'
  hallway5Image = 'assets/Tolstoi/3.korrus/3_3_316a-Edit.jpg'
  workroom5Image = 'assets/Tolstoi/3.korrus/3_3_319 1.1-Edit.jpg'
  workroom6Image = 'assets/Tolstoi/3.korrus/3_3_319 1.2-Edit.jpg'
  hallway6Image = 'assets/Tolstoi/3.korrus/3_3_koridor 1.4-Edit.jpg'
 
 
 
  stairsPano = new PANOLENS.ImagePanorama(this.stairsImage)
  hallwayPano = new PANOLENS.ImagePanorama(this.hallwayImage)
  workroomPano = new PANOLENS.ImagePanorama(this.workroomImage)
  workroom2Pano = new PANOLENS.ImagePanorama(this.workroom2Image)
  workroom3Pano = new PANOLENS.ImagePanorama(this.workroom3Image)
  workroom4Pano = new PANOLENS.ImagePanorama(this.workroom4Image)
  hallway2Pano = new PANOLENS.ImagePanorama(this.hallway2Image)
  hallway3Pano = new PANOLENS.ImagePanorama(this.hallway3Image)
  hallway4Pano = new PANOLENS.ImagePanorama(this.hallway4Image)
  roomPano = new PANOLENS.ImagePanorama(this.roomImage)
  hallway5Pano = new PANOLENS.ImagePanorama(this.hallway5Image)
  workroom5Pano = new PANOLENS.ImagePanorama(this.workroom5Image)
  workroom6Pano = new PANOLENS.ImagePanorama(this.workroom6Image)
  hallway6Pano = new PANOLENS.ImagePanorama(this.hallway6Image)

  constructor() { }

  setRoom(room: string) {
    this.selectedRoom = room;
    this.roomMessage.emit(this.selectedRoom)
  }

  ngOnInit(): void {
    this.loadFloorData();
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

  //järjekord
  this.viewer.add(this.stairsPano);
  this.viewer.add(this.hallwayPano);
  this.viewer.add(this.hallway4Pano);
  this.viewer.add(this.hallway6Pano);
  this.viewer.add(this.workroomPano);
  this.viewer.add(this.hallway3Pano);
  this.viewer.add(this.workroom2Pano);
  this.viewer.add(this.workroom3Pano);
  this.viewer.add(this.workroom4Pano);
  this.viewer.add(this.hallway2Pano);
  this.viewer.add(this.roomPano);
  this.viewer.add(this.hallway5Pano);
  this.viewer.add(this.workroom5Pano);
  this.viewer.add(this.workroom6Pano);



var lookAtPositions3 = [
    new THREE.Vector3(-4779.06, -771.01, 1223.94 ),//0, stairs .....
    new THREE.Vector3(4755.91, -1475.65, -361.64 ),//1 hallway1 ......
    new THREE.Vector3(4746.00, -584.60, -1432.44 ),//2 302 workroom ...
    new THREE.Vector3(-1500.92, -1613.01, -4483.66 ),// 308 workroom ....
    new THREE.Vector3(-1091.32, -1716.61, -4558.45 ),// 309 workroom .....
    new THREE.Vector3(4123.68, -1415.66, 2436.13 ),//5 310 workroom ......
    new THREE.Vector3(4983.09, -371.78, -43.91 ),//6 koridor 3 punkt .....
    new THREE.Vector3(-4949.58, -546.12, -320.65 ),//7 koridori 2 punkt ......
    new THREE.Vector3(-3385.37, -509.78, 3634.60),//8 koridori 1 punkt .....
    new THREE.Vector3(-4859.89, -1101.75, 285.85 ),//9 315 workroom ......
    new THREE.Vector3(4193.80, -2549.94, -932.85 ),//10 316 koridor/trepp ......
    new THREE.Vector3(-1665.96, -469.29, -4682.65 ),//11 320 workroom .....
    new THREE.Vector3(-4964.37, -478.20, 191.71 ),//12 319 workroom ......
    new THREE.Vector3(-3828.21, -1919.36, -2570.00 ),//13 koridor tuppa 302 ....
   ];
  
  
  
  //add console
  this.stairsPano.addEventListener('enter-fade-start', () => {
      console.log('stairsPano entered')
      this.setRoom('stairsPano');
      this.viewer.tweenControlCenter( lookAtPositions3[0], 0 );
  })

  this.hallwayPano.addEventListener('enter-fade-start', () => {
      console.log('hallwayPano entered')
      this.setRoom('hallwayPano');
      this.viewer.tweenControlCenter( lookAtPositions3[1], 0);
  })
  this.workroomPano.addEventListener('enter-fade-start', () => {
      console.log('workroomPano entered')
      this.setRoom('workroomPano');
      this.viewer.tweenControlCenter( lookAtPositions3[2], 0 );
  })
  this.workroom2Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom2Pano entered')
      this.setRoom('workroom2Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[3], 0 );
  })
  this.workroom3Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom3Pano entered')
      this.setRoom('workroom3Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[4], 0 );
  })
  this.workroom4Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom4Pano entered')
      this.setRoom('workroom4Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[5], 0 );
  })
  this.hallway2Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway2Pano entered')
      this.setRoom('hallway2Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[6], 0 );
  })
  this.hallway3Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway3Pano entered')
      this.setRoom('hallway3Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[7], 0 );
  })
  this.hallway4Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway4Pano entered')
      this.setRoom('hallway4Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[8], 0);
  })
  this.roomPano.addEventListener('enter-fade-start', () => {
      console.log('roomPano entered')
      this.setRoom('roomPano');
      this.viewer.tweenControlCenter( lookAtPositions3[9], 0 );
  })
  this.hallway5Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway5Pano entered')
      this.setRoom('hallway5Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[10], 0 );
  })
  this.workroom5Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom5Pano entered')
      this.setRoom('workroom5Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[11], 0 );
  })
  this.workroom6Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom6Pano entered')
      this.setRoom('workroom6Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[12], 0 );
  })
  this.hallway6Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway6Pano entered')
      this.setRoom('hallway6Pano');
      this.viewer.tweenControlCenter( lookAtPositions3[13], 0 );
  })
  
  


// link panoramas with points
// trepist üles minek 
this.stairsPano.link(this.hallwayPano, new THREE.Vector3(-4786.19, -1212.11, 736.90));

// läbi ukse minek koridori
this.hallwayPano.link(this.stairsPano, new THREE.Vector3(-3428.38, -3609.56, 412.66));
this.hallwayPano.link(this.hallway4Pano, new THREE.Vector3(4507.22, -1918.81, -992.75));

// esimene kolmest koridori osast
this.hallway4Pano.link(this.hallwayPano, new THREE.Vector3(4094.17, -211.60, -2848.10));
this.hallway4Pano.link(this.hallway6Pano, new THREE.Vector3(-2965.87, -1046.58, -3876.58)); 
this.hallway4Pano.link(this.hallway3Pano, new THREE.Vector3(2317.11, -2385.64, 3722.85));
this.hallway4Pano.link(this.workroom3Pano, new THREE.Vector3(4704.67, -307.57, -1643.26));


// ühendus töötoa 302-ga
this.hallway6Pano.link(this.hallway4Pano, new THREE.Vector3(2019.01, -943.72, 4470.19));
this.hallway6Pano.link(this.workroomPano, new THREE.Vector3(-3862.49, -1504.86, -2792.19));

// tagasi tee ruumist 302
this.workroomPano.link(this.hallway6Pano, new THREE.Vector3(-2645.00, -856.99, 4144.94));

// keskmine koridori osa, kus on ühendus veel ruumi 308 ja 309-ga
this.hallway3Pano.link(this.hallway4Pano, new THREE.Vector3(4639.50, -1816.09, 301.64)); //
this.hallway3Pano.link(this.workroom2Pano, new THREE.Vector3(469.02, -2138.35, -4491.12)); //
//hallway3Pano.link(workroom3Pano, new THREE.Vector3(1701.72, -1990.38, -4250.08));
this.hallway3Pano.link(this.hallway2Pano, new THREE.Vector3(-4834.51, -1205.77, -314.25)); //

//väljapääs ruumist 308
this.workroom2Pano.link(this.hallway3Pano, new THREE.Vector3(-3336.82, -1467.54, 3409.84));

//ruum 309 ja 310 ühendus
this.workroom3Pano.link(this.hallway4Pano, new THREE.Vector3(-207.15, -971.50, 4889.93));
this.workroom3Pano.link(this.workroom4Pano, new THREE.Vector3(-1669.84, -998.12, -4595.60));

// väljapääs ruumist 310
this.workroom4Pano.link(this.workroom3Pano, new THREE.Vector3(-3549.77, -1452.71, -3202.80));

// 3 punkt koridoris
this.hallway2Pano.link(this.hallway3Pano, new THREE.Vector3(-4464.21, -2221.32, 252.63));
this.hallway2Pano.link(this.roomPano, new THREE.Vector3(59.12, -1769.10, 4669.54)); //
this.hallway2Pano.link(this.hallway5Pano, new THREE.Vector3(564.67, -1552.36, -4715.81)); //
this.hallway2Pano.link(this.workroom5Pano, new THREE.Vector3(4802.97, -1364.06, -64.21)); //

//ruumist 315 välja
this.roomPano.link(this.hallway2Pano, new THREE.Vector3(4516.35, -2128.79, 71.82)); //

//ruumist 316a välja
this.hallway5Pano.link(this.hallway2Pano, new THREE.Vector3(-4516.73, -1593.02, 1422.91)); //

//ruum 320 või 319
this.workroom5Pano.link(this.hallway2Pano, new THREE.Vector3(-2635.49, -448.01, 4215.93));
this.workroom5Pano.link(this.workroom6Pano, new THREE.Vector3(-1161.17, -339.51, -4844.36));

//ruumist 319 välja
this.workroom6Pano.link(this.workroom5Pano, new THREE.Vector3(4478.47, -421.70, 2167.31));

  // Floor change button
    const goDownFloor = new PANOLENS.Infospot();
    goDownFloor.position.set(1039.68, -3050.99, 3812.13);
    goDownFloor.addEventListener('click', () => {
      this.changeFloor(2);
    });
    this.stairsPano.add(goDownFloor);

window.dispatchEvent(new Event('resize'));
  }

}

function room(room: any, string: any) {
  throw new Error('Function not implemented.');
}

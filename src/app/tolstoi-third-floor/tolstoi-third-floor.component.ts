import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
const TWEEN = Panolens.TWEEN;
const PANOLENS = Panolens.PANOLENS;

@Component({
  selector: 'app-tolstoi-third-floor',
  templateUrl: './tolstoi-third-floor.component.html',
  styleUrls: ['./tolstoi-third-floor-component.scss']
})
export class TolstoiThirdFloorComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  selectedRoom: string = '';

  @Input() set goToRoom(value: string) {
    if (value == null || value == '') return;
    console.log("Navigation event received, attempting navigation...");
    this.navigateToRoom(value);
  }

  navigateToRoom(room: string) {
    const roomPano = eval("this." + room);
    this.viewer.setPanorama(roomPano);
  }

  @Output() tourViewer = new EventEmitter<any>;
  @Output() roomMessage = new EventEmitter<string>();

  ngOnInit(): void {
    this.loadFloorData();
    this.tourViewer.emit(this.viewer);
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.disposePanoramaContainer();
  }

  viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
    controlButtons: ['setting'],
});

  public disposePanoramaContainer() {
    this.viewer.destroy();
    const elements = document.getElementsByClassName('panolens-container');
    while (elements.length > 0) {
      elements[0].parentNode?.removeChild(elements[0]);
    }
  }

  public loadFloorData() {

const stairsImage = 'assets/Tolstoi/3.korrus/3_3_300 trepp alla-Edit.jpg'
const hallwayImage = 'assets/Tolstoi/3.korrus/3_3_300-Edit.jpg'
const workroomImage = 'assets/Tolstoi/3.korrus/3_3_302-Edit.jpg'
const workroom2Image = 'assets/Tolstoi/3.korrus/3_3_308-Edit.jpg'
const workroom3Image = 'assets/Tolstoi/3.korrus/3_3_309-Edit.jpg'
const workroom4Image = 'assets/Tolstoi/3.korrus/3_3_310-Edit.jpg'
const hallway2Image = 'assets/Tolstoi/3.korrus/3_3_314 koridor 1.1-Edit.jpg'
const hallway3Image = 'assets/Tolstoi/3.korrus/3_3_314 koridor 1.2-Edit.jpg'
const hallway4Image = 'assets/Tolstoi/3.korrus/3_3_314 koridor 1.3-Edit.jpg'
const roomImage = 'assets/Tolstoi/3.korrus/3_3_315-Edit.jpg'
const hallway5Image = 'assets/Tolstoi/3.korrus/3_3_316a-Edit.jpg'
const workroom5Image = 'assets/Tolstoi/3.korrus/3_3_319 1.1-Edit.jpg'
const workroom6Image = 'assets/Tolstoi/3.korrus/3_3_319 1.2-Edit.jpg'
const hallway6Image = 'assets/Tolstoi/3.korrus/3_3_koridor 1.4-Edit.jpg'



const stairsPano = new PANOLENS.ImagePanorama(stairsImage)
const hallwayPano = new PANOLENS.ImagePanorama(hallwayImage)
const workroomPano = new PANOLENS.ImagePanorama(workroomImage)
const workroom2Pano = new PANOLENS.ImagePanorama(workroom2Image)
const workroom3Pano = new PANOLENS.ImagePanorama(workroom3Image)
const workroom4Pano = new PANOLENS.ImagePanorama(workroom4Image)
const hallway2Pano = new PANOLENS.ImagePanorama(hallway2Image)
const hallway3Pano = new PANOLENS.ImagePanorama(hallway3Image)
const hallway4Pano = new PANOLENS.ImagePanorama(hallway4Image)
const roomPano = new PANOLENS.ImagePanorama(roomImage)
const hallway5Pano = new PANOLENS.ImagePanorama(hallway5Image)
const workroom5Pano = new PANOLENS.ImagePanorama(workroom5Image)
const workroom6Pano = new PANOLENS.ImagePanorama(workroom6Image)
const hallway6Pano = new PANOLENS.ImagePanorama(hallway6Image)

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
  stairsPano.addEventListener('enter-fade-start', () => {
      console.log('stairsPano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[0], 6000 );
  })

  hallwayPano.addEventListener('enter-fade-start', () => {
      console.log('hallwayPano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[1], 0 );
  })
  workroomPano.addEventListener('enter-fade-start', () => {
      console.log('workroomPano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[2], 0 );
  })
  workroom2Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom2Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[3], 0 );
  })
  workroom3Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom3Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[4], 0 );
  })
  workroom4Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom4Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[5], 0 );
  })
  hallway2Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway2Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[6], 0 );
  })
  hallway3Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway3Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[7], 0 );
  })
  hallway4Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway4Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[8], 0 );
  })
  roomPano.addEventListener('enter-fade-start', () => {
      console.log('roomPano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[9], 0 );
  })
  hallway5Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway5Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[10], 0 );
  })
  workroom5Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom5Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[11], 0 );
  })
  workroom6Pano.addEventListener('enter-fade-start', () => {
      console.log('workroom6Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[12], 0 );
  })
  hallway6Pano.addEventListener('enter-fade-start', () => {
      console.log('hallway6Pano entered')
      this.viewer.tweenControlCenter( lookAtPositions3[13], 0 );
  })
  
  
  //järjekord
  


this.viewer.add(stairsPano);
this.viewer.add(hallwayPano);
this.viewer.add(hallway4Pano);
this.viewer.add(hallway6Pano);
this.viewer.add(workroomPano);
this.viewer.add(hallway3Pano);
this.viewer.add(workroom2Pano);
this.viewer.add(workroom3Pano);
this.viewer.add(workroom4Pano);
this.viewer.add(hallway2Pano);
this.viewer.add(roomPano);
this.viewer.add(hallway5Pano);
this.viewer.add(workroom5Pano);
this.viewer.add(workroom6Pano);

// link panoramas with points
// trepist üles minek 
stairsPano.link(hallwayPano, new THREE.Vector3(-4786.19, -1212.11, 736.90));

// läbi ukse minek koridori
hallwayPano.link(stairsPano, new THREE.Vector3(-3428.38, -3609.56, 412.66));
hallwayPano.link(hallway4Pano, new THREE.Vector3(4507.22, -1918.81, -992.75));

// esimene kolmest koridori osast
hallway4Pano.link(hallwayPano, new THREE.Vector3(4094.17, -211.60, -2848.10));
hallway4Pano.link(hallway6Pano, new THREE.Vector3(-2965.87, -1046.58, -3876.58)); 
hallway4Pano.link(hallway3Pano, new THREE.Vector3(2317.11, -2385.64, 3722.85));
hallway4Pano.link(workroom3Pano, new THREE.Vector3(4704.67, -307.57, -1643.26));


// ühendus töötoa 302-ga
hallway6Pano.link(hallway4Pano, new THREE.Vector3(2019.01, -943.72, 4470.19));
hallway6Pano.link(workroomPano, new THREE.Vector3(-3862.49, -1504.86, -2792.19));

// tagasi tee ruumist 302
workroomPano.link(hallway6Pano, new THREE.Vector3(-2645.00, -856.99, 4144.94));

// keskmine koridori osa, kus on ühendus veel ruumi 308 ja 309-ga
hallway3Pano.link(hallway4Pano, new THREE.Vector3(4639.50, -1816.09, 301.64)); //
hallway3Pano.link(workroom2Pano, new THREE.Vector3(469.02, -2138.35, -4491.12)); //
//hallway3Pano.link(workroom3Pano, new THREE.Vector3(1701.72, -1990.38, -4250.08));
hallway3Pano.link(hallway2Pano, new THREE.Vector3(-4834.51, -1205.77, -314.25)); //

//väljapääs ruumist 308
workroom2Pano.link(hallway3Pano, new THREE.Vector3(-3336.82, -1467.54, 3409.84));

//ruum 309 ja 310 ühendus
workroom3Pano.link(hallway4Pano, new THREE.Vector3(-207.15, -971.50, 4889.93));
workroom3Pano.link(workroom4Pano, new THREE.Vector3(-1669.84, -998.12, -4595.60));

// väljapääs ruumist 310
workroom4Pano.link(workroom3Pano, new THREE.Vector3(-3549.77, -1452.71, -3202.80));

// 3 punkt koridoris
hallway2Pano.link(hallway3Pano, new THREE.Vector3(-4464.21, -2221.32, 252.63));
hallway2Pano.link(roomPano, new THREE.Vector3(59.12, -1769.10, 4669.54)); //
hallway2Pano.link(hallway5Pano, new THREE.Vector3(564.67, -1552.36, -4715.81)); //
hallway2Pano.link(workroom5Pano, new THREE.Vector3(4802.97, -1364.06, -64.21)); //

//ruumist 315 välja
roomPano.link(hallway2Pano, new THREE.Vector3(4516.35, -2128.79, 71.82)); //

//ruumist 316a välja
hallway5Pano.link(hallway2Pano, new THREE.Vector3(-4516.73, -1593.02, 1422.91)); //

//ruum 320 või 319
workroom5Pano.link(hallway2Pano, new THREE.Vector3(-2635.49, -448.01, 4215.93));
workroom5Pano.link(workroom6Pano, new THREE.Vector3(-1161.17, -339.51, -4844.36));

//ruumist 319 välja
workroom6Pano.link(workroom5Pano, new THREE.Vector3(4478.47, -421.70, 2167.31));

window.dispatchEvent(new Event('resize'));
  }

}
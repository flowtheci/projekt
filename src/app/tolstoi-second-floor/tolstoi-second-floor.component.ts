import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
const TWEEN = Panolens.TWEEN;
const PANOLENS = Panolens.PANOLENS;

@Component({
  selector: 'app-tolstoi-second-floor',
  templateUrl: './tolstoi-second-floor.component.html',
  styleUrls: ['./tolstoi-second-floor.component.scss']
})
export class TolstoiSecondFloorComponent implements OnInit, AfterViewInit, OnDestroy {


  constructor() { }

  // Load all images as constants
  secondHallImage1 = 'assets/Tolstoi/2korrus/3_2_207-Edit-Edit.jpg'
  secondHallImage2 = 'assets/Tolstoi/2korrus/3_2_207-Edit.jpg'
  paintingHall1 = 'assets/Tolstoi/2korrus/3_2_206 1.1-Edit.jpg'
  paintingHall2 = 'assets/Tolstoi/2korrus/3_2_206 1.2-Edit.jpg'
  room1 = 'assets/Tolstoi/2korrus/3_2_213a-Edit.jpg'
  room2 = 'assets/Tolstoi/2korrus/3_2_213-Edit.jpg'
  corridor1 = 'assets/Tolstoi/2korrus/3_2_209-Edit.jpg'
  corridor2 = 'assets/Tolstoi/2korrus/3_2_koridor 1.1-Edit.jpg'
  corridor3 = 'assets/Tolstoi/2korrus/3_2_koridor 1.2-Edit.jpg'
  paintingLead = 'assets/Tolstoi/2korrus/3_2_208-Edit-Edit.jpg'
  paintingRoom = 'assets/Tolstoi/2korrus/3_2_202-Edit.jpg'
  restoRoom = 'assets/Tolstoi/2korrus/3_2_205-Edit-Edit.jpg'
  restoRoom2 = 'assets/Tolstoi/2korrus/3_2_205 restaureerimise labor-Edit-Edit.jpg'
  terrass1 = 'assets/Tolstoi/2korrus/3_2_Terrass 1.2-Edit.jpg'
  terrass2 = 'assets/Tolstoi/2korrus/3_2_Terrass 1.1-Edit.jpg'
  secondFloorStart = 'assets/Tolstoi/2korrus/3_2_201 1.1-Edit.jpg'
  drawingClass1 = 'assets/Tolstoi/2korrus/3_2_217 1.1-Edit.jpg'
  drawingClass2 = 'assets/Tolstoi/2korrus/3_2_217 1.2-Edit.jpg'
  drawingClass3 = 'assets/Tolstoi/2korrus/3_2_217a-Edit-Edit.jpg'
  drawingClass4 = 'assets/Tolstoi/2korrus/3_2_214_215-Edit.jpg'
  stairs1 = 'assets/Tolstoi/2korrus/3_2_213 trepid üles-Edit.jpg'
  stairs2 = 'assets/Tolstoi/2korrus/3_2_201 trepp 1-Edit.jpg'


  // Create panorama objects from all images
  secondStartPano = new PANOLENS.ImagePanorama(this.secondFloorStart)
  secondHallPano = new PANOLENS.ImagePanorama(this.secondHallImage1)
  secondHallPano2 = new PANOLENS.ImagePanorama(this.secondHallImage2)
  paintingHallPano1 = new PANOLENS.ImagePanorama(this.paintingHall1)
  paintingHallPano2 = new PANOLENS.ImagePanorama(this.paintingHall2)
  roomPano1 = new PANOLENS.ImagePanorama(this.room1)
  roomPano2 = new PANOLENS.ImagePanorama(this.room2)
  corridorPano1 = new PANOLENS.ImagePanorama(this.corridor1)
  corridorPano2 = new PANOLENS.ImagePanorama(this.corridor2)
  corridorPano3 = new PANOLENS.ImagePanorama(this.corridor3)
  paintingLeadPano = new PANOLENS.ImagePanorama(this.paintingLead)
  paintingRoomPano = new PANOLENS.ImagePanorama(this.paintingRoom)
  restoRoomPano = new PANOLENS.ImagePanorama(this.restoRoom)
  restoRoomPano2 = new PANOLENS.ImagePanorama(this.restoRoom2)
  terrassPano1 = new PANOLENS.ImagePanorama(this.terrass1)
  terrassPano2 = new PANOLENS.ImagePanorama(this.terrass2)
  drawingClassPano1 = new PANOLENS.ImagePanorama(this.drawingClass1)
  drawingClassPano2 = new PANOLENS.ImagePanorama(this.drawingClass2)
  drawingClassPano3 = new PANOLENS.ImagePanorama(this.drawingClass3)
  drawingClassPano4 = new PANOLENS.ImagePanorama(this.drawingClass4)
  stairsPano1 = new PANOLENS.ImagePanorama(this.stairs1)
  stairsPano2 = new PANOLENS.ImagePanorama(this.stairs2)

  setRoom(room: string) {
    this.selectedRoom = room;
    this.roomMessage.emit(this.selectedRoom)
  }

  selectedRoom: string = '';

  viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
    controlButtons: ['setting'],
});

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
  @Output() requestFloorChange = new EventEmitter<number>();

  changeFloor(floor: number) {
    this.requestFloorChange.emit(floor);
  }

  ngOnInit(): void {
    this.loadFloorData();
    this.tourViewer.emit(this.viewer);
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.disposePanoramaContainer();
  }

  

  public disposePanoramaContainer() {
    this.viewer.destroy();
    const elements = document.getElementsByClassName('panolens-container');
    while (elements.length > 0) {
      elements[0].parentNode?.removeChild(elements[0]);
    }
  }

  public loadFloorData() {

    // Add console log event listeners for every panorama object
    this.secondStartPano.addEventListener('enter-fade-start', () => {
      console.log('secondStartPano entered')
      this.setRoom('secondStartPano');
    })
    this.secondHallPano.addEventListener('enter-fade-start', () => {
      console.log('secondHallImage1 entered')
      this.setRoom('secondHallPano');
    })
    this.secondHallPano2.addEventListener('enter-fade-start', () => {
      console.log('secondHallImage2 entered')
      this.setRoom('secondHallPano2');
    })
    this.paintingHallPano1.addEventListener('enter-fade-start', () => {
      console.log('paintingHall1 entered')
      this.setRoom('paintingHallPano1');
    })
    this.paintingHallPano2.addEventListener('enter-fade-start', () => {
      console.log('paintingHall2 entered')
      this.setRoom('paintingHallPano2');
    })
    this.roomPano1.addEventListener('enter-fade-start', () => {
      console.log('room1 entered')
      this.setRoom('roomPano1');
    })
    this.roomPano2.addEventListener('enter-fade-start', () => {
      console.log('room2 entered')
      this.setRoom('roomPano2');
    })
    this.corridorPano1.addEventListener('enter-fade-start', () => {
      console.log('corrdior1 entered')
      this.setRoom('corridorPano1');
    })
    this.corridorPano2.addEventListener('enter-fade-start', () => {
      console.log('corrdior2 entered')
      this.setRoom('corridorPano2');
    })
    this.corridorPano3.addEventListener('enter-fade-start', () => {
      console.log('corrdior3 entered')
      this.setRoom('corridorPano3');
    })
    this.paintingLeadPano.addEventListener('enter-fade-start', () => {
      console.log('paintingLead entered')
      this.setRoom('paintingLeadPano');
    })
    this.paintingRoomPano.addEventListener('enter-fade-start', () => {
      console.log('paintingRoom entered')
      this.setRoom('paintingRoomPano');
    })
    this.restoRoomPano.addEventListener('enter-fade-start', () => {
      console.log('restoRoom entered')
      this.setRoom('restoRoomPano');
    })
    this.restoRoomPano2.addEventListener('enter-fade-start', () => {
      console.log('restoRoom2 entered')
      this.setRoom('restoRoomPano2');
    })
    this.terrassPano1.addEventListener('enter-fade-start', () => {
      console.log('terrass1 entered')
      this.setRoom('terrassPano1');
    })
    this.terrassPano2.addEventListener('enter-fade-start', () => {
      console.log('terrass2 entered')
      this.setRoom('terrassPano2');
    })
    this.drawingClassPano1.addEventListener('enter-fade-start', () => {
      console.log('drawingClass1 entered')
      this.setRoom('drawingClassPano1');
    })
    this.drawingClassPano2.addEventListener('enter-fade-start', () => {
      console.log('drawingClass2 entered')
      this.setRoom('drawingClassPano2');
    })
    this.drawingClassPano3.addEventListener('enter-fade-start', () => {
      console.log('drawingClass3 entered')
      this.setRoom('drawingClassPano3');
    })
    this.drawingClassPano4.addEventListener('enter-fade-start', () => {
      console.log('drawingClass4 entered')
      this.setRoom('drawingClassPano4');
    })
    this.stairsPano1.addEventListener('enter-fade-start', () => {
      console.log('stairs1 entered')
      this.setRoom('stairsPano1');
    })
    this.stairsPano2.addEventListener('enter-fade-start', () => {
      console.log('stairs2 entered')
      this.setRoom('stairsPano2');
    })

    this.viewer.add(this.secondStartPano);
    this.viewer.add(this.secondHallPano);
    this.viewer.add(this.secondHallPano2);
    this.viewer.add(this.paintingHallPano1);
    this.viewer.add(this.paintingHallPano2);
    this.viewer.add(this.roomPano1);
    this.viewer.add(this.roomPano2);
    this.viewer.add(this.corridorPano1);
    this.viewer.add(this.corridorPano2);
    this.viewer.add(this.corridorPano3);
    this.viewer.add(this.paintingLeadPano);
    this.viewer.add(this.paintingRoomPano);
    this.viewer.add(this.restoRoomPano);
    this.viewer.add(this.restoRoomPano2);
    this.viewer.add(this.terrassPano1);
    this.viewer.add(this.terrassPano2);
    this.viewer.add(this.drawingClassPano1);
    this.viewer.add(this.drawingClassPano2);
    this.viewer.add(this.drawingClassPano3);
    this.viewer.add(this.drawingClassPano4);
    this.viewer.add(this.stairsPano1);
    this.viewer.add(this.stairsPano2);


    // link panoramas with points
    // Entrance door view
    this.secondStartPano.link(this.secondHallPano, new THREE.Vector3(3252.90, -2534.93, 2816.94));
    this.secondStartPano.link(this.terrassPano1, new THREE.Vector3(2891.05, -1640.81, -3724.01));
    this.terrassPano1.link(this.secondStartPano, new THREE.Vector3(4616.25, -1724.98, 786.76));
    this.terrassPano1.link(this.terrassPano2, new THREE.Vector3(-439.77, -1084.94, 4855.17));
    this.terrassPano2.link(this.terrassPano1, new THREE.Vector3(3461.53, -1051.30, 3437.30));
    this.secondHallPano.link(this.secondStartPano, new THREE.Vector3(-4512.67, -1968.11, 836.00));
    this.secondHallPano.link(this.secondHallPano2, new THREE.Vector3(2424.40, -1965.59, -3897.39));
    this.secondHallPano.link(this.paintingLeadPano, new THREE.Vector3(-2914.47, -2377.23, -3287.41));
    this.secondHallPano2.link(this.secondHallPano, new THREE.Vector3(-4141.63, -2402.61, -1418.06));
    this.secondHallPano2.link(this.paintingHallPano1, new THREE.Vector3(2234.14, -3547.09, 2717.91));
    this.secondHallPano2.link(this.corridorPano1, new THREE.Vector3(3563.69, -1051.51, -3335.08));
    this.paintingHallPano1.link(this.secondHallPano2, new THREE.Vector3(-2481.02, -2613.02, 3464.70));
    this.paintingHallPano1.link(this.paintingHallPano2, new THREE.Vector3(-3616.00, -1481.35, -3109.00));
    this.paintingHallPano2.link(this.paintingHallPano1, new THREE.Vector3(4811.63, -1317.60, 148.98));
    this.paintingHallPano2.link(this.roomPano1, new THREE.Vector3(-3945.13, -2843.46, -1130.27));
    this.roomPano1.link(this.paintingHallPano2, new THREE.Vector3(177.10, -2650.38, -4228.60));
    this.roomPano1.link(this.roomPano2, new THREE.Vector3(4107.58, -2295.51, 1673.92));
    this.roomPano2.link(this.roomPano1, new THREE.Vector3(-3866.50, -2529.77, -1891.11));
    this.roomPano2.link(this.corridorPano1, new THREE.Vector3(2766.77, -1884.74, -3709.02));
    this.corridorPano1.link(this.secondHallPano2, new THREE.Vector3(-1542.31, -1274.75, 4576.13));
    this.corridorPano1.link(this.roomPano2, new THREE.Vector3(1294.55, -1814.32, -4466.72));
    this.paintingLeadPano.link(this.secondHallPano, new THREE.Vector3(-2397.71, -2042.89, -3872.29));
    this.secondHallPano.link(this.corridorPano2, new THREE.Vector3(2790.79, -1924.74, 3669.26));
    this.corridorPano2.link(this.secondHallPano, new THREE.Vector3(1294.55, -1814.32, -4466.72));
    this.corridorPano2.link(this.paintingRoomPano, new THREE.Vector3(-3960.59, -2782.63, 1229.40));
    this.paintingRoomPano.link(this.corridorPano2, new THREE.Vector3(1178.56, -1507.37, -4611.49));
    this.corridorPano2.link(this.corridorPano3, new THREE.Vector3(4466.26, -1843.87, -1254.20));
    this.corridorPano3.link(this.corridorPano2, new THREE.Vector3(-4398.81, -2351.14, 205.27));
    this.corridorPano3.link(this.restoRoomPano, new THREE.Vector3(4298.90, -2512.05, 392.20));
    this.restoRoomPano.link(this.corridorPano3, new THREE.Vector3(3260.32, -3209.08, 2005.96));
    this.restoRoomPano.link(this.restoRoomPano2, new THREE.Vector3(396.25, -2184.54, -4473.64));
    this.restoRoomPano2.link(this.restoRoomPano, new THREE.Vector3(2333.29, -3227.95, -3015.67));
    this.roomPano1.link(this.drawingClassPano1, new THREE.Vector3(-164.80, -2586.24, 4269.27));
    this.drawingClassPano1.link(this.roomPano1, new THREE.Vector3(3642.51, -1607.68, -3011.09));
    this.drawingClassPano1.link(this.drawingClassPano2, new THREE.Vector3(-4258.88, -1225.19, 2299.98));
    this.drawingClassPano2.link(this.drawingClassPano1, new THREE.Vector3(4845.16, -1054.55, 588.50));
    this.drawingClassPano2.link(this.drawingClassPano3, new THREE.Vector3(-4832.86, -1244.17, -139.13));
    this.drawingClassPano3.link(this.drawingClassPano2, new THREE.Vector3(3852.95, -794.60, 3074.59));
    this.drawingClassPano2.link(this.drawingClassPano4, new THREE.Vector3(1421.40, -2310.38, 4195.60));
    this.drawingClassPano4.link(this.drawingClassPano2, new THREE.Vector3(-4548.73, -1853.69, -909.90));
    this.roomPano2.link(this.drawingClassPano4, new THREE.Vector3(-2212.25, -1886.56, 4061.27));
    this.drawingClassPano4.link(this.roomPano2, new THREE.Vector3(1322.73, -483.23, -4787.80));
    this.roomPano2.link(this.stairsPano1, new THREE.Vector3(1995.10, -901.56, 4491.29));
    this.stairsPano1.link(this.roomPano2, new THREE.Vector3(-1694.59, -3406.45, -3232.88));
    this.secondStartPano.link(this.stairsPano2, new THREE.Vector3(-149.91, -1735.03, -4677.35));
    this.stairsPano2.link(this.secondStartPano, new THREE.Vector3(2745.30, -3672.10, 1984.35));

      // Floor change button
    const goDownFloor = new PANOLENS.Infospot();
    goDownFloor.position.set(-4658.78, -1540.12, 950.85);
    goDownFloor.addEventListener('click', () => {
      this.changeFloor(1);
    });
    this.secondStartPano.add(goDownFloor);

    const goUpFloor = new PANOLENS.Infospot();
    goUpFloor.position.set(-4658.78, 1540.12, 950.85);
    goUpFloor.addEventListener('click', () => {
      this.changeFloor(3);
    });
    this.secondStartPano.add(goUpFloor);


    window.dispatchEvent(new Event('resize'));
  }

}

import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as THREE from '../../lib/three.js';
import Panolens from '../../lib/panolens';
const TWEEN = Panolens.TWEEN;
const PANOLENS = Panolens.PANOLENS;


@Component({
  selector: 'app-tolstoi-first-floor',
  templateUrl: './tolstoi-first-floor.component.html',
  styleUrls: ['./tolstoi-first-floor.component.scss']
})
export class TolstoiFirstFloorComponent implements OnInit, AfterViewInit, OnDestroy {

  pano = PANOLENS;
  selectedRoom: string = '';

  @Input() set goToRoom(value: string) {
    if (value == null || value == '') return;
    console.log("Navigation event received, attempting navigation...");
    this.navigateToRoom(value);
 
 }
  @Output() roomMessage = new EventEmitter<string>();
  @Output() tourViewer = new EventEmitter<any>;

  // Load all images as constants
  entranceImage = 'assets/Tolstoi/1.korrus/tolstoi-siseou.jpg'
  entranceStreetImage = 'assets/Tolstoi/1.korrus/tolstoi-sissepaas.jpg'
  lobbyImage1 = 'assets/Tolstoi/1.korrus/fuajee1.jpg'
  lobbyImage2 = 'assets/Tolstoi/1.korrus/fuajee2.jpg'
  lobbyImage3 = 'assets/Tolstoi/1.korrus/fuajee3.jpg'
  lobbyImage4 = 'assets/Tolstoi/1.korrus/fuajee4.jpg'
  lobbyImage5 = 'assets/Tolstoi/1.korrus/fuajee5.jpg'
  galleryImage1 = 'assets/Tolstoi/1.korrus/galerii1.jpg'
  galleryImage2 = 'assets/Tolstoi/1.korrus/galerii2.jpg'
  room123Image1 = 'assets/Tolstoi/1.korrus/123_1.jpg'
  room123Image2 = 'assets/Tolstoi/1.korrus/123_2.jpg'
  canteenImage1 = 'assets/Tolstoi/1.korrus/sookla1.jpg'
  canteenImage2 = 'assets/Tolstoi/1.korrus/sookla2.jpg'
  libraryImage1 = 'assets/Tolstoi/1.korrus/raamatukogu1.jpg'
  libraryImage2 = 'assets/Tolstoi/1.korrus/raamatukogu2.jpg'
  libraryImage3 = 'assets/Tolstoi/1.korrus/raamatukogu3.jpg'
  libraryImage4 = 'assets/Tolstoi/1.korrus/raamatukogu4.jpg'
  libraryImage5 = 'assets/Tolstoi/1.korrus/raamatukogu5.jpg'
  librarySeminarImage = 'assets/Tolstoi/1.korrus/raamatukogu_seminar.jpg'
  hallImage1 = 'assets/Tolstoi/1.korrus/hall1.jpg'
  hallImage2 = 'assets/Tolstoi/1.korrus/hall2.jpg'
  room106Image = 'assets/Tolstoi/1.korrus/106.jpg'
  room107Image = 'assets/Tolstoi/1.korrus/107.jpg'
  room109Image = 'assets/Tolstoi/1.korrus/109.jpg'
  room114refurbImage = 'assets/Tolstoi/1.korrus/114viimistlus.jpg'
  room112corridorImage = 'assets/Tolstoi/1.korrus/112koridor.jpg'
  room112Image1 = 'assets/Tolstoi/1.korrus/112_1.jpg'
  room112Image2 = 'assets/Tolstoi/1.korrus/112_2.jpg'
  room112closetImage = 'assets/Tolstoi/1.korrus/112pimik.jpg'
  room112entranceImage = 'assets/Tolstoi/1.korrus/112sissepaas.jpg'
  wetLabImage = 'assets/Tolstoi/1.korrus/marglabor.jpg'
  room114corridorImage = 'assets/Tolstoi/1.korrus/114koridor.jpg'
  room114corridorImage2 = 'assets/Tolstoi/1.korrus/114koridor2.jpg'
  room114corridorImage3 = 'assets/Tolstoi/1.korrus/114koridor3.jpg'
  corridorImage1 = 'assets/Tolstoi/1.korrus/koridor1.jpg'
  corridorImage2 = 'assets/Tolstoi/1.korrus/koridor2.jpg'
  room110Image = 'assets/Tolstoi/1.korrus/110.jpg'
  room114Image = 'assets/Tolstoi/1.korrus/114.jpg'
  room118Image = 'assets/Tolstoi/1.korrus/118.jpg'
  room111Image1 = 'assets/Tolstoi/1.korrus/111_1.jpg'
  room111Image2 = 'assets/Tolstoi/1.korrus/111_2.jpg'
  room117Image = 'assets/Tolstoi/1.korrus/117.jpg';

  entrancePano = new PANOLENS.ImagePanorama(this.entranceImage);
  entranceStreet = new PANOLENS.ImagePanorama(this.entranceStreetImage);
  lobbyPano1 = new PANOLENS.ImagePanorama(this.lobbyImage1);
  lobbyPano2 = new PANOLENS.ImagePanorama(this.lobbyImage2);
  lobbyPano3 = new PANOLENS.ImagePanorama(this.lobbyImage3);
  lobbyPano4 = new PANOLENS.ImagePanorama(this.lobbyImage4);
  lobbyPano5 = new PANOLENS.ImagePanorama(this.lobbyImage5);
  gallery1 = new PANOLENS.ImagePanorama(this.galleryImage1);
  gallery2 = new PANOLENS.ImagePanorama(this.galleryImage2);
  room123Pano1 = new PANOLENS.ImagePanorama(this.room123Image1);
  room123Pano2 = new PANOLENS.ImagePanorama(this.room123Image2);
  canteen1 = new PANOLENS.ImagePanorama(this.canteenImage1);
  canteen2 = new PANOLENS.ImagePanorama(this.canteenImage2);
  library1 = new PANOLENS.ImagePanorama(this.libraryImage1);
  library2 = new PANOLENS.ImagePanorama(this.libraryImage2);
  library3 = new PANOLENS.ImagePanorama(this.libraryImage3);
  library4 = new PANOLENS.ImagePanorama(this.libraryImage4);
  library5 = new PANOLENS.ImagePanorama(this.libraryImage5);
  librarySeminar = new PANOLENS.ImagePanorama(this.librarySeminarImage);
  hall1 = new PANOLENS.ImagePanorama(this.hallImage1);
  hall2 = new PANOLENS.ImagePanorama(this.hallImage2);
  room106 = new PANOLENS.ImagePanorama(this.room106Image);
  room107 = new PANOLENS.ImagePanorama(this.room107Image);
  room109 = new PANOLENS.ImagePanorama(this.room109Image);
  room114refurb = new PANOLENS.ImagePanorama(this.room114refurbImage);
  room112corridor = new PANOLENS.ImagePanorama(this.room112corridorImage);
  room112Pano1 = new PANOLENS.ImagePanorama(this.room112Image1);
  room112Pano2 = new PANOLENS.ImagePanorama(this.room112Image2);
  room112closet = new PANOLENS.ImagePanorama(this.room112closetImage);
  room112entrance = new PANOLENS.ImagePanorama(this.room112entranceImage);
  wetLab = new PANOLENS.ImagePanorama(this.wetLabImage);
  room114corridor = new PANOLENS.ImagePanorama(this.room114corridorImage);
  room114corridor2 = new PANOLENS.ImagePanorama(this.room114corridorImage2);
  room114corridor3 = new PANOLENS.ImagePanorama(this.room114corridorImage3);
  corridor1 = new PANOLENS.ImagePanorama(this.corridorImage1);
  corridor2 = new PANOLENS.ImagePanorama(this.corridorImage2);
  room110 = new PANOLENS.ImagePanorama(this.room110Image);
  room114 = new PANOLENS.ImagePanorama(this.room114Image);
  room118 = new PANOLENS.ImagePanorama(this.room118Image);
  room111Pano1 = new PANOLENS.ImagePanorama(this.room111Image1);
  room111Pano2 = new PANOLENS.ImagePanorama(this.room111Image2);
  room117 = new PANOLENS.ImagePanorama(this.room117Image);

  constructor() { }

  setRoom(room: string) {
    this.selectedRoom = room;
    this.roomMessage.emit(this.selectedRoom)
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
  this.viewer.add(this.room117);
  this.viewer.add(this.room118);
  this.viewer.add(this.hall1);
  this.viewer.add(this.hall2);
  this.viewer.add(this.lobbyPano1);
  this.viewer.add(this.lobbyPano2);
  this.viewer.add(this.lobbyPano3);
  this.viewer.add(this.lobbyPano4);
  this.viewer.add(this.lobbyPano5);
  this.viewer.add(this.gallery1);
  this.viewer.add(this.gallery2);
  this.viewer.add(this.room123Pano1);
  this.viewer.add(this.room123Pano2);
  this.viewer.add(this.canteen1);
  this.viewer.add(this.canteen2);
  this.viewer.add(this.library1);
  this.viewer.add(this.library2);
  this.viewer.add(this.library3);
  this.viewer.add(this.library4);
  this.viewer.add(this.library5);
  this.viewer.add(this.librarySeminar);
  this.viewer.add(this.room106);
  this.viewer.add(this.room107);
  this.viewer.add(this.room109);
  this.viewer.add(this.room112corridor);
  this.viewer.add(this.room112Pano2);
  this.viewer.add(this.room112closet);
  this.viewer.add(this.room112Pano1);
  this.viewer.add(this.wetLab);
  this.viewer.add(this.room114corridor);
  this.viewer.add(this.room114corridor2);
  this.viewer.add(this.room114corridor3);
  this.viewer.add(this.room112entrance);
  this.viewer.add(this.room114refurb);
  this.viewer.add(this.corridor1);
  this.viewer.add(this.corridor2);
  this.viewer.add(this.room110);
  this.viewer.add(this.room114);
  this.viewer.add(this.room111Pano1);
  this.viewer.add(this.room111Pano2);
  this.viewer.add(this.entranceStreet);
  
  // Entrance door view
  this.entrancePano.link(this.lobbyPano1, new THREE.Vector3(-4579.29, -1348.64, -1471.43));

  // Street door entrance view
  this.entranceStreet.link(this.room117, new THREE.Vector3(-4884.38, 930.29, 469.40));

  // Lobby door view
  this.lobbyPano1.link(this.entrancePano, new THREE.Vector3(-4234.59, -1779.83, -1958.72));
  this.lobbyPano1.link(this.lobbyPano2, new THREE.Vector3(-637.56, -2377.27, 4342.64));
  this.lobbyPano1.link(this.lobbyPano3, new THREE.Vector3(4400.23, -1996.67, 1253.56));

  // Lobby toilets view
  this.lobbyPano2.link(this.lobbyPano1, new THREE.Vector3(446.41, -1668.91, 4686.21));
  this.lobbyPano2.link(this.lobbyPano5, new THREE.Vector3(-4467.32, -1542.65, -1615.24));

  // Lobby under stairs view
  this.lobbyPano5.link(this.lobbyPano2, new THREE.Vector3(-1593.94, -1597.62, 4454.03));
  this.lobbyPano5.link(this.hall2, new THREE.Vector3(3314.15, -603.27, -3689.34));

  // Lobby next to stairs view
  this.lobbyPano3.link(this.lobbyPano1, new THREE.Vector3(-3762.73, -2110.81, 2509.00));
  this.lobbyPano3.link(this.lobbyPano4, new THREE.Vector3(3475.43, -1889.29, -3052.56));

  // Lobby end view
  this.lobbyPano4.link(this.lobbyPano3, new THREE.Vector3(-4205.28, -2596.77, 720.09));
  this.lobbyPano4.link(this.gallery1, new THREE.Vector3(-1057.23, -872.66, -4803.75));

  // Gallery entrance
  this.gallery1.link(this.lobbyPano4, new THREE.Vector3(4206.80, -426.05, -2654.32));
  this.gallery1.link(this.gallery2, new THREE.Vector3(-4050.18, -2281.25, 1836.77));

  // Gallery end
  this.gallery2.link(this.gallery1, new THREE.Vector3(2525.13, -1688.59, -3959.38));
  this.gallery2.link(this.room123Pano1, new THREE.Vector3(-4178.80, -2395.57, -1322.43));

  // Room 123 first view
  this.room123Pano1.link(this.gallery2, new THREE.Vector3(-4430.07, -2194.87, -690.13));
  this.room123Pano1.link(this.room123Pano2, new THREE.Vector3(3758.57, -1969.49, 2634.87));
  this.room123Pano1.link(this.canteen1, new THREE.Vector3(1701.72, -1990.38, -4250.08));

  // Room 123 second view
  this.room123Pano2.link(this.room123Pano1, new THREE.Vector3(577.96, -1928.63, 4571.94));
  this.room123Pano2.link(this.library5, new THREE.Vector3(-2567.09, -1303.08, -4076.43));
  this.room123Pano2.link(this.room118, new THREE.Vector3(4465.56, -826.15, -2079.54));

  // Canteen first view
  this.canteen1.link(this.canteen2, new THREE.Vector3(1327.69, -1788.24, -4467.79));
  this.canteen1.link(this.room123Pano1, new THREE.Vector3(-202.00, -1793.77, 4652.95));

  // Canteen eating area view
  this.canteen2.link(this.canteen1, new THREE.Vector3(-2628.31, -1695.77, -3889.21));

  // Library entrance view
  this.library5.link(this.room123Pano2, new THREE.Vector3(6.03, -661.32, 4952.43));
  this.library5.link(this.library1, new THREE.Vector3(-4590.70, -1033.59, -1662.94));

  // Library end view
  this.library1.link(this.library3, new THREE.Vector3(-1913.02, -2038.47, -4138.02));
  this.library1.link(this.library2, new THREE.Vector3(-4464.94, -1764.20, -1372.55));
  this.library1.link(this.library5, new THREE.Vector3(-4274.34, -1048.08, 2357.73));
  this.library1.link(this.librarySeminar, new THREE.Vector3(4583.35, -1877.26, 635.83));

  // Library storage door
  this.library3.link(this.library1, new THREE.Vector3(-4074.40, -2606.54, 1256.16));

  // Library between bookcases
  this.library2.link(this.library1, new THREE.Vector3(3279.65, -2453.29, -2856.46));

  // Library seminar room
  this.librarySeminar.link(this.library1, new THREE.Vector3(-2645.91, -651.89, -4180.43));

  // Hall entrance view
  this.hall2.link(this.lobbyPano5, new THREE.Vector3(-4103.68, -760.86, 2740.45));
  this.hall2.link(this.hall1, new THREE.Vector3(-1462.72, -1469.61, -4546.36));
  this.hall2.link(this.room106, new THREE.Vector3(725.67, -1340.59, 4751.34));
  this.hall2.link(this.room107, new THREE.Vector3(4777.03, -1204.02, -809.31));

  // Hall end view
  this.hall1.link(this.hall2, new THREE.Vector3(4805.51, -1331.93, -188.73));
  this.hall1.link(this.room109, new THREE.Vector3(2346.28, -1277.81, -4218.66));
  this.hall1.link(this.room114corridor, new THREE.Vector3(490.25, -764.99, 4914.78));
  this.hall1.link(this.corridor2, new THREE.Vector3(-3530.06, -1204.96, -3321.18));

  // Room 106 view
  this.room106.link(this.hall2, new THREE.Vector3(-840.79, -982.41, -4819.71));

  // Room 107 view
  this.room107.link(this.hall2, new THREE.Vector3(3690.73, -1260.81, -3115.41));

  // Room 109 view
  this.room109.link(this.hall1, new THREE.Vector3(1414.83, -1102.00, -4660.77));

  // Room 114 refurb view
  this.room114refurb.link(this.room114corridor, new THREE.Vector3(3895.10, -695.31, -3042.78));
  this.room114refurb.link(this.room112entrance, new THREE.Vector3(-2290.09, -374.26, -4420.60));

  // Room 112 corridor view
  this.room112corridor.link(this.room112entrance, new THREE.Vector3(336.65, -806.03, 4916.05));
  this.room112corridor.link(this.room112Pano1, new THREE.Vector3(-4627.23, -1870.84, 150.30));

  // Room 112 first view
  this.room112Pano1.link(this.room112corridor, new THREE.Vector3(1796.73, -819.13, 4584.97));
  this.room112Pano1.link(this.room112Pano2, new THREE.Vector3(-4480.65, -1035.66, -1948.49));
  this.room112Pano1.link(this.room112closet, new THREE.Vector3(-4285.91, -1208.57, 2257.26));

  // Room 112 second view
  this.room112Pano2.link(this.room112Pano1, new THREE.Vector3(237.81, -2209.43, 4470.47));

  // Room 112 closet view
  this.room112closet.link(this.room112Pano1, new THREE.Vector3(3779.74, -690.25, 3186.19));

  // Room 112 entrance view
  this.room112entrance.link(this.room112corridor, new THREE.Vector3(4889.44, -488.20, 876.93));
  this.room112entrance.link(this.room114refurb, new THREE.Vector3(-3731.44, -2006.73, 2645.17));
  this.room112entrance.link(this.room114corridor2, new THREE.Vector3(-1430.92, -304.31, -4773.51));

  // Room 114 corridor view
  this.room114corridor.link(this.hall1, new THREE.Vector3(733.21, -956.05, -4842.05));
  this.room114corridor.link(this.room114refurb, new THREE.Vector3(-284.54, -765.62, 4925.49));
  this.room114corridor.link(this.room112entrance, new THREE.Vector3(-4532.30, -765.87, 1959.80));

  // Room 114 corridor 2 view
  this.room114corridor2.link(this.room112entrance, new THREE.Vector3(-4763.69, -1051.80, 1069.25));
  this.room114corridor2.link(this.room114corridor3, new THREE.Vector3(4912.80, -381.30, -804.64));

  // Room 114 corridor 3 view
  this.room114corridor3.link(this.room114corridor2, new THREE.Vector3(-3534.73, -817.59, -3429.76));
  this.room114corridor3.link(this.wetLab, new THREE.Vector3(2586.91, -632.56, -4221.47));
  this.room114corridor3.link(this.room114, new THREE.Vector3(-4026.53, -488.45, 2918.38));
  this.room114corridor3.link(this.room118, new THREE.Vector3(3333.54, -401.59, 3704.31));

  // Wetlab view
  this.wetLab.link(this.room114corridor3, new THREE.Vector3(-2152.58, -622.56, 4459.32));

  // Corridor 2 view
  this.corridor2.link(this.hall1, new THREE.Vector3(4609.40, -1907.09, -235.35));
  this.corridor2.link(this.corridor1, new THREE.Vector3(913.68, -800.16, 4844.82));
  this.corridor2.link(this.room111Pano1, new THREE.Vector3(-4691.99, -1700.29, 115.20));

  // Corridor 1 view
  this.corridor1.link(this.corridor2, new THREE.Vector3(-4355.35, -1622.50, -1825.43));
  this.corridor1.link(this.room110, new THREE.Vector3(4187.64, -532.08, 2660.82));

  // Room 110 view
  this.room110.link(this.corridor1, new THREE.Vector3(-1181.65, -872.70, 4770.41));

  // Room 114 view
  this.room114.link(this.room114corridor3, new THREE.Vector3(-4923.94, -735.80, -381.40));

  // Room 118 view
  this.room118.link(this.room114corridor3, new THREE.Vector3(4686.07, -1137.17, 1293.42));
  this.room118.link(this.room123Pano2, new THREE.Vector3(-4509.28, -1172.84, -1796.56));
  this.room118.link(this.room117, new THREE.Vector3(3674.49, -797.31, -3294.11));

  // Room 111 stair view
  this.room111Pano1.link(this.corridor2, new THREE.Vector3(-4897.78, 231.72, -936.97));
  this.room111Pano1.link(this.room111Pano2, new THREE.Vector3(4762.14, -1238.73, 840.88));

  // Room 111 view
  this.room111Pano2.link(this.room111Pano1, new THREE.Vector3(-236.12, 185.89, -4980.32));

  // Room 117 view
  this.room117.link(this.room118, new THREE.Vector3(-4584.88, -783.12, 1816.94));
  this.room117.link(this.entranceStreet, new THREE.Vector3(4676.81, -525.41, -1662.65));







  var lookAtPositions = [
    new THREE.Vector3(-4951.39, -90.62, -633.92 ),//0, entrancePano
    new THREE.Vector3(-3747.27, 621.81, -3239.13 ),//1 entranceStreet
    new THREE.Vector3(2802.99, -32.10, 4131.86 ),//2 lobbyPano1
    new THREE.Vector3(-4486.25, -444.16, -2146.18 ),//3 lobbyPano2
    new THREE.Vector3(4796.15, -355.60, -1338.65 ),//4 lobbyPano3
    new THREE.Vector3(-2178.40, 94.75, 4489.82 ),//5 lobbyPano4
    new THREE.Vector3(2698.74, -813.70, -4120.30 ),//6 lobbyPano5
    //new THREE.Vector3(-956.27, -403.76, -4886.97 ),//7 stairsPano1
    new THREE.Vector3(3917.29, -104.19, -3090.25),//8 gallery1
    new THREE.Vector3(1615.18, -123.77, -4723.17 ),//9 gallery2
    new THREE.Vector3(-4909.76, -547.95, 703.48 ),//10 room123pano1
    new THREE.Vector3(1675.72, -1110.17, 4569.50 ),//11 room123pano2
    new THREE.Vector3(2922.94, -236.15, -4044.42 ),//12 canteen1
    new THREE.Vector3(-1040.52, -508.69, 4860.30 ),//13 canteen2
    new THREE.Vector3(-4104.58, -1116.70, -2612.44 ),//14 library1
    new THREE.Vector3(3978.56, -2702.49, -1347.76 ),//15 library2
    new THREE.Vector3(3205.31, -272.93, -3815.59 ),//16 library3
    new THREE.Vector3(2802.99, -32.10, 4131.86 ),//17 library4
    new THREE.Vector3(-4908.74, -257.19, -861.38 ),//18 library5
    new THREE.Vector3(4283.69, -0.16, 2571.50 ),//19 libraryseminar
    new THREE.Vector3(2802.99, -32.10, 4131.86 ),//20 hall1
    new THREE.Vector3(2686.96, -1117.67, -4055.95 ),//21 hall2
    new THREE.Vector3(4721.65, -1572.98, 445.34 ),//22 room106
    new THREE.Vector3(-4284.81, -287.08, 2549.10 ),//23 room107
    new THREE.Vector3(4455.26, 242.55, -2233.44 ),//24 room109
    new THREE.Vector3(362.35, -496.98, -4953.21 ),//25 room114refurb
    new THREE.Vector3(-4017.16, -649.68, 2897.80 ),//26 room112corridor
    new THREE.Vector3(-4975.70, 431.09, 81.88 ),//27 room112Pano1
    new THREE.Vector3(-4784.42, -338.30, 1385.07 ),//28 room112pano2
    new THREE.Vector3(-636.68, -950.72, 4858.41 ),//29 room112closet
    new THREE.Vector3(4967.20, -387.72, -335.15 ),//30 room112entrance
    new THREE.Vector3(1393.18, -381.55, 4780.49 ),//31 wetlab
    new THREE.Vector3(-3261.28, -847.36, 3688.28 ),//32 room114corridor
    new THREE.Vector3(4885.78, -271.35, -1002.79 ),//33 room114corridor2
    new THREE.Vector3(4976.74, -327.66, -198.09 ),//34 room114corridor3
    new THREE.Vector3(4574.39, -272.16, 1986.53 ),//35 corridor1
    new THREE.Vector3(-4636.00, -1053.32, 1534.00),//36 corridor2
    new THREE.Vector3(-4911.08, 208.11, -858.90 ),//37 room110
    new THREE.Vector3(-3148.70, -2030.31, -3299.06 ),//38 room114
    new THREE.Vector3(-4689.89, -607.63, 1601.47 ),//39 room118
    new THREE.Vector3(4972.69, -269.94, -318.82 ),//40 room111pano1
    new THREE.Vector3(3392.64, 289.56, -3652.67 ),//41 room111pano2
    new THREE.Vector3(4217.34, 135.92, -2663.88 ),//42 room117
  
    ];








  // Add console log event listeners for every panorama object
  this.entrancePano.addEventListener('enter-fade-start', () => {
    console.log('entrancePano entered');
    this.setRoom('entrancePano');
    this.viewer.tweenControlCenter( lookAtPositions[0], 6000 );
  })
  this.entranceStreet.addEventListener('enter-fade-start', () => {
    console.log('entranceStreet entered')
    this.setRoom('entranceStreet');
    this.viewer.tweenControlCenter( lookAtPositions[1], 0 );
  })
  this.lobbyPano1.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano1 entered')
    this.setRoom('lobbyPano1');
    this.viewer.tweenControlCenter( lookAtPositions[2], 0 );
  })
  this.lobbyPano2.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano2 entered')
    this.setRoom('lobbyPano2');
    this.viewer.tweenControlCenter( lookAtPositions[3], 0 );
  })
  this.lobbyPano3.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano3 entered')
    this.setRoom('lobbyPano3');
    this.viewer.tweenControlCenter( lookAtPositions[4], 0 );
  })
  this.lobbyPano4.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano4 entered')
    this.setRoom('lobbyPano4');
    this.viewer.tweenControlCenter( lookAtPositions[5], 0 );
  })
  this.lobbyPano5.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano5 entered')
    this.setRoom('lobbyPano5');
    this.viewer.tweenControlCenter( lookAtPositions[6], 0 );
  })
  this.gallery1.addEventListener('enter-fade-start', () => {
    console.log('gallery1 entered')
    this.setRoom('gallery1');
    this.viewer.tweenControlCenter( lookAtPositions[7], 0 );
  })
  this.gallery2.addEventListener('enter-fade-start', () => {
    console.log('gallery2 entered')
    this.setRoom('gallery2');
    this.viewer.tweenControlCenter( lookAtPositions[8], 0 );
  })
  this.room123Pano1.addEventListener('enter-fade-start', () => {
    console.log('room123Pano1 entered')
    this.setRoom('room123Pano1');
    this.viewer.tweenControlCenter( lookAtPositions[9], 0 );
  })
  this.room123Pano2.addEventListener('enter-fade-start', () => {
    console.log('room123Pano2 entered')
    this.setRoom('room123Pano2');
    this.viewer.tweenControlCenter( lookAtPositions[10], 0 );
  })
  this.canteen1.addEventListener('enter-fade-start', () => {
    console.log('canteen1 entered')
    this.setRoom('canteen1');
    this.viewer.tweenControlCenter( lookAtPositions[11], 0 );
  })
  this.canteen2.addEventListener('enter-fade-start', () => {
    console.log('canteen2 entered')
    this.setRoom('canteen2');
    this.viewer.tweenControlCenter( lookAtPositions[12], 0 );
  })
  this.library1.addEventListener('enter-fade-start', () => {
    console.log('library1 entered')
    this.setRoom('library1');
    this.viewer.tweenControlCenter( lookAtPositions[13], 0 );
  })
  this.library2.addEventListener('enter-fade-start', () => {
    console.log('library2 entered')
    this.setRoom('library2');
    this.viewer.tweenControlCenter( lookAtPositions[14], 0 );
  })
  this.library3.addEventListener('enter-fade-start', () => {
    console.log('library3 entered')
    this.setRoom('library3');
    this.viewer.tweenControlCenter( lookAtPositions[15], 0 );
  })
  this.library4.addEventListener('enter-fade-start', () => {
    console.log('library4 entered')
    this.setRoom('library4');
    this.viewer.tweenControlCenter( lookAtPositions[16], 0 );
  })
  this.library5.addEventListener('enter-fade-start', () => {
    console.log('library5 entered')
    this.setRoom('library5');
    this.viewer.tweenControlCenter( lookAtPositions[17], 0 );
  })
  this.librarySeminar.addEventListener('enter-fade-start', () => {
    console.log('librarySeminar entered')
    this.setRoom('librarySeminar');
    this.viewer.tweenControlCenter( lookAtPositions[18], 0 );
  })
  this.hall1.addEventListener('enter-fade-start', () => {
    console.log('hall1 entered')
    this.setRoom('hall1');
    this.viewer.tweenControlCenter( lookAtPositions[19], 0 );
  })
  this.hall2.addEventListener('enter-fade-start', () => {
    console.log('hall2 entered')
    this.setRoom('hall2');
    this.viewer.tweenControlCenter( lookAtPositions[20], 0 );
  })
  this.room106.addEventListener('enter-fade-start', () => {
    console.log('room106 entered')
    this.setRoom('room106');
    this.viewer.tweenControlCenter( lookAtPositions[21], 0 );
  })
  this.room107.addEventListener('enter-fade-start', () => {
    console.log('room107 entered')
    this.setRoom('room107');
    this.viewer.tweenControlCenter( lookAtPositions[22], 0 );
  })
  this.room109.addEventListener('enter-fade-start', () => {
    console.log('room109 entered')
    this.setRoom('room109');
    this.viewer.tweenControlCenter( lookAtPositions[23], 0 );
  })
  this.room114refurb.addEventListener('enter-fade-start', () => {
    console.log('room114refurb entered')
    this.setRoom('room114refurb');
    this.viewer.tweenControlCenter( lookAtPositions[24], 0 );
  })
  this.room112corridor.addEventListener('enter-fade-start', () => {
    console.log('room112corridor entered')
    this.setRoom('room112corridor');
    this.viewer.tweenControlCenter( lookAtPositions[25], 0 );
  })
  this.room112Pano1.addEventListener('enter-fade-start', () => {
    console.log('room112Pano1 entered')
    this.setRoom('room112Pano1');
    this.viewer.tweenControlCenter( lookAtPositions[26], 0 );
  })
  this.room112Pano2.addEventListener('enter-fade-start', () => {
    console.log('room112Pano2 entered')
    this.setRoom('room112Pano2');
    this.viewer.tweenControlCenter( lookAtPositions[27], 0 );
  })
  this.room112closet.addEventListener('enter-fade-start', () => {
    console.log('room112closet entered')
    this.setRoom('room112closet');
    this.viewer.tweenControlCenter( lookAtPositions[28], 0 );
  })
  this.room112entrance.addEventListener('enter-fade-start', () => {
    console.log('room112entrance entered')
    this.setRoom('room112entrance');
    this.viewer.tweenControlCenter( lookAtPositions[29], 0 );
  })
  this.wetLab.addEventListener('enter-fade-start', () => {
    console.log('wetLab entered')
    this.setRoom('wetLab');
    this.viewer.tweenControlCenter( lookAtPositions[30], 0 );
  })
  this.room114corridor.addEventListener('enter-fade-start', () => {
    console.log('room114corridor entered')
    this.setRoom('room114corridor');
    this.viewer.tweenControlCenter( lookAtPositions[31], 0 );
  })
  this.room114corridor2.addEventListener('enter-fade-start', () => {
    console.log('room114corridor2 entered')
    this.setRoom('room114corridor2');
    this.viewer.tweenControlCenter( lookAtPositions[32], 0 );
  })
  this.room114corridor3.addEventListener('enter-fade-start', () => {
    console.log('room114corridor3 entered')
    this.setRoom('room114corridor3');
    this.viewer.tweenControlCenter( lookAtPositions[33], 0 );
  })
  this.corridor1.addEventListener('enter-fade-start', () => {
    console.log('corridor1 entered')
    this.setRoom('corridor1');
    this.viewer.tweenControlCenter( lookAtPositions[34], 0 );
  })
  this.corridor2.addEventListener('enter-fade-start', () => {
    console.log('corridor2 entered')
    this.setRoom('corridor2');
    this.viewer.tweenControlCenter( lookAtPositions[35], 0 );
  })
  this.room110.addEventListener('enter-fade-start', () => {
    console.log('room110 entered')
    this.setRoom('room110');
    this.viewer.tweenControlCenter( lookAtPositions[36], 0 );
  })
  this.room114.addEventListener('enter-fade-start', () => {
    console.log('room114 entered')
    this.setRoom('room114');
    this.viewer.tweenControlCenter( lookAtPositions[37], 0 );
  })
  this.room118.addEventListener('enter-fade-start', () => {
    console.log('room118 entered')
    this.setRoom('room118');
    this.viewer.tweenControlCenter( lookAtPositions[38], 0 );
  })
  this.room111Pano1.addEventListener('enter-fade-start', () => {
    console.log('room111Pano1 entered')
    this.setRoom('room111Pano1');
    this.viewer.tweenControlCenter( lookAtPositions[39], 0 );
  })
  this.room111Pano2.addEventListener('enter-fade-start', () => {
    console.log('room111Pano2 entered')
    this.setRoom('room111Pano2');
    this.viewer.tweenControlCenter( lookAtPositions[40], 0 );
  })
  this.room117.addEventListener('enter-fade-start', () => {
    console.log('room117 entered')
    this.setRoom('room117');
    this.viewer.tweenControlCenter( lookAtPositions[41], 0 );
  })

  window.dispatchEvent(new Event('resize'));

  }
}
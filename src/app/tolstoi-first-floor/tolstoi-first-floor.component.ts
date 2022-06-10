import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

// @ts-ignore
import * as PANOLENS from 'panolens';
// @ts-ignore
import * as THREE from 'three';


@Component({
  selector: 'app-tolstoi-first-floor',
  templateUrl: './tolstoi-first-floor.component.html',
  styleUrls: ['./tolstoi-first-floor.component.scss']
})
export class TolstoiFirstFloorComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() {
   }

  ngOnInit(): void {
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


public loadFloorData() {
  // Load all images as constants
  const entranceImage = 'assets/Tolstoi/1.korrus/tolstoi-siseou.jpg'
  const entranceStreetImage = 'assets/Tolstoi/1.korrus/tolstoi-sissepaas.jpg'
  const lobbyImage1 = 'assets/Tolstoi/1.korrus/fuajee1.jpg'
  const lobbyImage2 = 'assets/Tolstoi/1.korrus/fuajee2.jpg'
  const lobbyImage3 = 'assets/Tolstoi/1.korrus/fuajee3.jpg'
  const lobbyImage4 = 'assets/Tolstoi/1.korrus/fuajee4.jpg'
  const lobbyImage5 = 'assets/Tolstoi/1.korrus/fuajee5.jpg'
  const galleryImage1 = 'assets/Tolstoi/1.korrus/galerii1.jpg'
  const galleryImage2 = 'assets/Tolstoi/1.korrus/galerii2.jpg'
  const room123Image1 = 'assets/Tolstoi/1.korrus/123_1.jpg'
  const room123Image2 = 'assets/Tolstoi/1.korrus/123_2.jpg'
  const canteenImage1 = 'assets/Tolstoi/1.korrus/sookla1.jpg'
  const canteenImage2 = 'assets/Tolstoi/1.korrus/sookla2.jpg'
  const libraryImage1 = 'assets/Tolstoi/1.korrus/raamatukogu1.jpg'
  const libraryImage2 = 'assets/Tolstoi/1.korrus/raamatukogu2.jpg'
  const libraryImage3 = 'assets/Tolstoi/1.korrus/raamatukogu3.jpg'
  const libraryImage4 = 'assets/Tolstoi/1.korrus/raamatukogu4.jpg'
  const libraryImage5 = 'assets/Tolstoi/1.korrus/raamatukogu5.jpg'
  const librarySeminarImage = 'assets/Tolstoi/1.korrus/raamatukogu_seminar.jpg'
  const hallImage1 = 'assets/Tolstoi/1.korrus/hall1.jpg'
  const hallImage2 = 'assets/Tolstoi/1.korrus/hall2.jpg'
  const room106Image = 'assets/Tolstoi/1.korrus/106.jpg'
  const room107Image = 'assets/Tolstoi/1.korrus/107.jpg'
  const room109Image = 'assets/Tolstoi/1.korrus/109.jpg'
  const room114refurbImage = 'assets/Tolstoi/1.korrus/114viimistlus.jpg'
  const room112corridorImage = 'assets/Tolstoi/1.korrus/112koridor.jpg'
  const room112Image1 = 'assets/Tolstoi/1.korrus/112_1.jpg'
  const room112Image2 = 'assets/Tolstoi/1.korrus/112_2.jpg'
  const room112closetImage = 'assets/Tolstoi/1.korrus/112pimik.jpg'
  const room112entranceImage = 'assets/Tolstoi/1.korrus/112sissepaas.jpg'
  const wetLabImage = 'assets/Tolstoi/1.korrus/marglabor.jpg'
  const room114corridorImage = 'assets/Tolstoi/1.korrus/114koridor.jpg'
  const room114corridorImage2 = 'assets/Tolstoi/1.korrus/114koridor2.jpg'
  const room114corridorImage3 = 'assets/Tolstoi/1.korrus/114koridor3.jpg'
  const corridorImage1 = 'assets/Tolstoi/1.korrus/koridor1.jpg'
  const corridorImage2 = 'assets/Tolstoi/1.korrus/koridor2.jpg'
  const room110Image = 'assets/Tolstoi/1.korrus/110.jpg'
  const room114Image = 'assets/Tolstoi/1.korrus/114.jpg'
  const room118Image = 'assets/Tolstoi/1.korrus/118.jpg'
  const room111Image1 = 'assets/Tolstoi/1.korrus/111_1.jpg'
  const room111Image2 = 'assets/Tolstoi/1.korrus/111_2.jpg'
  const room117Image = 'assets/Tolstoi/1.korrus/117.jpg'

  // Create panorama objects from all images
  const entrancePano = new PANOLENS.ImagePanorama(entranceImage);
  const entranceStreet = new PANOLENS.ImagePanorama(entranceStreetImage);
  const lobbyPano1 = new PANOLENS.ImagePanorama(lobbyImage1);
  const lobbyPano2 = new PANOLENS.ImagePanorama(lobbyImage2);
  const lobbyPano3 = new PANOLENS.ImagePanorama(lobbyImage3);
  const lobbyPano4 = new PANOLENS.ImagePanorama(lobbyImage4);
  const lobbyPano5 = new PANOLENS.ImagePanorama(lobbyImage5);
  const gallery1 = new PANOLENS.ImagePanorama(galleryImage1);
  const gallery2 = new PANOLENS.ImagePanorama(galleryImage2);
  const room123Pano1 = new PANOLENS.ImagePanorama(room123Image1);
  const room123Pano2 = new PANOLENS.ImagePanorama(room123Image2);
  const canteen1 = new PANOLENS.ImagePanorama(canteenImage1);
  const canteen2 = new PANOLENS.ImagePanorama(canteenImage2);
  const library1 = new PANOLENS.ImagePanorama(libraryImage1);
  const library2 = new PANOLENS.ImagePanorama(libraryImage2);
  const library3 = new PANOLENS.ImagePanorama(libraryImage3);
  const library4 = new PANOLENS.ImagePanorama(libraryImage4);
  const library5 = new PANOLENS.ImagePanorama(libraryImage5);
  const librarySeminar = new PANOLENS.ImagePanorama(librarySeminarImage);
  const hall1 = new PANOLENS.ImagePanorama(hallImage1);
  const hall2 = new PANOLENS.ImagePanorama(hallImage2);
  const room106 = new PANOLENS.ImagePanorama(room106Image);
  const room107 = new PANOLENS.ImagePanorama(room107Image);
  const room109 = new PANOLENS.ImagePanorama(room109Image);
  const room114refurb = new PANOLENS.ImagePanorama(room114refurbImage);
  const room112corridor = new PANOLENS.ImagePanorama(room112corridorImage);
  const room112Pano1 = new PANOLENS.ImagePanorama(room112Image1);
  const room112Pano2 = new PANOLENS.ImagePanorama(room112Image2);
  const room112closet = new PANOLENS.ImagePanorama(room112closetImage);
  const room112entrance = new PANOLENS.ImagePanorama(room112entranceImage);
  const wetLab = new PANOLENS.ImagePanorama(wetLabImage);
  const room114corridor = new PANOLENS.ImagePanorama(room114corridorImage);
  const room114corridor2 = new PANOLENS.ImagePanorama(room114corridorImage2);
  const room114corridor3 = new PANOLENS.ImagePanorama(room114corridorImage3);
  const corridor1 = new PANOLENS.ImagePanorama(corridorImage1);
  const corridor2 = new PANOLENS.ImagePanorama(corridorImage2);
  const room110 = new PANOLENS.ImagePanorama(room110Image);
  const room114 = new PANOLENS.ImagePanorama(room114Image);
  const room118 = new PANOLENS.ImagePanorama(room118Image);
  const room111Pano1 = new PANOLENS.ImagePanorama(room111Image1);
  const room111Pano2 = new PANOLENS.ImagePanorama(room111Image2);
  const room117 = new PANOLENS.ImagePanorama(room117Image);
  

  this.viewer.add(entrancePano);
  this.viewer.add(room117);
  this.viewer.add(room118);
  this.viewer.add(hall1);
  this.viewer.add(hall2);
  this.viewer.add(lobbyPano1);
  this.viewer.add(lobbyPano2);
  this.viewer.add(lobbyPano3);
  this.viewer.add(lobbyPano4);
  this.viewer.add(lobbyPano5);
  this.viewer.add(gallery1);
  this.viewer.add(gallery2);
  this.viewer.add(room123Pano1);
  this.viewer.add(room123Pano2);
  this.viewer.add(canteen1);
  this.viewer.add(canteen2);
  this.viewer.add(library1);
  this.viewer.add(library2);
  this.viewer.add(library3);
  this.viewer.add(library4);
  this.viewer.add(library5);
  this.viewer.add(librarySeminar);
  this.viewer.add(room106);
  this.viewer.add(room107);
  this.viewer.add(room109);
  this.viewer.add(room112corridor);
  this.viewer.add(room112Pano2);
  this.viewer.add(room112closet);
  this.viewer.add(room112Pano1);
  this.viewer.add(wetLab);
  this.viewer.add(room114corridor);
  this.viewer.add(room114corridor2);
  this.viewer.add(room114corridor3);
  this.viewer.add(room112entrance);
  this.viewer.add(room114refurb);
  this.viewer.add(corridor1);
  this.viewer.add(corridor2);
  this.viewer.add(room110);
  this.viewer.add(room114);
  this.viewer.add(room111Pano1);
  this.viewer.add(room111Pano2);
  this.viewer.add(entranceStreet);
  
  // Entrance door view
  entrancePano.link(lobbyPano1, new THREE.Vector3(-4579.29, -1348.64, -1471.43));

  // Street door entrance view
  entranceStreet.link(room117, new THREE.Vector3(-4884.38, 930.29, 469.40));

  // Lobby door view
  lobbyPano1.link(entrancePano, new THREE.Vector3(-4234.59, -1779.83, -1958.72));
  lobbyPano1.link(lobbyPano2, new THREE.Vector3(-637.56, -2377.27, 4342.64));
  lobbyPano1.link(lobbyPano3, new THREE.Vector3(4400.23, -1996.67, 1253.56));

  // Lobby toilets view
  lobbyPano2.link(lobbyPano1, new THREE.Vector3(446.41, -1668.91, 4686.21));
  lobbyPano2.link(lobbyPano5, new THREE.Vector3(-4467.32, -1542.65, -1615.24));

  // Lobby under stairs view
  lobbyPano5.link(lobbyPano2, new THREE.Vector3(-1593.94, -1597.62, 4454.03));
  lobbyPano5.link(hall2, new THREE.Vector3(3314.15, -603.27, -3689.34));

  // Lobby next to stairs view
  lobbyPano3.link(lobbyPano1, new THREE.Vector3(-3762.73, -2110.81, 2509.00));
  lobbyPano3.link(lobbyPano4, new THREE.Vector3(3475.43, -1889.29, -3052.56));

  // Lobby end view
  lobbyPano4.link(lobbyPano3, new THREE.Vector3(-4205.28, -2596.77, 720.09));
  lobbyPano4.link(gallery1, new THREE.Vector3(-1057.23, -872.66, -4803.75));

  // Gallery entrance
  gallery1.link(lobbyPano4, new THREE.Vector3(4206.80, -426.05, -2654.32));
  gallery1.link(gallery2, new THREE.Vector3(-4050.18, -2281.25, 1836.77));

  // Gallery end
  gallery2.link(gallery1, new THREE.Vector3(2525.13, -1688.59, -3959.38));
  gallery2.link(room123Pano1, new THREE.Vector3(-4178.80, -2395.57, -1322.43));

  // Room 123 first view
  room123Pano1.link(gallery2, new THREE.Vector3(-4430.07, -2194.87, -690.13));
  room123Pano1.link(room123Pano2, new THREE.Vector3(3758.57, -1969.49, 2634.87));
  room123Pano1.link(canteen1, new THREE.Vector3(1701.72, -1990.38, -4250.08));

  // Room 123 second view
  room123Pano2.link(room123Pano1, new THREE.Vector3(577.96, -1928.63, 4571.94));
  room123Pano2.link(library5, new THREE.Vector3(-2567.09, -1303.08, -4076.43));
  room123Pano2.link(room118, new THREE.Vector3(4465.56, -826.15, -2079.54));

  // Canteen first view
  canteen1.link(canteen2, new THREE.Vector3(1327.69, -1788.24, -4467.79));
  canteen1.link(room123Pano1, new THREE.Vector3(-202.00, -1793.77, 4652.95));

  // Canteen eating area view
  canteen2.link(canteen1, new THREE.Vector3(-2628.31, -1695.77, -3889.21));

  // Library entrance view
  library5.link(room123Pano2, new THREE.Vector3(6.03, -661.32, 4952.43));
  library5.link(library1, new THREE.Vector3(-4590.70, -1033.59, -1662.94));

  // Library end view
  library1.link(library3, new THREE.Vector3(-1913.02, -2038.47, -4138.02));
  library1.link(library2, new THREE.Vector3(-4464.94, -1764.20, -1372.55));
  library1.link(library5, new THREE.Vector3(-4274.34, -1048.08, 2357.73));
  library1.link(librarySeminar, new THREE.Vector3(4583.35, -1877.26, 635.83));

  // Library storage door
  library3.link(library1, new THREE.Vector3(-4074.40, -2606.54, 1256.16));

  // Library between bookcases
  library2.link(library1, new THREE.Vector3(3279.65, -2453.29, -2856.46));

  // Library seminar room
  librarySeminar.link(library1, new THREE.Vector3(-2645.91, -651.89, -4180.43));

  // Hall entrance view
  hall2.link(lobbyPano5, new THREE.Vector3(-4103.68, -760.86, 2740.45));
  hall2.link(hall1, new THREE.Vector3(-1462.72, -1469.61, -4546.36));
  hall2.link(room106, new THREE.Vector3(725.67, -1340.59, 4751.34));
  hall2.link(room107, new THREE.Vector3(4777.03, -1204.02, -809.31));

  // Hall end view
  hall1.link(hall2, new THREE.Vector3(4805.51, -1331.93, -188.73));
  hall1.link(room109, new THREE.Vector3(2346.28, -1277.81, -4218.66));
  hall1.link(room114corridor, new THREE.Vector3(490.25, -764.99, 4914.78));
  hall1.link(corridor2, new THREE.Vector3(-3530.06, -1204.96, -3321.18));

  // Room 106 view
  room106.link(hall2, new THREE.Vector3(-840.79, -982.41, -4819.71));

  // Room 107 view
  room107.link(hall2, new THREE.Vector3(3690.73, -1260.81, -3115.41));

  // Room 109 view
  room109.link(hall1, new THREE.Vector3(1414.83, -1102.00, -4660.77));

  // Room 114 refurb view
  room114refurb.link(room114corridor, new THREE.Vector3(3895.10, -695.31, -3042.78));
  room114refurb.link(room112entrance, new THREE.Vector3(-2290.09, -374.26, -4420.60));

  // Room 112 corridor view
  room112corridor.link(room112entrance, new THREE.Vector3(336.65, -806.03, 4916.05));
  room112corridor.link(room112Pano1, new THREE.Vector3(-4627.23, -1870.84, 150.30));

  // Room 112 first view
  room112Pano1.link(room112corridor, new THREE.Vector3(1796.73, -819.13, 4584.97));
  room112Pano1.link(room112Pano2, new THREE.Vector3(-4480.65, -1035.66, -1948.49));
  room112Pano1.link(room112closet, new THREE.Vector3(-4285.91, -1208.57, 2257.26));

  // Room 112 second view
  room112Pano2.link(room112Pano1, new THREE.Vector3(237.81, -2209.43, 4470.47));

  // Room 112 closet view
  room112closet.link(room112Pano1, new THREE.Vector3(3779.74, -690.25, 3186.19));

  // Room 112 entrance view
  room112entrance.link(room112corridor, new THREE.Vector3(4889.44, -488.20, 876.93));
  room112entrance.link(room114refurb, new THREE.Vector3(-3731.44, -2006.73, 2645.17));
  room112entrance.link(room114corridor2, new THREE.Vector3(-1430.92, -304.31, -4773.51));

  // Room 114 corridor view
  room114corridor.link(hall1, new THREE.Vector3(733.21, -956.05, -4842.05));
  room114corridor.link(room114refurb, new THREE.Vector3(-284.54, -765.62, 4925.49));
  room114corridor.link(room112entrance, new THREE.Vector3(-4532.30, -765.87, 1959.80));

  // Room 114 corridor 2 view
  room114corridor2.link(room112entrance, new THREE.Vector3(-4763.69, -1051.80, 1069.25));
  room114corridor2.link(room114corridor3, new THREE.Vector3(4912.80, -381.30, -804.64));

  // Room 114 corridor 3 view
  room114corridor3.link(room114corridor2, new THREE.Vector3(-3534.73, -817.59, -3429.76));
  room114corridor3.link(wetLab, new THREE.Vector3(2586.91, -632.56, -4221.47));
  room114corridor3.link(room114, new THREE.Vector3(-4026.53, -488.45, 2918.38));
  room114corridor3.link(room118, new THREE.Vector3(3333.54, -401.59, 3704.31));

  // Wetlab view
  wetLab.link(room114corridor3, new THREE.Vector3(-2152.58, -622.56, 4459.32));

  // Corridor 2 view
  corridor2.link(hall1, new THREE.Vector3(4609.40, -1907.09, -235.35));
  corridor2.link(corridor1, new THREE.Vector3(913.68, -800.16, 4844.82));
  corridor2.link(room111Pano1, new THREE.Vector3(-4691.99, -1700.29, 115.20));

  // Corridor 1 view
  corridor1.link(corridor2, new THREE.Vector3(-4355.35, -1622.50, -1825.43));
  corridor1.link(room110, new THREE.Vector3(4187.64, -532.08, 2660.82));

  // Room 110 view
  room110.link(corridor1, new THREE.Vector3(-1181.65, -872.70, 4770.41));

  // Room 114 view
  room114.link(room114corridor3, new THREE.Vector3(-4923.94, -735.80, -381.40));

  // Room 118 view
  room118.link(room114corridor3, new THREE.Vector3(4686.07, -1137.17, 1293.42));
  room118.link(room123Pano2, new THREE.Vector3(-4509.28, -1172.84, -1796.56));
  room118.link(room117, new THREE.Vector3(3674.49, -797.31, -3294.11));

  // Room 111 stair view
  room111Pano1.link(corridor2, new THREE.Vector3(-4897.78, 231.72, -936.97));
  room111Pano1.link(room111Pano2, new THREE.Vector3(4762.14, -1238.73, 840.88));

  // Room 111 view
  room111Pano2.link(room111Pano1, new THREE.Vector3(-236.12, 185.89, -4980.32));

  // Room 117 view
  room117.link(room118, new THREE.Vector3(-4584.88, -783.12, 1816.94));
  room117.link(entranceStreet, new THREE.Vector3(4676.81, -525.41, -1662.65));

  // Add console log event listeners for every panorama object
  entrancePano.addEventListener('enter-fade-start', () => {
    console.log('entrancePano entered')
  })
  entranceStreet.addEventListener('enter-fade-start', () => {
    console.log('entranceStreet entered')
  })
  lobbyPano1.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano1 entered')
  })
  lobbyPano2.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano2 entered')
  })
  lobbyPano3.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano3 entered')
  })
  lobbyPano4.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano4 entered')
  })
  lobbyPano5.addEventListener('enter-fade-start', () => {
    console.log('lobbyPano5 entered')
  })
  gallery1.addEventListener('enter-fade-start', () => {
    console.log('gallery1 entered')
  })
  gallery2.addEventListener('enter-fade-start', () => {
    console.log('gallery2 entered')
  })
  room123Pano1.addEventListener('enter-fade-start', () => {
    console.log('room123Pano1 entered')
  })
  room123Pano2.addEventListener('enter-fade-start', () => {
    console.log('room123Pano2 entered')
  })
  canteen1.addEventListener('enter-fade-start', () => {
    console.log('canteen1 entered')
  })
  canteen2.addEventListener('enter-fade-start', () => {
    console.log('canteen2 entered')
  })
  library1.addEventListener('enter-fade-start', () => {
    console.log('library1 entered')
  })
  library2.addEventListener('enter-fade-start', () => {
    console.log('library2 entered')
  })
  library3.addEventListener('enter-fade-start', () => {
    console.log('library3 entered')
  })
  library4.addEventListener('enter-fade-start', () => {
    console.log('library4 entered')
  })
  library5.addEventListener('enter-fade-start', () => {
    console.log('library5 entered')
  })
  librarySeminar.addEventListener('enter-fade-start', () => {
    console.log('librarySeminar entered')
  })
  hall1.addEventListener('enter-fade-start', () => {
    console.log('hall1 entered')
  })
  hall2.addEventListener('enter-fade-start', () => {
    console.log('hall2 entered')
  })
  room106.addEventListener('enter-fade-start', () => {
    console.log('room106 entered')
  })
  room107.addEventListener('enter-fade-start', () => {
    console.log('room107 entered')
  })
  room109.addEventListener('enter-fade-start', () => {
    console.log('room109 entered')
  })
  room114refurb.addEventListener('enter-fade-start', () => {
    console.log('room114refurb entered')
  })
  room112corridor.addEventListener('enter-fade-start', () => {
    console.log('room112corridor entered')
  })
  room112Pano1.addEventListener('enter-fade-start', () => {
    console.log('room112Pano1 entered')
  })
  room112Pano2.addEventListener('enter-fade-start', () => {
    console.log('room112Pano2 entered')
  })
  room112closet.addEventListener('enter-fade-start', () => {
    console.log('room112closet entered')
  })
  room112entrance.addEventListener('enter-fade-start', () => {
    console.log('room112entrance entered')
  })
  wetLab.addEventListener('enter-fade-start', () => {
    console.log('wetLab entered')
  })
  room114corridor.addEventListener('enter-fade-start', () => {
    console.log('room114corridor entered')
  })
  room114corridor2.addEventListener('enter-fade-start', () => {
    console.log('room114corridor2 entered')
  })
  room114corridor3.addEventListener('enter-fade-start', () => {
    console.log('room114corridor3 entered')
  })
  corridor1.addEventListener('enter-fade-start', () => {
    console.log('corridor1 entered')
  })
  corridor2.addEventListener('enter-fade-start', () => {
    console.log('corridor2 entered')
  })
  room110.addEventListener('enter-fade-start', () => {
    console.log('room110 entered')
  })
  room114.addEventListener('enter-fade-start', () => {
    console.log('room114 entered')
  })
  room118.addEventListener('enter-fade-start', () => {
    console.log('room118 entered')
  })
  room111Pano1.addEventListener('enter-fade-start', () => {
    console.log('room111Pano1 entered')
  })
  room111Pano2.addEventListener('enter-fade-start', () => {
    console.log('room111Pano2 entered')
  })
  room117.addEventListener('enter-fade-start', () => {
    console.log('room117 entered')
  })

  window.dispatchEvent(new Event('resize'));
  }
}
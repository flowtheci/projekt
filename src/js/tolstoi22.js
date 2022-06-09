

//function createMap() {
//$("#map").html("<img src='assets/maps/2korrus.jpg'/>");
//$("#map").css({top: 288, left: 350});
//}                                    
// Load all images as constants
const secondFloorStart = 'assets/Tolstoi/2korrus/3_2_201 1.1-Edit.jpg'
const secondHallImage1 = 'assets/Tolstoi/2korrus/3_2_207-Edit-Edit.jpg'
const secondHallImage2 = 'assets/Tolstoi/2korrus/3_2_207-Edit.jpg'
const paintingHall1 = 'assets/Tolstoi/2korrus/3_2_206 1.1-Edit.jpg'
const paintingHall2 = 'assets/Tolstoi/2korrus/3_2_206 1.2-Edit.jpg'
const room1 = 'assets/Tolstoi/2korrus/3_2_213a-Edit.jpg'
const room2 = 'assets/Tolstoi/2korrus/3_2_213-Edit.jpg'
const corridor1 = 'assets/Tolstoi/2korrus/3_2_209-Edit.jpg'
const corridor2 = 'assets/Tolstoi/2korrus/3_2_koridor 1.1-Edit.jpg'
const corridor3 = 'assets/Tolstoi/2korrus/3_2_koridor 1.2-Edit.jpg'
const paintingLead = 'assets/Tolstoi/2korrus/3_2_208-Edit-Edit.jpg'
const paintingRoom = 'assets/Tolstoi/2korrus/3_2_202-Edit.jpg'
const restoRoom = 'assets/Tolstoi/2korrus/3_2_205-Edit-Edit.jpg'
const restoRoom2 = 'assets/Tolstoi/2korrus/3_2_205 restaureerimise labor-Edit-Edit.jpg'
const terrass1 = 'assets/Tolstoi/2korrus/3_2_Terrass 1.2-Edit.jpg'
const terrass2 = 'assets/Tolstoi/2korrus/3_2_Terrass 1.1-Edit.jpg'
const drawingClass1 = 'assets/Tolstoi/2korrus/3_2_217 1.1-Edit.jpg'
const drawingClass2 = 'assets/Tolstoi/2korrus/3_2_217 1.2-Edit.jpg'
const drawingClass3 = 'assets/Tolstoi/2korrus/3_2_217a-Edit-Edit.jpg'
const drawingClass4 = 'assets/Tolstoi/2korrus/3_2_214_215-Edit.jpg'
const stairs1 = 'assets/Tolstoi/2korrus/3_2_213 trepid üles-Edit.jpg'
const stairs2 = 'assets/Tolstoi/2korrus/3_2_201 trepp 1-Edit.jpg'


// Create panorama objects from all images
const secondStartPano = new PANOLENS.ImagePanorama(secondFloorStart)
const secondHallPano = new PANOLENS.ImagePanorama(secondHallImage1)
const secondHallPano2 = new PANOLENS.ImagePanorama(secondHallImage2)
const paintingHallPano1 = new PANOLENS.ImagePanorama(paintingHall1)
const paintingHallPano2 = new PANOLENS.ImagePanorama(paintingHall2)
const roomPano1 = new PANOLENS.ImagePanorama(room1)
const roomPano2 = new PANOLENS.ImagePanorama(room2)
const corridorPano1 = new PANOLENS.ImagePanorama(corridor1)
const corridorPano2 = new PANOLENS.ImagePanorama(corridor2)
const corridorPano3 = new PANOLENS.ImagePanorama(corridor3)
const paintingLeadPano = new PANOLENS.ImagePanorama(paintingLead)
const paintingRoomPano = new PANOLENS.ImagePanorama(paintingRoom)
const restoRoomPano = new PANOLENS.ImagePanorama(restoRoom)
const restoRoomPano2 = new PANOLENS.ImagePanorama(restoRoom2)
const terrassPano1 = new PANOLENS.ImagePanorama(terrass1)
const terrassPano2 = new PANOLENS.ImagePanorama(terrass2)
const drawingClassPano1 = new PANOLENS.ImagePanorama(drawingClass1)
const drawingClassPano2 = new PANOLENS.ImagePanorama(drawingClass2)
const drawingClassPano3 = new PANOLENS.ImagePanorama(drawingClass3)
const drawingClassPano4 = new PANOLENS.ImagePanorama(drawingClass4)
const stairsPano1 = new PANOLENS.ImagePanorama(stairs1)
const stairsPano2 = new PANOLENS.ImagePanorama(stairs2)



// Add console log event listeners for every panorama object
secondStartPano.addEventListener('enter-fade-start', () => {
    console.log('secondStartPano entered')
  })
secondHallPano.addEventListener('enter-fade-start', () => {
    console.log('secondHallImage1 entered')
  })
secondHallPano2.addEventListener('enter-fade-start', () => {
    console.log('secondHallImage2 entered')
  })
  paintingHallPano1.addEventListener('enter-fade-start', () => {
    console.log('paintingHall1 entered')
  })
  paintingHallPano2.addEventListener('enter-fade-start', () => {
    console.log('paintingHall2 entered')
  })
  roomPano1.addEventListener('enter-fade-start', () => {
    console.log('room1 entered')
  })
  roomPano2.addEventListener('enter-fade-start', () => {
    console.log('room2 entered')
  })
  corridorPano1.addEventListener('enter-fade-start', () => {
    console.log('corrdior1 entered')
  })
  corridorPano2.addEventListener('enter-fade-start', () => {
    console.log('corrdior2 entered')
  })
  corridorPano3.addEventListener('enter-fade-start', () => {
    console.log('corrdior3 entered')
  })
  paintingLeadPano.addEventListener('enter-fade-start', () => {
    console.log('paintingLead entered')
  })
  paintingRoomPano.addEventListener('enter-fade-start', () => {
    console.log('paintingRoom entered')
  })
  restoRoomPano.addEventListener('enter-fade-start', () => {
    console.log('restoRoom entered')
  })
  restoRoomPano2.addEventListener('enter-fade-start', () => {
    console.log('restoRoom2 entered')
  })
  terrassPano1.addEventListener('enter-fade-start', () => {
    console.log('terrass1 entered')
  })
  terrassPano2.addEventListener('enter-fade-start', () => {
    console.log('terrass2 entered')
  })
  drawingClassPano1.addEventListener('enter-fade-start', () => {
    console.log('drawingClass1 entered')
  })
  drawingClassPano2.addEventListener('enter-fade-start', () => {
    console.log('drawingClass2 entered')
  })
  drawingClassPano3.addEventListener('enter-fade-start', () => {
    console.log('drawingClass3 entered')
  })
  drawingClassPano4.addEventListener('enter-fade-start', () => {
    console.log('drawingClass4 entered')
  })
  stairsPano1.addEventListener('enter-fade-start', () => {
    console.log('stairs1 entered')
  })
  stairsPano2.addEventListener('enter-fade-start', () => {
    console.log('stairs2 entered')
  })







  // add all panoramas to viewport
// first added panorama is tour start point
const viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
});

viewer.add(secondStartPano);
viewer.add(secondHallPano);
viewer.add(secondHallPano2);
viewer.add(paintingHallPano1);
viewer.add(paintingHallPano2);
viewer.add(roomPano1);
viewer.add(roomPano2);
viewer.add(corridorPano1);
viewer.add(corridorPano2);
viewer.add(corridorPano3);
viewer.add(paintingLeadPano);
viewer.add(paintingRoomPano);
viewer.add(restoRoomPano);
viewer.add(restoRoomPano2);
viewer.add(terrassPano1);
viewer.add(terrassPano2);
viewer.add(drawingClassPano1);
viewer.add(drawingClassPano2);
viewer.add(drawingClassPano3);
viewer.add(drawingClassPano4);
viewer.add(stairsPano1);
viewer.add(stairsPano2);




// link panoramas with points
// Entrance door view
secondStartPano.link(secondHallPano, new THREE.Vector3(3252.90, -2534.93, 2816.94));
secondStartPano.link(terrassPano1, new THREE.Vector3(2891.05, -1640.81, -3724.01));
terrassPano1.link(secondStartPano, new THREE.Vector3(4616.25, -1724.98, 786.76));
terrassPano1.link(terrassPano2, new THREE.Vector3(-439.77, -1084.94, 4855.17));
terrassPano2.link(terrassPano1, new THREE.Vector3(3461.53, -1051.30, 3437.30));
secondHallPano.link(secondStartPano, new THREE.Vector3(-4512.67, -1968.11, 836.00));
secondHallPano.link(secondHallPano2, new THREE.Vector3(2424.40, -1965.59, -3897.39));
secondHallPano.link(paintingLeadPano, new THREE.Vector3(-2914.47, -2377.23, -3287.41));
secondHallPano2.link(secondHallPano, new THREE.Vector3(-4141.63, -2402.61, -1418.06));
secondHallPano2.link(paintingHallPano1, new THREE.Vector3(2234.14, -3547.09, 2717.91));
secondHallPano2.link(corridorPano1, new THREE.Vector3(3563.69, -1051.51, -3335.08));
paintingHallPano1.link(secondHallPano2, new THREE.Vector3(-2481.02, -2613.02, 3464.70));
paintingHallPano1.link(paintingHallPano2, new THREE.Vector3(-3616.00, -1481.35, -3109.00));
paintingHallPano2.link(paintingHallPano1, new THREE.Vector3(4811.63, -1317.60, 148.98));
paintingHallPano2.link(roomPano1, new THREE.Vector3(-3945.13, -2843.46, -1130.27));
roomPano1.link(paintingHallPano2, new THREE.Vector3(177.10, -2650.38, -4228.60));
roomPano1.link(roomPano2, new THREE.Vector3(4107.58, -2295.51, 1673.92));
roomPano2.link(roomPano1, new THREE.Vector3(-3866.50, -2529.77, -1891.11));
roomPano2.link(corridorPano1, new THREE.Vector3(2766.77, -1884.74, -3709.02));
corridorPano1.link(secondHallPano2, new THREE.Vector3(-1542.31, -1274.75, 4576.13));
corridorPano1.link(roomPano2, new THREE.Vector3(1294.55, -1814.32, -4466.72));
paintingLeadPano.link(secondHallPano, new THREE.Vector3(-2397.71, -2042.89, -3872.29));
secondHallPano.link(corridorPano2, new THREE.Vector3(2790.79, -1924.74, 3669.26));
corridorPano2.link(secondHallPano, new THREE.Vector3(1294.55, -1814.32, -4466.72));
corridorPano2.link(paintingRoomPano, new THREE.Vector3(-3960.59, -2782.63, 1229.40));
paintingRoomPano.link(corridorPano2, new THREE.Vector3(1178.56, -1507.37, -4611.49));
corridorPano2.link(corridorPano3, new THREE.Vector3(4466.26, -1843.87, -1254.20));
corridorPano3.link(corridorPano2, new THREE.Vector3(-4398.81, -2351.14, 205.27));
corridorPano3.link(restoRoomPano, new THREE.Vector3(4298.90, -2512.05, 392.20));
restoRoomPano.link(corridorPano3, new THREE.Vector3(3260.32, -3209.08, 2005.96));
restoRoomPano.link(restoRoomPano2, new THREE.Vector3(396.25, -2184.54, -4473.64));
restoRoomPano2.link(restoRoomPano, new THREE.Vector3(2333.29, -3227.95, -3015.67));
roomPano1.link(drawingClassPano1, new THREE.Vector3(-164.80, -2586.24, 4269.27));
drawingClassPano1.link(roomPano1, new THREE.Vector3(3642.51, -1607.68, -3011.09));
drawingClassPano1.link(drawingClassPano2, new THREE.Vector3(-4258.88, -1225.19, 2299.98));
drawingClassPano2.link(drawingClassPano1, new THREE.Vector3(4845.16, -1054.55, 588.50));
drawingClassPano2.link(drawingClassPano3, new THREE.Vector3(-4832.86, -1244.17, -139.13));
drawingClassPano3.link(drawingClassPano2, new THREE.Vector3(3852.95, -794.60, 3074.59));
drawingClassPano2.link(drawingClassPano4, new THREE.Vector3(1421.40, -2310.38, 4195.60));
drawingClassPano4.link(drawingClassPano2, new THREE.Vector3(-4548.73, -1853.69, -909.90));
roomPano2.link(drawingClassPano4, new THREE.Vector3(-2212.25, -1886.56, 4061.27));
drawingClassPano4.link(roomPano2, new THREE.Vector3(1322.73, -483.23, -4787.80));
roomPano2.link(stairsPano1, new THREE.Vector3(1995.10, -901.56, 4491.29));
stairsPano1.link(roomPano2, new THREE.Vector3(-1694.59, -3406.45, -3232.88));
secondStartPano.link(stairsPano2, new THREE.Vector3(-149.91, -1735.03, -4677.35));
stairsPano2.link(secondStartPano, new THREE.Vector3(2745.30, -3672.10, 1984.35));


	// Position of Map
	map.style.display = "block";
	map.style.left = 10 + "px";
	map.style.top = 10 + "px";





// Load all images as constants
const entranceImage = 'assets/Tolstoi/1.korrus/tolstoi-siseou.jpg'
const entranceStreetImage = 'assets/Tolstoi/1.korrus/tolstoi-sissepaas.jpg'
const lobbyImage1 = 'assets/Tolstoi/1.korrus/fuajee1.jpg'
const lobbyImage2 = 'assets/Tolstoi/1.korrus/fuajee2.jpg'
const lobbyImage3 = 'assets/Tolstoi/1.korrus/fuajee3.jpg'
const lobbyImage4 = 'assets/Tolstoi/1.korrus/fuajee4.jpg'
const lobbyImage5 = 'assets/Tolstoi/1.korrus/fuajee5.jpg'
//
const stairsimage = 'assets/Tolstoi/1.korrus/3_1_fuajee trepid üles-Edit-min.jpg'
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
const entrancePano = new PANOLENS.ImagePanorama(entranceImage)
const entranceStreet = new PANOLENS.ImagePanorama(entranceStreetImage)
const lobbyPano1 = new PANOLENS.ImagePanorama(lobbyImage1)
const lobbyPano2 = new PANOLENS.ImagePanorama(lobbyImage2)
const lobbyPano3 = new PANOLENS.ImagePanorama(lobbyImage3)
const lobbyPano4 = new PANOLENS.ImagePanorama(lobbyImage4)
const lobbyPano5 = new PANOLENS.ImagePanorama(lobbyImage5)
//
const stairsPano1 = new PANOLENS.ImagePanorama(stairsimage)
const gallery1 = new PANOLENS.ImagePanorama(galleryImage1)
const gallery2 = new PANOLENS.ImagePanorama(galleryImage2)
const room123Pano1 = new PANOLENS.ImagePanorama(room123Image1)
const room123Pano2 = new PANOLENS.ImagePanorama(room123Image2)
const canteen1 = new PANOLENS.ImagePanorama(canteenImage1)
const canteen2 = new PANOLENS.ImagePanorama(canteenImage2)
const library1 = new PANOLENS.ImagePanorama(libraryImage1)
const library2 = new PANOLENS.ImagePanorama(libraryImage2)
const library3 = new PANOLENS.ImagePanorama(libraryImage3)
const library4 = new PANOLENS.ImagePanorama(libraryImage4)
const library5 = new PANOLENS.ImagePanorama(libraryImage5)
const librarySeminar = new PANOLENS.ImagePanorama(librarySeminarImage)
const hall1 = new PANOLENS.ImagePanorama(hallImage1)
const hall2 = new PANOLENS.ImagePanorama(hallImage2)
const room106 = new PANOLENS.ImagePanorama(room106Image)
const room107 = new PANOLENS.ImagePanorama(room107Image)
const room109 = new PANOLENS.ImagePanorama(room109Image)
const room114refurb = new PANOLENS.ImagePanorama(room114refurbImage)
const room112corridor = new PANOLENS.ImagePanorama(room112corridorImage)
const room112Pano1 = new PANOLENS.ImagePanorama(room112Image1)
const room112Pano2 = new PANOLENS.ImagePanorama(room112Image2)
const room112closet = new PANOLENS.ImagePanorama(room112closetImage)
const room112entrance = new PANOLENS.ImagePanorama(room112entranceImage)
const wetLab = new PANOLENS.ImagePanorama(wetLabImage)
const room114corridor = new PANOLENS.ImagePanorama(room114corridorImage)
const room114corridor2 = new PANOLENS.ImagePanorama(room114corridorImage2)
const room114corridor3 = new PANOLENS.ImagePanorama(room114corridorImage3)
const corridor1 = new PANOLENS.ImagePanorama(corridorImage1)
const corridor2 = new PANOLENS.ImagePanorama(corridorImage2)
const room110 = new PANOLENS.ImagePanorama(room110Image)
const room114 = new PANOLENS.ImagePanorama(room114Image)
const room118 = new PANOLENS.ImagePanorama(room118Image)
const room111Pano1 = new PANOLENS.ImagePanorama(room111Image1)
const room111Pano2 = new PANOLENS.ImagePanorama(room111Image2)
const room117 = new PANOLENS.ImagePanorama(room117Image)

var lookAtPositions = [
  new THREE.Vector3(-4951.39, -90.62, -633.92 ),//0, entrancePano
  new THREE.Vector3(-3747.27, 621.81, -3239.13 ),//1 entranceStreet
  new THREE.Vector3(2802.99, -32.10, 4131.86 ),//2 lobbyPano1
  new THREE.Vector3(-4486.25, -444.16, -2146.18 ),//3 lobbyPano2
  new THREE.Vector3(4796.15, -355.60, -1338.65 ),//4 lobbyPano3
  new THREE.Vector3(-2178.40, 94.75, 4489.82 ),//5 lobbyPano4
  new THREE.Vector3(2698.74, -813.70, -4120.30 ),//6 lobbyPano5
  new THREE.Vector3(-956.27, -403.76, -4886.97 ),//7 stairsPano1
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
entrancePano.addEventListener('enter-fade-start', () => {
  console.log('entrancePano entered')
  viewer.tweenControlCenter( lookAtPositions[0], 6000 );
})
entranceStreet.addEventListener('enter-fade-start', () => {
  console.log('entranceStreet entered')
  viewer.tweenControlCenter( lookAtPositions[1], 0);
})
lobbyPano1.addEventListener('enter-fade-start', () => {
  console.log('lobbyPano1 entered')
  viewer.tweenControlCenter( lookAtPositions[2], 0 );
})
lobbyPano2.addEventListener('enter-fade-start', () => {
  console.log('lobbyPano2 entered')
  viewer.tweenControlCenter( lookAtPositions[3], 0 );
})
lobbyPano3.addEventListener('enter-fade-start', () => {
  console.log('lobbyPano3 entered')
  viewer.tweenControlCenter( lookAtPositions[4], 0 );
})
lobbyPano4.addEventListener('enter-fade-start', () => {
  console.log('lobbyPano4 entered')
  viewer.tweenControlCenter( lookAtPositions[5], 0 );
})
lobbyPano5.addEventListener('enter-fade-start', () => {
  console.log('lobbyPano5 entered')
  viewer.tweenControlCenter( lookAtPositions[6], 0 );
})
//
stairsPano1.addEventListener('enter-fade-start', () => {
  console.log('stairsPano1 entered')
  viewer.tweenControlCenter( lookAtPositions[7], 0 );
})
gallery1.addEventListener('enter-fade-start', () => {
  console.log('gallery1 entered')
  viewer.tweenControlCenter( lookAtPositions[8], 0 );
})
gallery2.addEventListener('enter-fade-start', () => {
  console.log('gallery2 entered')
  viewer.tweenControlCenter( lookAtPositions[9], 0 );
})
room123Pano1.addEventListener('enter-fade-start', () => {
  console.log('room123Pano1 entered')
  viewer.tweenControlCenter( lookAtPositions[10], 0 );
})
room123Pano2.addEventListener('enter-fade-start', () => {
  console.log('room123Pano2 entered')
  viewer.tweenControlCenter( lookAtPositions[11], 0 );
})
canteen1.addEventListener('enter-fade-start', () => {
  console.log('canteen1 entered')
  viewer.tweenControlCenter( lookAtPositions[12], 0 );
})
canteen2.addEventListener('enter-fade-start', () => {
  console.log('canteen2 entered')
  viewer.tweenControlCenter( lookAtPositions[13], 0 );
})
library1.addEventListener('enter-fade-start', () => {
  console.log('library1 entered')
  viewer.tweenControlCenter( lookAtPositions[14], 0 );
})
library2.addEventListener('enter-fade-start', () => {
  console.log('library2 entered')
  viewer.tweenControlCenter( lookAtPositions[15], 0 );
})
library3.addEventListener('enter-fade-start', () => {
  console.log('library3 entered')
  viewer.tweenControlCenter( lookAtPositions[16], 0 );
})
library4.addEventListener('enter-fade-start', () => {
  console.log('library4 entered')
  viewer.tweenControlCenter( lookAtPositions[17], 0 );
})
library5.addEventListener('enter-fade-start', () => {
  console.log('library5 entered')
  viewer.tweenControlCenter( lookAtPositions[18], 0 );
})
librarySeminar.addEventListener('enter-fade-start', () => {
  console.log('librarySeminar entered')
  viewer.tweenControlCenter( lookAtPositions[19], 0 );
})
hall1.addEventListener('enter-fade-start', () => {
  console.log('hall1 entered')
  viewer.tweenControlCenter( lookAtPositions[20], 0 );
})
hall2.addEventListener('enter-fade-start', () => {
  console.log('hall2 entered')
  viewer.tweenControlCenter( lookAtPositions[21], 0 );
})
room106.addEventListener('enter-fade-start', () => {
  console.log('room106 entered')
  viewer.tweenControlCenter( lookAtPositions[22], 0 );
})
room107.addEventListener('enter-fade-start', () => {
  console.log('room107 entered')
  viewer.tweenControlCenter( lookAtPositions[23], 0 );
})
room109.addEventListener('enter-fade-start', () => {
  console.log('room109 entered')
  viewer.tweenControlCenter( lookAtPositions[24], 0 );
})
room114refurb.addEventListener('enter-fade-start', () => {
  console.log('room114refurb entered')
  viewer.tweenControlCenter( lookAtPositions[25], 0 );
})
room112corridor.addEventListener('enter-fade-start', () => {
  console.log('room112corridor entered')
  viewer.tweenControlCenter( lookAtPositions[26], 0 );
})
room112Pano1.addEventListener('enter-fade-start', () => {
  console.log('room112Pano1 entered')
  viewer.tweenControlCenter( lookAtPositions[27], 0 );
})
room112Pano2.addEventListener('enter-fade-start', () => {
  console.log('room112Pano2 entered')
  viewer.tweenControlCenter( lookAtPositions[28], 0 );
})
room112closet.addEventListener('enter-fade-start', () => {
  console.log('room112closet entered')
  viewer.tweenControlCenter( lookAtPositions[29], 0 );
})
room112entrance.addEventListener('enter-fade-start', () => {
  console.log('room112entrance entered')
  viewer.tweenControlCenter( lookAtPositions[30], 0 );
})
wetLab.addEventListener('enter-fade-start', () => {
  console.log('wetLab entered')
  viewer.tweenControlCenter( lookAtPositions[31], 0 );
})
room114corridor.addEventListener('enter-fade-start', () => {
  console.log('room114corridor entered')
  viewer.tweenControlCenter( lookAtPositions[32], 0 );
})
room114corridor2.addEventListener('enter-fade-start', () => {
  console.log('room114corridor2 entered')
  viewer.tweenControlCenter( lookAtPositions[33], 0 );
})
room114corridor3.addEventListener('enter-fade-start', () => {
  console.log('room114corridor3 entered')
  viewer.tweenControlCenter( lookAtPositions[34], 0 );
})
corridor1.addEventListener('enter-fade-start', () => {
  console.log('corridor1 entered')
  viewer.tweenControlCenter( lookAtPositions[35], 0 );
})
corridor2.addEventListener('enter-fade-start', () => {
  console.log('corridor2 entered')
  viewer.tweenControlCenter( lookAtPositions[36], 0 );
})
room110.addEventListener('enter-fade-start', () => {
  console.log('room110 entered')
  viewer.tweenControlCenter( lookAtPositions[37], 0 );
})
room114.addEventListener('enter-fade-start', () => {
  console.log('room114 entered')
  viewer.tweenControlCenter( lookAtPositions[38], 0 );
})
room118.addEventListener('enter-fade-start', () => {
  console.log('room118 entered')
  viewer.tweenControlCenter( lookAtPositions[39], 0 );
})
room111Pano1.addEventListener('enter-fade-start', () => {
  console.log('room111Pano1 entered')
  viewer.tweenControlCenter( lookAtPositions[40], 0 );
})
room111Pano2.addEventListener('enter-fade-start', () => {
  console.log('room111Pano2 entered')
  viewer.tweenControlCenter( lookAtPositions[41], 0 );
})
room117.addEventListener('enter-fade-start', () => {
  console.log('room117 entered')
  viewer.tweenControlCenter( lookAtPositions[42], 0 );
})



// add all panoramas to viewport
// first added panorama is tour start point
const viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
});


viewer.add(entrancePano);
viewer.add(room117);
viewer.add(room118);
viewer.add(hall1);
viewer.add(hall2);
viewer.add(lobbyPano1);
viewer.add(lobbyPano2);
viewer.add(lobbyPano3);
viewer.add(lobbyPano4);
viewer.add(lobbyPano5);
//
viewer.add(stairsPano1);
viewer.add(gallery1);
viewer.add(gallery2);
viewer.add(room123Pano1);
viewer.add(room123Pano2);
viewer.add(canteen1);
viewer.add(canteen2);
viewer.add(library1);
viewer.add(library2);
viewer.add(library3);
viewer.add(library4);
viewer.add(library5);
viewer.add(librarySeminar);
viewer.add(room106);
viewer.add(room107);
viewer.add(room109);
viewer.add(room112corridor);
viewer.add(room112Pano2);
viewer.add(room112closet);
viewer.add(room112Pano1);
viewer.add(wetLab);
viewer.add(room114corridor);
viewer.add(room114corridor2);
viewer.add(room114corridor3);
viewer.add(room112entrance);
viewer.add(room114refurb);
viewer.add(corridor1);
viewer.add(corridor2);
viewer.add(room110);
viewer.add(room114);
viewer.add(room111Pano1);
viewer.add(room111Pano2);
viewer.add(entranceStreet);



// link panoramas with points
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
lobbyPano4.link(stairsPano1, new THREE.Vector3(-3267.61, -1606.55, 3416.14)); //

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



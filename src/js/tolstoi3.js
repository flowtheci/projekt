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

//add console
stairsPano.addEventListener('enter-fade-start', () => {
    console.log('stairsPano entered')
})

hallwayPano.addEventListener('enter-fade-start', () => {
    console.log('hallwayPano entered')
})
workroomPano.addEventListener('enter-fade-start', () => {
    console.log('workroomPano entered')
})
workroom2Pano.addEventListener('enter-fade-start', () => {
    console.log('workroom2Pano entered')
})
workroom3Pano.addEventListener('enter-fade-start', () => {
    console.log('workroom3Pano entered')
})
workroom4Pano.addEventListener('enter-fade-start', () => {
    console.log('workroom4Pano entered')
})
hallway2Pano.addEventListener('enter-fade-start', () => {
    console.log('hallway2Pano entered')
})
hallway3Pano.addEventListener('enter-fade-start', () => {
    console.log('hallway3Pano entered')
})
hallway4Pano.addEventListener('enter-fade-start', () => {
    console.log('hallway4Pano entered')
})
roomPano.addEventListener('enter-fade-start', () => {
    console.log('roomPano entered')
})
hallway5Pano.addEventListener('enter-fade-start', () => {
    console.log('hallway5Pano entered')
})
workroom5Pano.addEventListener('enter-fade-start', () => {
    console.log('workroom5Pano entered')
})
workroom6Pano.addEventListener('enter-fade-start', () => {
    console.log('workroom6Pano entered')
})
hallway6Pano.addEventListener('enter-fade-start', () => {
    console.log('hallway6Pano entered')
})


//järjekord


const viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
});

viewer.add(stairsPano);
viewer.add(hallwayPano);
viewer.add(hallway4Pano);
viewer.add(hallway6Pano);
viewer.add(workroomPano);
viewer.add(hallway3Pano);
viewer.add(workroom2Pano);
viewer.add(workroom3Pano);
viewer.add(workroom4Pano);
viewer.add(hallway2Pano);
viewer.add(roomPano);
viewer.add(hallway5Pano);
viewer.add(workroom5Pano);
viewer.add(workroom6Pano);

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
hallway2Pano.link(hallway3Pano, new THREE.Vector3(-4579.29, -1348.64, -1471.43));
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


























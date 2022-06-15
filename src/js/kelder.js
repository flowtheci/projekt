const doorImage = 'assets/Tolstoi/kelder/3_0_koridor klassi 001-Edit-Edit.jpg'
const roomImage = 'assets/Tolstoi/kelder/3_0_001-Edit-Edit.jpg'

const doorPano = new PANOLENS.ImagePanorama(doorImage)
const roomPano = new PANOLENS.ImagePanorama(roomImage)



//add console
doorPano.addEventListener('enter-fade-start', () => {
    console.log('doorPano entered')
})

roomPano.addEventListener('enter-fade-start', () => {
    console.log('roomPano entered')
})




const viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
});

viewer.add(doorPano);
viewer.add(roomPano);

// link panoramas with points
//ukse juures
doorPano.link(roomPano, new THREE.Vector3(4236.87, -2575.64, 596.15));

// toast välja
roomPano.link(doorPano, new THREE.Vector3(-2598.31, -233.87, 4255.34));







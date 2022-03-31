
// panorama image url
const image = 'assets/demoimage.jpg'

// create panorama from image
const pano = new PANOLENS.ImagePanorama(image);

// create infospot with custom coordinates and add to panorama
const infospot = new PANOLENS.Infospot();
infospot.position.set(3914.84, 755.03, 3007.18);
infospot.addHoverText('Sild');
pano.add(infospot);


function createInfoSpot(panorama, xCoord, yCoord, zCoord, elementId) {
// create infospot with custom element
const customInfo = new PANOLENS.Infospot();
customInfo.position.set(xCoord, yCoord, zCoord);
customInfo.addHoverElement(document.getElementById(elementId), 200);
panorama.add(customInfo);
}

createInfoSpot(pano, -2151.91, 911.23, -4409.72, 'desc-container');

// add final panorama to viewport
const viewer = new PANOLENS.Viewer({
    output: 'console',
});
viewer.add(pano);




function createInfoSpot(panorama, xCoord, yCoord, zCoord, elementId) {
// create infospot with custom element
const customInfo = new PANOLENS.Infospot();
customInfo.position.set(xCoord, yCoord, zCoord);
customInfo.addHoverElement(document.getElementById(elementId), 200);
}


createInfoSpot(pano, 4892.02, 117.66, -1001.94, 'desc-container');

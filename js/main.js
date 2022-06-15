


function createInfoSpot(panorama, xCoord, yCoord, zCoord, elementId) {
// create infospot with custom element
const customInfo = new PANOLENS.Infospot();
customInfo.position.set(xCoord, yCoord, zCoord);
customInfo.addHoverElement(document.getElementById(elementId), 200);
}

createInfoSpot(pano, -2151.91, 911.23, -4409.72, 'desc-container');

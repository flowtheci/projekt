const entranceImage = 'assets/Tolstoi/2.korrus/temp.jpg'
const entrancePano = new PANOLENS.ImagePanorama(entranceImage)
const viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
});

infospot2 = new PANOLENS.Infospot();
infospot2.position.set( -5000.00, -1825.25, 197.56 );
infospot2.addHoverElement(document.getElementById('desc-container'), 200);
entrancePano.add(infospot2);
viewer.add(entrancePano);
const image = 'assets/temp/tempimage.jpg';
const pano = new PANOLENS.ImagePanorama(image);
const viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
});

viewer.add(pano);
const entranceImage = 'assets/Tolstoi/2.korrus/temp.jpg'
const entrancePano = new PANOLENS.ImagePanorama(entranceImage)
const viewer = new PANOLENS.Viewer({
    output: 'console',
    momentum: false,
});

function getURLParameter(param)
{
    var pageURL  = window.location.search.substring(1);
    var urlVars = pageURL.split('&');
    for (var i = 0; i < urlVars.length; i++) 
    {
        var paramName = urlVars[i].split('=');
        if (paramName[0] == param) 
        {
            return paramName[1];
        }
    }
}

infospot2 = new PANOLENS.Infospot();
infospot2.position.set( -5000.00, -1825.25, 197.56 );
if (getURLParameter("lang") == "eng") {
    infospot2.addHoverElement(document.getElementById('desc-container-eng'), 200);
} else {
    infospot2.addHoverElement(document.getElementById('desc-container'), 200);
}

entrancePano.add(infospot2);
viewer.add(entrancePano);


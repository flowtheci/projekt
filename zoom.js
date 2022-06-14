
//sisse suumimine
document.querySelector( '#zoom-in' ).addEventListener( 'click', function(){
	var currentZoom = viewer.camera.fov;
		var newZoom = currentZoom - 10;
		if(newZoom < 30) newZoom = 30;
		viewer.setCameraFov(newZoom);
	});
//valja suumimine
document.querySelector( '#zoom-out' ).addEventListener( 'click', function(){
	var currentZoom = viewer.camera.fov;
	var newZoom = currentZoom + 10;
	if(newZoom > 110) newZoom = 110;
	viewer.setCameraFov(newZoom);
	});
// vasakule vaat
document.querySelector( '#left' ).addEventListener( 'click', function(){
	RotateLeftRight(1);
	});
// paremale vaat
document.querySelector( '#right' ).addEventListener( 'click', function(){
	RotateLeftRight(0);
	});
// ulesse vaat
document.querySelector( '#up' ).addEventListener( 'click', function(){
	rotateUpDown(1);
	});
// alla vaat
document.querySelector( '#down' ).addEventListener( 'click', function(){
	rotateUpDown(0);
	});	

//vaatamise kood    
var ROTATION_POSITION = 0.05;
var ROTATION_SPEED = 50;

function RotateLeftRight(param /* 0 - right, 1 - left */) {
    let go = ROTATION_POSITION;
    let back = - ROTATION_POSITION;
    let pos  = param < 1 ? go : back;
    let easing = {val : pos};
    let tween = new TWEEN.Tween(easing) 
        .to({val: 0}, ROTATION_SPEED) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function() { 
            viewer.OrbitControls.rotateLeft(easing.val)
    }).start();
}

function rotateUpDown(param /* 0 - down, 1- up */) {
    let go = ROTATION_POSITION;
    let back = -ROTATION_POSITION;
    let pos  = param < 1 ? go : back;
    let easing = {val : pos};
    let tween = new TWEEN.Tween(easing) 
        .to({val: 0}, ROTATION_SPEED) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function() { 
            viewer.OrbitControls.rotateUp(easing.val)
    }).start();
}

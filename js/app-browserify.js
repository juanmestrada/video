


var totalImages = 36;
var images = new Array();
for(var i = 1; i < totalImages + 1; i++) {
	var filename = 'IronMan';
	if(i < 10) filename += '00';
	else if(i < 100) filename += '0';
	filename += i + '.jpg';
	var img = new Image;
	img.src = 'images/' + filename;
	images.push(img);
}

var canv = document.getElementById('background');
var context = canv.getContext('2d');
$(canv)
	.width($(window).width())
	.height($(window).height());

var currentLocation = 0;



window.addEventListener('mousewheel', function(e) {
	e.preventDefault();
	
	var delta = Math.max(-1, Math.min(1, e.wheelDelta));
	if(delta == -1) currentLocation += 1;
	if(delta == 1) currentLocation -= 1;
	if(currentLocation < 0) currentLocation = 0;
	if(currentLocation > images.length) currentLocation = images.length;
	setImage(currentLocation);
});

function setImage(newLocation) {
	context.drawImage(images[newLocation], 0, 0, 1280, 720);
}
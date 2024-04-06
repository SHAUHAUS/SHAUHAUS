function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img1, img2, img3, img4, img5, img6, img7, img8;

function preload(){
	img1 = loadImage('https://i.imgur.com/WTVTWjY.png');
	img2 = loadImage('https://i.imgur.com/vPwuEIB.png');
	img3 = loadImage('https://i.imgur.com/cpOxBqO.png');
	img4 = loadImage('https://i.imgur.com/RJ1gD8E.png');
	img5 = loadImage('https://i.imgur.com/TpuLoP4.png');
	img6 = loadImage('https://i.imgur.com/ua3pCMD.png');
	img7 = loadImage('https://i.imgur.com/qguK7Ng.png');
	img8 = loadImage('https://i.imgur.com/AcppNwW.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(245, 209, 188);
	
	imageMode(CENTER);
	textAlign(CENTER, CENTER);
	fill(255);
	textSize(25);
	
	if(width<1080){
	img8.resize(width, 0);
	}
}

function draw() {
	background(245, 209, 188, 75);
	
	text('scroll to view projects!', width - 200, height-50);
	
	translate(width/2, height/2);
	
	push();
	rotate(radians(frameCount*.5));
	image(img1, 0, 0);
	pop();
	push();
	rotate(radians(-frameCount*.5));
	image(img2, 0, 0);
	pop();
	push();
	rotate(radians(frameCount*.5));
	image(img3, 0, 0);
	pop();
	push();
	rotate(radians(-frameCount*.5));
	image(img4, 0, 0);
	pop();
	push();
	rotate(radians(frameCount*.5));
	image(img5, 0, 0);
	pop();
	push();
	rotate(radians(-frameCount*.5));
	image(img6, 0, 0);
	pop();
	push();
	rotate(radians(frameCount*.5));
	image(img7, 0, 0);
	pop();
	push();
	rotate(radians(-frameCount*.25));
	image(img8, 0, 0);
	pop();
	
	
	
}
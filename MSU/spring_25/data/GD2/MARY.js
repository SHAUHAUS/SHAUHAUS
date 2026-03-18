function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

// let font = googleFont('Cabin Sketch');
let img, img1, img2, img3;

function preload(){
	img = loadImage('https://i.imgur.com/p9GXI1s.png');
	img1 = loadImage('https://i.imgur.com/WDAHGiS.png');
	img2 = loadImage('https://i.imgur.com/336Syje.png');
	img3 = loadImage('https://i.imgur.com/qbHA9w1.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	rectMode(CENTER);
	imageMode(CENTER);
	textAlign(CENTER);
	textSize(20);
	fill(255);
	stroke(0);
	
	img.resize(0, height);
	img1.resize(width, 0);
	img2.resize(width, 0);
	img3.resize(width, 0);
	
}

function draw() {
	background(255, 25);
	
	let r = frameCount*.002;
	
	push();
	translate(width/2, height/2);
	rotate(r);
	image(img1, 0, 0);
	pop();
	
	push();
	translate(width/2, height/2);
	rotate(-r);
	image(img2, 0, 0);
	pop();
	
	push();
	translate(width/2, height/2);
	rotate(r/2);
	image(img3, 0, 0);
	pop();
	
	image(img, width/2, height/2);
	
	if(width < 1080){
		img.resize(width, 0);
		img1.resize(0, height);
		img2.resize(0, height);
		img3.resize(0, height);
	}
	
	text('scroll to view!', width/2, height-25);
	
}

// function googleFont(fontName) {
// 	let link = document.createElement("link")
// 	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
// 	link.rel = "stylesheet"
// 	document.head.appendChild(link)
// 	return fontName
// }
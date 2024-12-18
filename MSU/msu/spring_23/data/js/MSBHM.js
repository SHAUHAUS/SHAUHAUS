function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img, img1, img2;
// let font;

let font = googleFont('Volkhov');


function preload(){
	img = loadImage("https://i.imgur.com/w4VGnB5.png");
	// img1 = loadImage("https://i.imgur.com/7LaSjsL.png");
	img2 = loadImage("https://i.imgur.com/w4VGnB5.png");
	
	// font = loadFont("../data/data_msu/S_22/GD2_P1/Redaction20-Bold.otf");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	imageMode(CENTER);
	// blendMode(DIFFERENCE);
	
	textFont(font);
	textAlign(CENTER, CENTER);
	textSize(width/4);

	fill(255);

	
}

function draw() {
	background(255, 0, 255);
	angleMode(DEGREES);

	let x = width/3.1;
	let x2 = width/1.445;

	let rotManip = (frameCount*.3)+mouseX/5;

	img.resize(width, width);
	img2.resize(width/2, width/2);
	// img2.resize(width, height);
	
	push();
	translate(width/2, height/2);
	rotate(-rotManip);
	image(img, 0, 0);
	pop();

	text("MS", x, height/2.5);
	text("BH", x2, height/1.5);
	
	push();
	blendMode(ADD);
	// image(img1, width/2, height/2);
	push();
	translate(width/2, height/2);
	rotate(rotManip);
	image(img2, 0, 0);
	pop();
	pop();

	if(windowWidth < 1000){
		textSize(width/2);
	}


	push();
	textSize(12);
	text("scroll to view projects / swipe to read info / scroll overflow text", width/2, height-25);
	pop();

	if(frameCount > 2024){
		frameCount = 0;
	}

}


function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}
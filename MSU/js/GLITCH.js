/* CUSTOM FUNCTIONS FOR P5LIVE */
// keep fullscreen if window resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
	return oVal += (iVal - oVal) * eVal;
}

let img;

/////////////////////////////////////////////////////////////////////////////////////
function preload() {
	img = loadImage('https://i.imgur.com/q8Z8LIo.png');
}

/////////////////////////////////////////////////////////////////////////////////////
function setup() {
	background(0);
	createCanvas(windowWidth, windowHeight);
	textAlign(LEFT);
	textSize(20);
	fill(255);
	imageMode(CENTER);
	rectMode(CENTER);
	pixelDensity(1);
	controls();

	imag = createImage(img.width, img.height);

	img.resize(width, height);
	
	//print(fips[5]);
}

/////////////////////////////////////////////////////////////////////////////////////
function controls() {
  
    rslider = createSlider(0, dl, 0);
	rslider.position(width / 5.4, height / 1.15);
	rslider.style('width:62.5%');
	//fslider.style()
}

/////////////////////////////////////////////////////////////////////////////////////
function draw() {
	background(0);
	
	rs = rslider.value();
	
	imag = createImage(img.width, img.height);


	img.loadPixels();
	imag.loadPixels();

	for(let x = 0; x < img.width * 4; x++) {
		for(let y = 0; y < img.height; y++) {
			for(let i = 0; i < img.width / img.height; i++) {
				let index = (x + y * width) * 4;
				//let g = num*x;
				
				imag.pixels[index + 0;
				imag.pixels[index + 1;
				imag.pixels[index + 2;
				imag.pixels[index + 3;
			}
		}
	}

	//image(flags[0], width/2, height/2);

	img.updatePixels();
	imag.updatePixels();
	
	image(imag, width / 2, height / 2, img.width * 1.5, img.height * 1.5);
	

	//clear();
}
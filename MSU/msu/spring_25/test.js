let img, img1, img2;

function preload(){
	img = loadImage('https://i.imgur.com/PgSTj5a.png');
	img1 = loadImage('https://i.imgur.com/MrhuVgu.png');
	img2 = loadImage('https://i.imgur.com/6tLGLzY.png');
}

function setup() {
	createCanvas(895, 1280, document.getElementById('canvas-ar')) // poster aspect
	// createCanvas(895, 1280);
	pixelDensity(1) // prevent 200+ PPI lag
	// colorMode(HSL)
	
	img.resize(width, height);
	img1.resize(width, height);
	img2.resize(width, height);
}

function draw(){
	
	let m = sin(frameCount*.05)*50;
	
	push();
	image(img, m, 0);
	pop();
	
	push();
	image(img1, -m, 0);
	pop();
	
	push();
	image(img2, 0, m);
	pop();
	

}


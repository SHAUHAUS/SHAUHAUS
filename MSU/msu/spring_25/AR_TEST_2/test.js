let img, img1, img2;

let arLayers = []

function preload(){
	img = loadImage('https://i.imgur.com/PknspVs.png');
	img1 = loadImage('https://i.imgur.com/pzztxwY.png');
	img2 = loadImage('https://i.imgur.com/mEtpT3k.png');
}

function setup() {
	noCanvas();
	arLayers[0] = createCanvas(895, 1280, document.getElementById('canvas-ar')) // poster aspect
	arLayers[1] = createCanvas(895, 1280, document.getElementById('canvas-ar2')) // poster aspect
	arLayers[2] = createCanvas(895, 1280, document.getElementById('canvas-ar3')) // poster aspect
	// createCanvas(895, 1280);
	pixelDensity(1) // prevent 200+ PPI lag
	// colorMode(HSL)
	
	img.resize(width, height);
	img1.resize(width, height);
	img2.resize(width, height);
}

function draw(){

	arLayers[0].image(img, 0, 0);
	arLayers[0].image(img2, 0, 0);
	arLayers[0].image(img3, 0, 0);
	
	

}


let img, img1, img2;

let arLayers = []

function preload(){
	img = loadImage('https://i.imgur.com/PknspVs.png');
	img1 = loadImage('https://i.imgur.com/pzztxwY.png');
	img2 = loadImage('https://i.imgur.com/mEtpT3k.png');
}

function setup() {
	// noCanvas();
	createCanvas(895, 1280, document.getElementById('canvas-ar')) // poster aspect
	pixelDensity(1) // prevent 200+ PPI lag

	arLayers[0] = createGraphics(895, 1280, document.getElementById('canvas-ar')) // poster aspect
	arLayers[1] = createGraphics(895, 1280, document.getElementById('canvas-ar2')) // poster aspect
	arLayers[2] = createGraphics(895, 1280, document.getElementById('canvas-ar3')) // poster aspect
	// createCanvas(895, 1280);
	pixelDensity(1) // prevent 200+ PPI lag
	// colorMode(HSL)
	
	img.resize(895, 1280);
	img1.resize(895, 1280);
	img2.resize(895, 1280);
}

function draw(){

	arLayers[0].image(img, 0, 0);
	arLayers[1].image(img2, 0, 0);
	arLayers[2].image(img3, 0, 0);
	
	

}


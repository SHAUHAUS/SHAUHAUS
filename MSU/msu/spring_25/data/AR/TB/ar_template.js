let img, img1, img2;
// add image variables as needed perlayer

let arLayers = []

function preload(){
	img = loadImage('bg_layer.png');
	img1 = loadImage('mid_layer.png');
	img2 = loadImage('top_layer.png');
	// add iamge loads as needed per layer
}

function setup() {
	noCanvas();
	pixelDensity(1) // prevent 200+ PPI lag
	// colorMode(HSL)
	
//	img.resize(895, 1350);
//	img1.resize(895, 1350);
//	img2.resize(895, 1350);
	//add image resizes per layer as needed
}

function draw(){

	arLayers[0] = createGraphics(895, 1350, document.getElementById('canvas-ar')) // poster aspect
	arLayers[1] = createGraphics(895, 1350, document.getElementById('canvas-ar2')) // poster aspect
	arLayers[2] = createGraphics(895, 1350, document.getElementById('canvas-ar3')) // poster aspect

	arLayers[0].image(img2, 0, 0);
	arLayers[1].image(img1, 0, 0);
	arLayers[2].image(img, 0, 0);
	//add layers as needed, make sure to match in html
	
	

}


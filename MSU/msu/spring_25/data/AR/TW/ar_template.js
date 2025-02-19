let img, img1, img2, img3, img4;
// add image variables as needed perlayer

let arLayers = []

function preload(){
	img = loadImage('BACK.png');
	img1 = loadImage('2.png');
	img2 = loadImage('3.png');
    img3 = loadImage('4.png');
    img4 = loadImage('5.png');
	// add iamge loads as needed per layer
}

function setup() {
	noCanvas();
	pixelDensity(1) // prevent 200+ PPI lag
	// colorMode(HSL)
	
//	img.resize(895, 1193);
//	img1.resize(895, 1193);
//	img2.resize(895, 1193);
	//add image resizes per layer as needed
}

function draw(){

	arLayers[0] = createGraphics(895, 1193, document.getElementById('canvas-ar')) // poster aspect
	arLayers[1] = createGraphics(895, 1193, document.getElementById('canvas-ar2')) // poster aspect
	arLayers[2] = createGraphics(895, 1193, document.getElementById('canvas-ar3')) // poster aspect
    arLayers[3] = createGraphics(895, 1193, document.getElementById('canvas-ar4')) // poster aspect
    arLayers[4] = createGraphics(895, 1193, document.getElementById('canvas-ar5')) // poster aspect

	arLayers[0].image(img, 0, 0);
    arLayers[1].image(img1, 0, 0);
    arLayers[2].image(img2, 0, 0);
	arLayers[3].image(img3, 0, 0);
	arLayers[4].image(img4, 0, 0);
	//add layers as needed, make sure to match in html
	
	

}


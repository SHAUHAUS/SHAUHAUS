function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let art = 49;
let course = 90;
let term = 24;
let data;
let abstract = 'ABSTRACT';
let methods = 'METHODS';
let design = [];
let fall24 = [];
let index = 0;

let font = googleFont('Platypi');

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(font);
	background(0);
	textAlign(CENTER, CENTER);
	noFill();
	stroke(255);
	frameRate(24);
}

function draw() {
	
	let m = map(mouseX + mouseY, 0, width + height, 0, 255);
	background(m, 24);
	
	push();
	for(let i = 0; i < 4; i++){
		push();
		blendMode(DIFFERENCE);
		fill(i);
		stroke(255);
		rect(0, height/4 * i, width, height/4);
		pop();
	}
	
	let m2 = map(mouseX, 0, width, 255, 0);
	stroke(m2);
	
	design[0] = 'FOR';
	design[1] = 'Fall_2024';
	design[2] = 'Tu / Th';
	fall24[0] = 'DESIGN';
	fall24[1] = 'Stafford 200';
	fall24[2] = '3:00 - 5:50';
	
	if(width > 1080){
		textSize(height/4);
	}else{
		textSize(width/8);
	}
	fill(m);
	
	textLeading(height/4);
	text(abstract + '\n' + methods + '\n' + design[index] + '\n' + fall24[index], width/2, height/2);
	pop();
	
	push();
	// noFill();
	let cm = map(mouseX, 0, width, 240, 24);
	fill(cm);
	stroke(24);
	rectMode(CENTER);
	blendMode(DIFFERENCE);
	
	let w = width/2;
	let h = height/4;
	
	let manip = (sin(frameCount*.024)*49.90)*10;
	
	let a1 = map(mouseX, 0, width, 0, width/2);
	let a2 = map(mouseX, 0, width, width/2, width);
	let a3 = map(mouseX, 0, width, width, 0);
	let a4 = map(mouseX, 0, width, 0, width);
	
	// for(let a = 0; a < art; a++){

	rect(a1+manip, h/2, 49, h);
	rect(a2-manip, h/2, 49, h);
	rect(a1-manip, height/2, 49, h*2);
	rect(a2+manip, height/2, 49, h*2);
	rect(a1+manip, height-h/2, 49, h);
	rect(a2-manip, height-h/2, 49, h);
	rect(a3+manip, height-h/2, 49, h);
	rect(a4-manip, height-h/2, 49, h);

	// }

	pop();

	if(frameCount > 2024){
		frameCount = 0;
	}

	// print(frameCount);
	
}

function mousePressed(){
	
	index = index + 1;
	
	if(index == design.length){
		index = 0;
	}
	
	if(index == fall24.length){
		index = 0;
	}
	
}

function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}
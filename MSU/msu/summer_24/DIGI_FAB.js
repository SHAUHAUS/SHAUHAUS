function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let digi, fab, l;
let div;

let font = googleFont('Roboto');

function preload(){
	digi = loadImage('https://i.imgur.com/kNpzAa6.png');
	fab = loadImage('https://i.imgur.com/IdSwOB2.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	imageMode(CENTER);
	textFont(font);
	fill(46, 49, 146);
	textAlign(LEFT, TOP);
	
	div = createDiv('This course will provide introductory instruction in digital fabrication as it relates to object design and sculpture. We will cover 3D Modeling in Fusion 360 and Blender, laser cutting, 3D printing, and fabricating metal forms from CNC plasma cut components. Lectures will cover contemporary art and design utilizing digital fabrication. Assignments will prioritize creative/conceptual intent alongside technical development. Student choice-based learning will anticipate audience as either consumer or viewer to engage in graphic design, product design, and contemporary art making. For GD majors, this course can count as either a concentration elective or sculpture survey. When registering for this course, register for Art 4753 Scupl Mat & Processes.');
	
}

function draw() {
	background(242);
	
	if(width > 1080){
	div.position(25, height/2);
	div.style('width', '40%');
	}else{
		if(width < 1080){
			div.position(25, height/3);
			div.style('width', '70%');
		}
	}
	div.style('color', '#2e3192');
	div.style('background-color', '#f2f2f2');
	div.style('padding', '5px');
	div.style('font-size', '15pt');
	
	textSize(width/7);
	
	let m = map(mouseX + mouseY, 0, width + height, 0, 100);
	
	l = width/8;
	
	push();
	stroke(255);
	strokeWeight(2);
	textLeading(l);
	text('DIGITAL' + '\n' + 'FABRICATION', 0, 0);
	pop();
	
	push();
	textSize(width/20);
	textAlign(RIGHT, BOTTOM);
	text('Second Summer Session' + '\n' + 'July 8th-August 6th, 2024' + '\n' + 'Professors Caroline Hatfield & Aubrey Pohl', width, height);
	pop();
	
	push();
	let mx = sin(frameCount*.02)*24;
	blendMode(DIFFERENCE);
	image(digi, width/2+m+mx, height/2-m-mx);
	image(fab, width/2-m-mx, height/2+m+mx);
	pop();
	
	
}

function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}
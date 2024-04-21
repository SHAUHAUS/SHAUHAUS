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
	background(242);
	imageMode(CENTER);
	textFont(font);
	fill(46, 49, 146);
	textAlign(LEFT, TOP);
	pixelDensity(1);
	frameRate(24);
	
	div = createDiv('<strong>2nd Summer Session / July 8th-August 6th, 2024'+ '<br>' + 'Professors Caroline Hatfield & Aubrey Pohl</strong>' + '<br><br>' + 'This course will provide introductory instruction in digital fabrication as it relates to object design and sculpture. We will cover 3D Modeling in Fusion 360 and Blender, laser cutting, 3D printing, and fabricating metal forms from CNC plasma cut components. Lectures will cover contemporary art and design utilizing digital fabrication. Assignments will prioritize creative/conceptual intent alongside technical development. Student choice-based learning will anticipate audience as either consumer or viewer to engage in graphic design, product design, and contemporary art making. For GD majors, this course can count as either a concentration elective or sculpture survey. When registering for this course, register for Art 4753 Scupl Mat & Processes.');
	
}

function draw() {
	let mm = map(frameCount, 0, 2024, .1, 1);
	pixelDensity(mm);

	background(242);
	
	if(width > 1080){
	div.style('width', '40%');
	}else{
		if(width < 1080){
			// div.position(25, height/3.5);
			div.style('width', '85%');
		}
	}
	div.position(25, width/3.5);
	div.style('color', '#2e3192');
	div.style('background-color', '#f2f2f2');
	div.style('padding', '10px');
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
	if(width >= 1080){
	textSize(width/20);
	}else{
		if(width <= 1080){
			textSize(width/12);
		}
	}
	textAlign(RIGHT, BOTTOM);
	// text('Interest Meeting: 05.03.24, Howell Wood Shop' + '\n' + 'Second Summer Session' + '\n' + 'July 8th-August 6th, 2024' + '\n' + 'Professors Caroline Hatfield & Aubrey Pohl', width, height);
	text('Interest Meeting:' + '\n' + '05.03.24 @ 12:00' + '\n' + 'Howell Wood Shop', width, height);
	pop();
	
	push();
	let mx = sin(frameCount*.02)*24;
	blendMode(DIFFERENCE);
	image(digi, width/2+m+mx, height/2-m-mx);
	image(fab, width/2-m-mx, height/2+m+mx);
	pop();


	if(frameCount > 2024){
		frameCount = 1;
	}

	print(frameCount);
	
	
}

function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}
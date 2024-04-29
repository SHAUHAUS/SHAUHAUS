function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let digi, fab, l;

let font = googleFont('Roboto');

let info = [];

let index = 0;

function preload(){
	digi = loadImage('https://i.imgur.com/8MS4oql.png');
	fab = loadImage('https://i.imgur.com/W3ESapj.png');
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
		
}

function draw() {
	let mm = map(frameCount, 0, 2024, .1, 3);
	pixelDensity(mm);

	background(242);
	
	textSize(width/7);
	
	let m = map(mouseX + mouseY, 0, width + height, 0, 100);
	
	l = width/8;
	
	push();
	stroke(255);
	strokeWeight(2);
	textLeading(l);
	text('DIGITAL' + '\n' + 'FABRICATION', 0, 5);
	pop();

	info[0] = 'Interest Meeting:' + '\n' + 'May 3rd, 12:00pm' + '\n' + 'Howell 108';
	info[1] = '2nd Summer Session' + '\n' + 'July 8th-August 6th' + '\n' + '1-4:50pm, Howell 110';
	
	push();
	if(width >= 1080){
	textSize(width/20);
	}else{
		if(width <= 1080){
			textSize(width/11);
		}
	}
	textAlign(RIGHT, BOTTOM);
	// text('Interest Meeting: 05.03.24, Howell Wood Shop' + '\n' + 'Second Summer Session' + '\n' + 'July 8th-August 6th, 2024' + '\n' + 'Professors Caroline Hatfield & Aubrey Pohl', width, height);
	text(info[index], width-5, height);
	pop();

	push();
	if(width >= 1080){
	textSize(width/20);
	}else{
		if(width <= 1080){
			textSize(0);
			noFill();
		}
	}
	textAlign(LEFT, BOTTOM);
	// text('Interest Meeting: 05.03.24, Howell Wood Shop' + '\n' + 'Second Summer Session' + '\n' + 'July 8th-August 6th, 2024' + '\n' + 'Professors Caroline Hatfield & Aubrey Pohl', width, height);
	text('2nd Summer Session' + '\n' + 'July 8th-August 6th' + '\n' + '1-4:50pm, Howell 110', 5, height);
	pop();
	
	push();
	let mx = sin(frameCount*.02)*24;
	blendMode(DIFFERENCE);
	image(fab, width/2+m+mx, height/2-m-mx);
	image(digi, width/2-m-mx, height/2+m+mx);
	pop();


	if(frameCount > 2024){
		frameCount = 0;
	}

	// print(frameCount);
	
	
}

function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}

function mousePressed(){
	
	index = index + 1;
	
	if(index == info.length){
		index = 0;
	}
	
}


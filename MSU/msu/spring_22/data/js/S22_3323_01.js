function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	textSize(width/6);
	textAlign(CENTER, CENTER);
	
	fill(150, 0, 250);
	
}

function draw() {
	background(230, 50, 125, 20);
	
	translate(width/2, height/2);
	rotate(frameCount*.02);
	rotate(mouseX/20);
	
	text('S22_3323_01', 0, 0);

	if(frameCount > 2024){
		frameCount = 0;
	}
}

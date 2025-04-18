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
	
	// fill(150, 0, 250);
	fill(250, 0, 150);
	
}

function draw() {
	// background(230, 50, 125, 20);
	background(125, 50, 230, 20);
	
	translate(width/2, height/2);
	rotate(frameCount*.02);
	rotate(mouseX/20);
	
	text('F23_2803', 0, 0);

	if(frameCount > 2024){
		frameCount = 0;
	}
}

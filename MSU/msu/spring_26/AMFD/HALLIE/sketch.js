let data;
let rc;
let d1 = [];
let d2 = [];

let r, g, b;




function preload() {
  data = loadTable("data.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

   r = 150;
   g = 20;
   b = 35;

  rc = data.getRowCount();

  rectMode(CENTER);

  print(rc);
}

function draw() {
  // background(220);

  for (let i = 0; i < rc; i++) {
    let m = map(i, 0, rc, 0, width); 
    
    let m2 = sin(frameCount*.02)*3;
    
    push();
    fill(0,255,0, 25);
    translate (width/2, height/2);
    rotate ((frameCount*.002)*i);
    d1[i] = data.getNum(i, 'boredom');
      ellipse(m, height / 2, width / rc, d1[i]*24*m2);
    pop();
    
    push();
    fill(0, 0, 255, 25)
    d2[i] = data.getNum(i, 'busy');
      ellipse(m, height / 2, width / rc, d2[i]*m2);
    pop();
    
    
    background(r, g, b, 1)
	
	// ellipse(mouseX, mouseY, m, m2);
	
	fill(m, -m, 255);
	
	stroke(255, m, -m)
    
    fill(m, 0, 0);
	
	stroke(m, 0, 0)
    
    let mx = mouseX/200;
    let my = mouseY/200
  }
  
}
function keyPressed(){
if(key === ' '){
save('HM_dataviz' + '_' + day() + '_' + year() + '_' + minute() + '_' + second() + '_' + '.jpg');
}
  
    if(key === '1'){
      r=100;
      g=0;
      b=25;
       
     }
     
    if(key === '2'){
      r=255;
      g=0;
      b=0;
      
    }
  
   if(key === '3') {
     r=35;
     g=100;
     b=25;
   }
}

let data;
let rc;
let d1 = [];
let d2 = [];

function preload() {
  data = loadTable("data.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 255, 50);

  rc = data.getRowCount();

  rectMode(CENTER);

  print(rc);
  
  // blendMode(DIFFERENCE);
}

function draw() {
  // background(220);

  for (let i = 0; i < rc; i++) {
    //map(input, start1, max1, start2, max2);
    let m = map(i, 0, rc, 0, width);

    let m2 = sin(frameCount * .02)*i;
    
    push();
    blendMode(DIFFERENCE);
    fill(0, 0, 255);
    rotate(frameCount*.0001)*i;
    d2[i] = data.getNum(i, "Michael Jackson");
    ellipse(m, height / 2, width / rc, d2[i]*m2);
    pop();

    push();
    fill(255, 0, 0);
    rotate(frameCount*.2);
    d1[i] = data.getNum(i, "Michael Jordan");
    ellipse(m, height / 2, width / rc, d2[i]*m2);
     pop();

  }
}


function keyPressed(){
if(key === ' '){
save('dataviz' + '_' + day() + '_' + year() + '_' + minute() + '_' + second() + '_' + '.jpg');
}
  
  if(key === '1'){
    r= 0;
    g= 0;
    b= 255;
  }
  if(key === '2'){
    r= 0;
    g= 255;
    b= 0;
  }
  if(key === '3'){
    r= 0;
    g= 255;
    b= 0;
  }
}

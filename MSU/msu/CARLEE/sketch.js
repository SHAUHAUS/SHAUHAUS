let data;
let rc;
let d1 = [];
let d2 = [];

let r, g, b;

function preload(){
  data = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 500);
  
  rc = data.getRowCount();
  
  rectMode(CENTER);
  
  print(rc);
  
  r = 50;
  g = 50;
  b = 50;
  
  background(r, g, b);
}

function draw() {
  background(r, g, b, 25);
  background(100,0,200, 25);
  
  for(let i=0; i<rc; i++){
    
    //map(input, start1, max1, start2, max2);
    let m = map(i, 0, rc, 0, width);
    
    let m2 = sin(frameCount*.02)*8;
    
       push();
    translate (350, 250);
    rotate((frameCount*.0002)*i)
    fill(45, m, 200, 50);
    d2[i] = data.getNum(i, 'dog');
    ellipse(100, 100, width/rc, d2[i]*m2);
    pop();
    
     push();
    translate(350,250);
    rotate((frameCount*.0002)*i);
    fill(255, 50, m, 25);
    //rect(x, y, w, h);
    d1[i] = data.getNum(i, 'cat');
    circle(10, 100, 200, d2[i]*m2);
    pop();
  }
      
}

function keyPressed(){
  
if(key === ' '){
save('dataviz' + '_' + day() + '_' + year() + '_' + minute() + '_' + second() + '_' + '.jpg');
}
  
  if(key === '1'){
    r = 150;
    g = 25;
    b = 100;
  }
   
  if(key === '2'){
    r = 20;
    g = 200;
    b = 10;
  }
   
  if(key === '3'){
    r = 100;
    g = 50;
    b = 255;
  }
}
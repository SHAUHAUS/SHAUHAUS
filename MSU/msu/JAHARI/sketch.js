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
 

  rc = data.getRowCount();

  rectMode(CENTER);

  print(rc);
  
  r = 75;
  g = 50;
  b = 100;
  
  background(r, g, b);
  
}

function draw() {
  // background(220);

  for (let i = 0; i < rc; i++) {
    //  map(input, start1, max1, start2, max2);
    let m = map(i, 0, rc, 0, width);
    
    let m2 = sin (frameCount*.05)*12

    
    push()
    fill(200, 200,75)
    d1[i] = data.getNum(i, 'Marty Supreme');
    rect(m, height / 2, width / rc, d1[i]*m2);
    pop()
    
    push()
    fill(75,50,25)
    d2[i] = data.getNum(i, 'Weapons');
    rect(m, height / 2, width / rc, d2[i]*m2);
    pop()

    //     rect(x, y, w, h)
    
    }
}

function keyPressed(){
  
if(key === ' '){
save('dataviz' + '_' + day() + '_' + year() + '_' + minute() + '_' + second() + '_' + '.jpg');
}
    
  
}

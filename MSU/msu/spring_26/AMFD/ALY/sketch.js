let data;

let rc;

let d1 = [];
let d2 = [];

let mx, my;

let r, g, b;

function preload() {
  data = loadTable("Data.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 0, 300);

  rc = data.getRowCount();

  rectMode(CENTER);

  print(rc);

  r = 50;

  g = 50;

  b = 50;

  background(r, g, b, 100);
}

function draw() {
  background(r, g, b);

  mx = mouseX / 500;
  my = mouseY / 500;

  for (let i = 0; i < rc; i++) {
    //map(imput, start1, max1, start2, max20);
    let m = map(i, 0, rc, 0, width);

    let m2 = sin(frameCount *.05/i)*6 - 3;

    push();
    translate(width / 2, height / 2);
    fill(200,0, 300,);
    rotate(radians(PI/PI)*m2*100);
    d2[i] = data.getNum(i, "letters");
    rect(m, height / 2, width / rc, d2[i] * m2 + 100 * mx);
    pop();

    push();
    translate(width /2, height /2);
    fill(30, 0, 200);
    d1[i] = data.getNum(i, "fabric");
    rotate(radians(PI/PI)*m2*100);
    rect(m, height / 2, width / rc, d1[i] * m2 * my);
    pop();
  }
}

function keyPressed() {
  if (key === " ") {
    save(
      "Aly_Data" +
        "_" +
        day() +
        "_" +
        year() +
        "_" +
        minute() +
        "_" +
        second() +
        "_" +
        ".jpg"
    );
  }

  if (key === "1") {
    r = 0;
    g = 0;
    b = 255;
  }

  if (key === "2") {
    r = 255;
    g = 0;
    b = 200;
  }
}

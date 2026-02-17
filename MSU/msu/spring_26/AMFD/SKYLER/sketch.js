let data;
let rc;
let d1 = [];
let d2 = [];

let mouseX, mouseY;

let r, g, b;

function preload() {
  data = loadTable("data.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 10, 200, 150);

  rc = data.getRowCount();

  rectMode(LEFT);

  print(rc);

  r = 40;
  g = 10;
  b = 100;
}

function draw() {
  background(r, g, b, 50);

  mx = mouseX / 200;
  my = mouseY / 200;

  for (let i = 20; i < rc; i++) {
    let m = map(i, 8, rc, 70, width);

    let m2 = sin(frameCount * 0.02) * 15;

    push();
    // translate((frameCount* .002)*i, height/2);
    fill(100, 10, 100);
    d2[i] = data.getNum(i, "Supergirl");
    triangle(m, width / 2, height / rc, d2[i] * m2);
    pop();

    push();
    fill(101, 200, 50);
    d1[i] = data.getNum(i, "He-man");
    rect(m, height / 2, width / rc, d1[i] * m2);
    pop();
  }
}

function keyPressed() {
  if (key === " ") {
    save(
      "skylerrahim" +
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

  if (key === "9") {
    r = 100;
    g = 10;
    b = 40;
  }
}



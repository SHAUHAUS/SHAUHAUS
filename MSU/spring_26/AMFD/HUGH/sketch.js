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

  r = 80;
  g = 255;
  b = 90;

  // background(160, 180, 100);
}

function draw() {
  background(r, g, b);

  for (let i = 0; i < rc; i++) {
    let m = map(i, 0, rc, 0, width);

    let m2 = sin(frameCount * 0.01) * 7;

    push();
    translate(width / 2, height / 2);
    rotate(frameCount * 0.25);
    fill(255, 0, 200);
    d1[i] = data.getNum(i, "bagel");
    ellipse(m, height / 2, width / rc, d2[i] * m2);
    pop();

    push();
    fill(200, 125, 0);
    d2[i] = data.getNum(i, "steak");
    ellipse(m, height / 2, width / rc, d1[i] * m2);
    pop();
  }
}

function keyPressed() {
  if (key === " ") {
    save(
      "hugh_data" +
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
    r = 255;
    g = 0;
    b = 0;
  }
  if (key === "2") {
    r = 0;
    g = 255;
    b = 0;
  }

  if (key === "3") {
    r = 0;
    g = 0;
    b = 255;
  }
}

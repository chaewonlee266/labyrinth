class Popup {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(0, 255, 204, 220);
    noStroke();
    rect(this.x, this.y, this.w, this.h);

    fill(255);
    textSize(16);
    textFont('monospace');
    text("SYSTEM ERROR", this.x + 15, this.y + 30);

    textSize(12);
    text("X", this.x + this.w - 20, this.y + 20);
  }

  clicked(mX, mY) {
    return (
      mX > this.x + this.w - 30 &&
      mX < this.x + this.w &&
      mY > this.y &&
      mY < this.y + 30
    );
  }
}

let popups = [];
let revealed = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);

  popups.push(new Popup(width / 2 - 90, height / 2 - 50, 180, 100));
}

function draw() {

  background(0);

  for (let i = 0; i < popups.length; i++) {
    popups[i].show();
  }

  if (popups.length >= 30) {
    revealed = true;
  }

  if (revealed) {
    background(250, 0, 0);

    fill(255);
    textSize(45);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    text("THERE IS NO ESCAPE", width / 2, height / 2);

    stroke(255);
    noFill();
    rect(width / 2 - 70, height / 2 + 40, 140, 40);

    noStroke();
    fill(255);
    textSize(14);
    text("GO BACK", width / 2, height / 2 + 60);
  }
}

function mousePressed() {
  let btnX = width / 2 - 120;
    let btnY = height / 2 + 40;
    let btnW = 240;
    let btnH = 40;

if (revealed) {
    if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
      window.location.href = "index.html";
    }
    return;
}

  for (let i = 0; i < popups.length; i++) {
    if (popups[i].clicked(mouseX, mouseY)) {
      popups.push(new Popup(random(0, windowWidth-180), random(0, windowHeight-100), 180, 100));
      popups.push(new Popup(random(0, windowWidth-180), random(0, windowHeight-100), 180, 100));
      popups.push(new Popup(random(0, windowWidth-180), random(0, windowHeight-100), 180, 100));
      break;
    }
  }
}
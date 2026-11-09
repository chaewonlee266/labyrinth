class RandomEye {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 60;
  }

  draw() {
    push();
    translate(this.x, this.y);

    let eyeX = map(mouseX, 0, width, -15, 15);
    let eyeY = map(mouseY, 0, height, -10, 10);
    eyeX = constrain(eyeX, -20, 20);
    eyeY = constrain(eyeY, -10, 10);

    noStroke();
    fill(255);
    ellipse(0, 0, 120, 80);

    fill(0, 255, 204);
    circle(eyeX, eyeY, 45);

    fill(0);
    circle(eyeX, eyeY, 25);
    pop();
  }

  ifClicked(mX, mY) {
    let d = dist(mX, mY, this.x, this.y);
    return d < this.r;
  }
}

let eyes = [];
let showFact = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);

let numEyes = floor(random(3, 6)); 

  for (let i = 0; i < numEyes; i++) {
    let x = random(80, width - 80);
    let y = random(80, height - 80);
    eyes.push(new RandomEye(x, y));
  }
}

function draw() {
  background(0);

  for (let eye of eyes) {
    eye.draw();
  }

 let popup = document.getElementById('warningPopup');
  if (showFact) {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
}

function mousePressed() {
  if (showFact) {
    showFact = false;
    return;
  }

  for (let eye of eyes) {
    if (eye.ifClicked(mouseX, mouseY)) {
      showFact = true;
      return;
    }
  }
}
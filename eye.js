function setup() {
  createCanvas(600, 400);

}

function draw() {

background(0);
let eyeX = map(mouseX, 0, width, 150, 330);
  let eyeY = map(mouseY, 0, height, 170, 200);
  eyeX = constrain(eyeX, 200, 400); 
  eyeY = constrain(eyeY, 150, 250);
  
  noStroke();
  fill(255);
  ellipse(300,200,600,400);
  fill(100,170,205);
  circle(eyeX,eyeY,230);
  fill(0);
  circle(eyeX,eyeY,130);
  
}
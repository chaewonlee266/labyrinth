function setup() {
  let canvas = createCanvas(300, 200); 
  canvas.parent('eyeCanvas'); 
}

function draw() {
  background(0);
  
  let eyeX = map(mouseX, 0, width, 120, 180);
  let eyeY = map(mouseY, 0, height, 90, 110);

  eyeX = constrain(eyeX, 110, 190); 
  eyeY = constrain(eyeY, 80, 120);
  
  noStroke();
  fill(255);
  ellipse(150, 100, 300, 200);
  
  fill(0, 255, 204);
  circle(eyeX, eyeY, 115);
  
  fill(0);
  circle(eyeX, eyeY, 65);
}
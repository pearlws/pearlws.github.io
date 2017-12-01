function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(0);
  line(500,0,500,1000)

  push();
  translate(500, 500);
  stroke(0);
  fill(0,0);
  ellipse(0,0,500,500);
  pop();

  push();
  translate(530, 500);
  stroke(0);
  fill(0,0);
  ellipse(0,0,505,505);
  pop();

  push();
  translate(578, 500);
  stroke(0);
  fill(0,0);
  ellipse(0,0,525,525);
  pop();

  push();
  translate(615, 500);
  stroke(0);
  fill(0,0);
  ellipse(0,0,550,550);
  pop();

  push();
  translate(666, 500);
  stroke(0);
  fill(0,0);
  ellipse(0,0,600,600);
  pop();
  

}

function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

function draw() {
  background(102);

  var rot = TWO_PI / 60;

  var s = map(second(), 0, 60, 0, TWO_PI);
  var s_1 = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;

  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount * rot / 60);
  star(0, 0, 25, 40, 12); 
  pop(); 

  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount * rot / 120);
  star(0, 0, 10, 40, 3); 
  pop();
  
  // push();
  // translate(width*0.2, height*0.5);
  // fill(20);
  // rotate(frameCount * rot / 60);
  // star(0, 0, 80, 100, 40); 
  // pop();

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

function draw() {
  background(255);
  fill(0);

  //star(40,100,20,30,10);
  //star(240,200,190,200,60);

  // ellipse(20,100,10,10);
  // ellipse(340,100,600,600);
  
  push();
  translate(40, 100);
  fill(20);
  rotate((frameCount + 40) * TWO_PI / 600);
  star(0,0,20,30,10); 
  pop();

  push();
  translate(240, 200);
  fill(20);
  rotate(-frameCount * TWO_PI / 3600);
  star(0,0,190,200,60); 
  pop();  

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
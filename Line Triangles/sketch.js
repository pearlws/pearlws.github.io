var s = 1450/60;
var h = 1450/24;
frameRate(1);

function setup() {

  createCanvas(1450, 750);
  background(255);
  stroke(255);
  frameRate(1);

}

function draw() { 
  if (second() == 0) {
    background(255);

  } else {
    background(255,15);
  }



  stroke(150);
  strokeWeight(1);
  line(0,50,width,50);
  line(0,300,width,300);
  line(0,550,width,550);


  r = random(255);
  g = random(255);
  b = random(255);

  stroke(255);
  strokeWeight(0);
  fill(r, g, b, 127);
  

  triangle(hour()*h,50,minute()*s,300,second()*s,550);


}
/*
Adopted from Processing Example 
https://processing.org/examples/clock.html

*/


var cx, cy;
var cx1, cy1; // center position of canvas
// Radius for hands of the clock
var secondsRadius;
var minutesRadius;
var hoursRadius;
var secondsRadius1;
var minutesRadius1;
var hoursRadius1;
var clockDiameter;
var hdeg = TWO_PI/24;

frameRate(1);

function setup() {

  frameRate(1);
  createCanvas(1500, 750);
  background(0);
  stroke(255);

  r = random(255);
  g = random(255);
  b = random(255);
  
  var radius = min(width, height) / 4; // this is the maximum possible radius
  secondsRadius = radius * 0.50;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.70;
  
  cx = width / 2;
  cy = height / 2;

}

function draw() {

  if (second() == 0) {
    background(0);
  }

  for (var i = 0; i < hour(); i++) {
      push()
      translate(width/2,height/2);
      rotate(hdeg * i);
      fill(r,0,0, 50);
      ellipse(0,hoursRadius+40,70,300);
      pop()

  }



  r = random(255);
  g = random(255);
  b = random(255);
  hdeg = (TWO_PI/24 - HALF_PI);
  
  
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI; 
  var h = map(hour(), 0, 24, 0, TWO_PI) - HALF_PI;

  translate(width/2,height/2);

  push()
  rotate(s);
  fill(255);
  ellipse(0,minutesRadius,30,30);
  pop()

  push()
  rotate(h);
  fill(r,0,0, 50);
  ellipse(0,hoursRadius+40,70,minute()*(500/60));
  pop()


  // fill(200,200,0, 50);
  // ellipse(cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius,30,30);

  // fill(200,200,0, 50);
  // ellipse(cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius,(1*minute()),1*minute());
  // Draw the minute ticks

}
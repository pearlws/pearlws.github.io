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
frameRate(1);

function setup() {

  frameRate(1);
  createCanvas(1500, 750);
  background(255);
  stroke(255);

  r = random(255);
  g = random(255);
  b = random(255);
  
  var radius = min(width, height) / 2; // this is the maximum possible radius
  secondsRadius = radius * 0.50;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.70;
  secondsRadius1 = radius * 0.70;
  minutesRadius1 = radius * 0.60;
  hoursRadius1 = radius * 0.50;  
  clockDiameter = radius * 1.8;
  
  cx = width / 4;
  cy = height / 2;
  cx1 = 3 * width / 4;
  cy1 = height / 2;
}

function draw() {
  background(255,15);

  // if (second() < 1.00){
  // 	background(255);
  // }

  r = random(255);
  g = random(255);
  b = random(255);
  
  
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; 
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  
  // Draw the hands of the clock
  stroke(255);
  strokeWeight(0);
  fill(r, g, b, 127);

  triangle(cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius,cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius,cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  triangle(cx1 + cos(s) * secondsRadius1, cy1 + sin(s) * secondsRadius1,cx1 + cos(m) * minutesRadius1, cy1 + sin(m) * minutesRadius1,cx1 + cos(h) * hoursRadius1, cy1 + sin(h) * hoursRadius1);

  // Draw the minute ticks
  strokeWeight(0);
  //beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
    var x1 = cx1 + cos(angle) * secondsRadius1;
    var y1 = cy1 + sin(angle) * secondsRadius1;
    //vertex(x, y);
  }
  endShape();
}
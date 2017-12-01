var x = 100;
var y = 100;
var x1 = 200;
var y1 = 300;
var x2 = 100;
var y2 = 500;
var xspeed = 1;
var yspeed = 3.3;

function setup() {
  createCanvas(400,620);

  background(255);
}

function draw() {
  noStroke();
  smooth();  
  fill(255,10);
  rect(0,0,width,height);
  
  // seconds
  x = x + xspeed;
  y = y + yspeed;

  // Check for bouncing
  if ((x > width) || (x < 0)) {
    xspeed_s = xspeed * -1;
  }
  if ((y > 200) || (y < 0)) {
    yspeed_s = yspeed * -1;
  }

    // Display at x,y location
  stroke(0);
  fill(175);
  ellipse(x,y,1+second()*5,1+second()*5);

  // minutes
  x1 = x1 + xspeed;
  y1 = y1 + yspeed;

  // Check for bouncing
  if ((x1 > width) || (x1 < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y1 > 410) || (y1 < 210)) {
    yspeed = yspeed * -1;
  }

    // Display at x,y location
  stroke(0);
  fill(175);
  ellipse(x1,y1,1+minute()*5,1+minute()*5); 

  // hours
  x2 = x2 + xspeed;
  y2 = y2 + yspeed;

  // Check for bouncing
  if ((x2 > width) || (x2 < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y2 > 620) || (y2 < 420)) {
    yspeed = yspeed * -1;
  }

    // Display at x,y location
  stroke(0);
  fill(175);
  ellipse(x2,y2,1+hour()*5,1+hour()*5);   

}
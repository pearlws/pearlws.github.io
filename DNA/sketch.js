// var slider1;
// var slider2;
// foo loop and random function
function setup() {
  createCanvas(1400, windowHeight); 
  background(50);
  // slider1 = createSlider(1, 10, 1);
  // slider1.position(100, 50);
  // slider2 = createSlider(1, 10, 0.01, 0.1);
  // slider2.position(100, 100);
} 

var spacing = (1400/60);
var spacing1 = (1400/24);
var diameter = 10;
var t = 0;
var t1 = 0;
var theta = 0;

var amplitude = 100;
var cycles = 2;
var cycles1 = 2;
var speed = 0.01;
var speed1 = 0.01;

function draw() {
  background(0);
  fill(255);

  
 speed = map(0.25, 1, 10, 0.01, 0.1);
 cycles = map(60, 1, 10, 1, 5);
  var n = width/spacing;
  for (var i = 0; i < minute(); i++) {
    var x = i * spacing; 
   // var y = height / 2;
      theta = map(i, 0, n, 0, TWO_PI*cycles);
      var y = height/3 + sin(theta+t) * amplitude;
    ellipse(x, y, 6, 6);

    var x1 = i * spacing; 
   // var y = height / 2;
      theta = map(i, 0, n, 0, TWO_PI*cycles);
      var y1 = height/3 + sin(theta+t - PI) * amplitude;
    ellipse(x1, y1, 6, 6);  

    stroke(255);
    line(x,y,x1,y1);  
  }




 speed1 = map(0.1, 1, 10, 0.01, 0.1);
 cycles1 = map(60, 1, 10, 1, 5);
  var n = width/spacing1;
  for (var i = 0; i < hour(); i++) {
    var x = i * spacing1; 
   // var y = height / 2;
      theta = map(i, 0, n, 0, TWO_PI*cycles);
      var y = 2*height/3 + sin(theta+t1) * amplitude;
    ellipse(x, y, diameter, diameter);

    var x1 = i * spacing1; 
   // var y = height / 2;
      theta = map(i, 0, n, 0, TWO_PI*cycles);
      var y1 = 2*height/3 + sin(theta+t1 - PI) * amplitude;
    ellipse(x1, y1, diameter, diameter);  

    stroke(255);
    line(x,y,x1,y1);  
  } 



  
  t += speed;
  t1 += speed1;

}

  // Todo: use random function to generate the y postions of the balls
  // Todo: create random color

// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;

function setup() {
  pixelDensity(3.0);
  /*
  this is the logical resolution for iphone 6 without the browser chrome at the top
  adjust it for your phone accordingly
  */
  createCanvas(375,667); 

  var now = 0;
	pixelDensity(3.0);
    dim = width;
  background(0);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
  background(250);
  query();    
}

// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/edbfcff3a9e7b59c4cf1a506f9cbfa37/42.361936, -71.097309';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  // console.log(data);
  queryResult = data;

  // only look at current results:
  var currentWeather = queryResult.currently;
  // var day = queryResult.daily.data[0];
  // var hour = queryResult.hourly.data[0];


  
  // a few variables for text formatting
  var xPos = 20;  
  var yPos = 40;
  var yGap = 60; 
  var textSizeLarge = 40;
  var textSizeSmall = 14;

  // List relevant items of information
  fill(0);
  textStyle(BOLD);

  drawGradient(width/2, height/2);
  // summer limits
  var radius = dim/2;
  FallComfort(width/2, height/2);

  //draw current ellipse
  now = map(currentWeather.temperature, 10, 100, 0, radius-10);
  strokeWeight(4);
  fill(0,0);
  stroke(255);
  ellipse(width/2, height/2, now, now);

  button = createButton('fall');
  button.position(50, 100);
  button.mousePressed(drawGradient);
  button.mousePressed(FallComfort);
  button.mousePressed(NowTemp);

  button = createButton('winter');
  button.position(110, 100);
  button.mousePressed(drawGradient);
  button.mousePressed(WinterComfort);
  button.mousePressed(NowTemp);

  button = createButton('spring');
  button.position(190, 100);
  button.mousePressed(drawGradient);
  button.mousePressed(SpringComfort);
  button.mousePressed(NowTemp);

  button = createButton('summer');
  button.position(280, 100);
  button.mousePressed(drawGradient);
  button.mousePressed(SummerComfort); 
  button.mousePressed(NowTemp);






}

function drawGradient(x,y) {
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = radius-10; r > 0; --r) {
  	strokeWeight(2);
  	fill(0,15);
    stroke(0 + (255/radius)*r, 0, 255 - (255/radius)*r);
    ellipse(width/2, height/2, r, r);
    h = (h + 1) % 360;
  }
}

function drawGradientComfort(x, y, min, max) {
  var radius = dim/2;
  var min = map(55,10,100,0,radius-10);
  var max = map(70,10,100,0,radius-10);
  var h = random(0, 360);
  for (var r = max; r > min; --r) {
    strokeWeight(2);
    fill(0,0);
    stroke(255,50);
    ellipse(width/2, height/2, r, r);
    h = (h + 1) % 360;
  }
}

function WinterComfort() {
  var radius = dim/2;
  var min = map(35,10,100,0,radius-10);
  var max = map(55,10,100,0,radius-10);
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = max; r > min; --r) {
    strokeWeight(2);
    fill(0,0);
    stroke(255,50);
    ellipse(width/2, height/2, r, r);
    h = (h + 1) % 360;
  }
}

function SpringComfort() {
  var radius = dim/2;
  var min = map(45,10,100,0,radius-10);
  var max = map(70,10,100,0,radius-10);  
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = max; r > min; --r) {
    strokeWeight(2);
    fill(0,0);
    stroke(255,50);
    ellipse(width/2, height/2, r, r);
    h = (h + 1) % 360;
  }
}

function SummerComfort() {
  var radius = dim/2;
  var min = map(65,10,100,0,radius-10);
  var max = map(86,10,100,0,radius-10);  
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = max; r > min; --r) {
    strokeWeight(2);
    fill(0,0);
    stroke(255,50);
    ellipse(width/2, height/2, r, r);
    h = (h + 1) % 360;
  }
}

function FallComfort() {
  var radius = dim/2;
  var min = map(45,10,100,0,radius-10);
  var max = map(80,10,100,0,radius-10);  
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = max; r > min; --r) {
    strokeWeight(2);
    fill(0,0);
    stroke(255,50);
    ellipse(width/2, height/2, r, r);
    h = (h + 1) % 360;
  }
}

function NowTemp() {
  strokeWeight(4);
  fill(0,0);
  stroke(255);
  ellipse(width/2, height/2, now, now);

}


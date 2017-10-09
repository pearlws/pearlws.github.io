
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
  background(255);
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
  var day = queryResult.daily.data[0];
  var hour = queryResult.hourly.data[10];

  // log current data
  PI = currentWeather.precipIntensity;
  H = currentWeather.humidity;
  T = currentWeather.temperature;
  AT = currentWeather.apparentTemperature;
  CC = currentWeather.cloudCover;
  V = currentWeather.visibility;
  Time = currentWeather.time;

  PIloc = map(PI, 0, 1, 12, 410);
  Tloc = map(T, 100, 0, 12, 410);
  ATloc = map(AT, 100, 0, 12, 410);
  Vloc = map(V, 0, 100, 12, 410);
  Timeloc = map(9.5, 9, 19,12,410);


  
  // a few variables for text formatting
  var xPos = 20;  
  var yPos = 40;
  var yGap = 60; 
  var textSizeLarge = 40;
  var textSizeSmall = 14;
  var textSizevSmall = 10;

  //Precip Gradient
  for (var r = 0; r < 10; r++) {
    noStroke();
    fill(255);
    rect(35*r + 12,50,34,60);
    for (var i = 0; i < r*50; i++){
      stroke(0,0,255,10*r);
      strokeWeight(0.5);
      var x = random(35*r + 12,35*r + 46);
      var y = random(50,110);
      //ellipse(x,y,0.1*r,0.1*r);
      line(x,50,x,110);
    }
  }

  //Temperature Gradient
  for (var r = 0; r < 10; r++) {
    noStroke();
    fill(255 - (255/10)*r,0,0 + (255/10)*r);
    rect(35*r + 12,150,34,60);
  }

  //Apparent Temperature Gradient
  for (var r = 0; r < 10; r++) {
    noStroke();
    fill(255 - (255/10)*r,0,0 + (255/10)*r);
    rect(35*r + 12,250,34,60);
  }

  //Visibility Gradient
  for (var r = 0; r < 10; r++) {
    noStroke();
    fill(0 + (255/9)*r);
    rect(35*r + 12,350,34,60);
  }

  //Time Live
  for (var r = 0; r < 12; r++) {
    noStroke();
    fill(230);
    rect(30*r + 12,500,29,60,5,5,5,5);
  }
  // List relevant items of information
  fill(100);
  textStyle(BOLD);

  // The location is not live data, just entered manually
  textSize(textSizeSmall);
  text("Precipitation Intensity",PIloc + 200, yPos);
  textSize(textSizevSmall);
  text(PI+ "%",PIloc , yPos + 85);
  yPos+=yGap + textSizeLarge;

  textSize(textSizeSmall);
  text("Outside Temperature",220, yPos);
  textSize(textSizevSmall);
  text(T ,Tloc - 10, yPos + 85);
  yPos+=100;

  textSize(textSizeSmall);
  text("Apparent Temperature",210, yPos);
  textSize(textSizevSmall);
  text(AT ,ATloc - 10, yPos + 85);
  yPos+=100;

  textSize(textSizeSmall);
  text("Visibility",300, yPos);
  textSize(textSizevSmall);
  text(V + "%",Vloc - 5, yPos + 85);
  yPos+=yGap;  

  textSize(25);
  fill(255);
  var gap = 30;
  var ystart = 20; 
  text("9",ystart, yPos + 135); 
  ystart += gap; 
  text("10",ystart - 8, yPos + 135); 
  ystart += gap; 
  text("11",ystart - 7, yPos + 135);
  ystart += gap; 
  text("12",ystart - 9, yPos + 135);
  ystart += gap; 
  text("1",ystart, yPos + 135);
  ystart += gap; 
  text("2",ystart, yPos + 135);
  ystart += gap; 
  text("3",ystart, yPos + 135);
  ystart += gap; 
  text("4",ystart, yPos + 135);
  ystart += gap; 
  text("5",ystart, yPos + 135);
  ystart += gap; 
  text("6",ystart, yPos + 135);
  ystart += gap; 
  text("7",ystart, yPos + 135);
  ystart += gap; 
  text("8",ystart, yPos + 135);
  

  //Curent Precip Data
  stroke(200);
  fill(0,0);
  strokeWeight(2);
  rect(PIloc - 17,45,34,85,10,10,2,10);

  rect(Tloc - 17,145,34,85,10,10,2,10);

  rect(ATloc - 17,245,34,85,10,10,2,10);

  rect(Vloc - 17,345,34,85,10,10,2,10);

  rect(((hour() - 9)*60 + minute()) - 10,495,34,70,10,10,2,10);

  //rect(mouseX,495,34,70,10,10,2,10);





}
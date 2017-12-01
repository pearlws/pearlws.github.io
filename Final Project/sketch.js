// my leaflet.js map
var mymap;
var currentSpecies;
var count = 0;
var user = 300;

//Kingodm csv
var Animalia;
var Bacteria;
var Fungi;
var Plantae;
var Protist;
var Virus;

// Species Names
var Animalia_names = [];
var Bacteria_names;
var Fungi_names;
var Plantae_names;
var Protist_names;
var Virus_names;

// Text 
// gap between kingdom names
var y_kingdom = 30;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  Animalia = loadTable("data/Animalia.csv", "csv", "header");
}

function query() {
  // URL for querying
  var start = 'http://api.gbif.org/v1/species?name=';
  var name = Animalia_names[user];
  console.log(name);
  var list_url = [start,name];
  var url= join(list_url,"");
  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  //var currentSpecies = data;
  //console.log(data.results[0].taxonID);
  var splitString = split(data.results[0].taxonID, ":");
  currentSpecies = splitString[1];
  console.log(currentSpecies);
}

function setup() {
  var canvas = createCanvas(900,600);  
  canvas.parent("container"); 
  // var canvas1 = createCanvas(800,100);  
  // canvas.parent("container1");
  createMap(); 
  Datasetup();
  query();

}

function draw(){
  background(255);

// Type Kingdom Names
  textSize(20);
  fill(200);
  if ((mouseX>10) && (mouseX<100) && (mouseY>30) && (mouseY<50)) {
    fill(0);
  }
  text("Animalia",10,50);
  fill(200);
  if ((mouseX>10) && (mouseX<100) && (mouseY>60) && (mouseY<80)) {
    fill(0);
  }
  text("Bacteria",10,50+y_kingdom);
  fill(200);
  if ((mouseX>10) && (mouseX<100) && (mouseY>90) && (mouseY<110)) {
    fill(0);
  }
  text("Fungi",10,50+y_kingdom*2);
  fill(200);
  if ((mouseX>10) && (mouseX<100) && (mouseY>120) && (mouseY<140)) {
    fill(0);
  }
  text("Plantae",10,50+y_kingdom*3);
  fill(200);
  if ((mouseX>10) && (mouseX<100) && (mouseY>150) && (mouseY<170)) {
    fill(0);
  }
  text("Protist",10,50+y_kingdom*4);
  fill(200);
  if ((mouseX>10) && (mouseX<100) && (mouseY>180) && (mouseY<200)) {
    fill(0);
  }
  text("Virus",10,50+y_kingdom*5);
  fill(200);

//Type Species Names
if (count > 0) {
  textSize(20);
  for (var i = 0; i <= Animalia_names.length - 1; i++) {
    fill(200);
    if ((mouseX>100) && (mouseX<150) && (mouseY>30 + 20 * i) && (mouseY<50 + 20 * i)) {
      fill(0);
    }
    text(Animalia_names[i],100,50 + 20 * i);
  }
}

}

function createMap(){
  mymap = L.map('map').setView([37.8, -96], 4);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.light'
  }).addTo(mymap); 
}

function Datasetup() {
  for (var i = 0; i < Animalia.getRowCount(); i++) {
    Animalia_names[i] = Animalia.getString(i,0);

  }
}

function mouseClicked() {
  count ++;
  if (count >= 1) {
      for (var i = 0; i <= Animalia_names.length - 1; i++) {
        if ((mouseX>100) && (mouseX<150) && (mouseY>30 + 20 * i) && (mouseY<50 + 20 * i)) {
          user = i;
      }
    }
      //user = 200;
      query();
      var start = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=';
      var end = '&years=1600,2017&bin=square&squareSize=200&style=green.poly';
      var map_url = [start,currentSpecies,end];
      var species_map = join(map_url,"");
      console.log(species_map);
      //var species_map = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=2441056&years=1600,2017&bin=square&squareSize=50&style=purpleYellow-noborder.poly';
      L.tileLayer(species_map, {
      }).addTo(mymap);

  }
 
}


// my leaflet.js map
var mymap;
var currentSpecies = ' ';
var num_occurences = 0;
var name = ' ';
var currentstyle;
var currentyear = '1900';
var currentyear_index = 0;
var count = 0;
var user = 0;
var currentOccurence = 0;
var occurrences = [];

var move_down = 35;

//Kingodm csv
var k = 0;
var Animalia;
var Bacteria;
var Fungi;
var Plantae;
var Protist;
var Virus;

// Species Names
var Animalia_names = [];
var Bacteria_names = [];
var Fungi_names = [];
var Plantae_names = [];
var Protist_names = [];
var Virus_names = [];

var Animalia_kingdom = [];
var Bacteria_kingdom = [];
var Fungi_kingdom = [];
var Plantae_kingdom = [];
var Protist_kingdom = [];
var Virus_kingdom = [];

var Animalia_class = [];
var Bacteria_class = [];
var Fungi_class = [];
var Plantae_class = [];
var Protist_class = [];
var Virus_class = [];

var Animalia_family = [];
var Bacteria_family = [];
var Fungi_family = [];
var Plantae_family = [];
var Protist_family = [];
var Virus_family = [];

var Animalia_system = [];
var Bacteria_system = [];
var Fungi_system = [];
var Plantae_system = [];
var Protist_system = [];
var Virus_system = [];



var pos = 0;
var a = 0;
var a_x = 0;
var a_y = 0;
var a_x_1 = 0;
var a_y_1 = 0;
var a_x_2 = 0;
var a_y_2 = 0;
var a_x_3 = 0;
var a_y_3 = 0;

var myFont
var myFont1


var l = '';

// Array of Years
var year = [1900,1930,1960,1990,2017];

// Text 
// gap between kingdom names
var y_kingdom = 30;

function preload() {
  // Fonts
  myFont = loadFont('assets/Anaheim-Regular.ttf');
  myFont1 = loadFont('assets/Neuton-Light.ttf');
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  Animalia = loadTable("data/Animalia.csv", "csv", "header");
  Bacteria = loadTable("data/Bacteria.csv", "csv", "header");
  Fungi = loadTable("data/Fungi.csv", "csv", "header");
  Plantae = loadTable("data/Plantae.csv", "csv", "header");
  Protist = loadTable("data/Protist.csv", "csv", "header");
  Virus = loadTable("data/Virus.csv", "csv", "header");
}

function Datasetup() {
  for (var i = 0; i < Animalia.getRowCount(); i++) {
    Animalia_names[i] = Animalia.getString(i,0);
    Animalia_kingdom[i] = Animalia.getString(i,1);
    Animalia_class[i] = Animalia.getString(i,3);
    Animalia_family[i] = Animalia.getString(i,5);
    Animalia_system[i] = Animalia.getString(i,6);

  }

  for (var i = 0; i < Bacteria.getRowCount(); i++) {
    Bacteria_names[i] = Bacteria.getString(i,0);
    Bacteria_kingdom[i] = Bacteria.getString(i,1);
    Bacteria_class[i] = Bacteria.getString(i,3);
    Bacteria_family[i] = Bacteria.getString(i,5);
    Bacteria_system[i] = Bacteria.getString(i,6);

  }

  for (var i = 0; i < Fungi.getRowCount(); i++) {
    Fungi_names[i] = Fungi.getString(i,0);
    Fungi_kingdom[i] = Fungi.getString(i,1);
    Fungi_class[i] = Fungi.getString(i,3);
    Fungi_family[i] = Fungi.getString(i,5);
    Fungi_system[i] = Fungi.getString(i,6);

  }

  for (var i = 0; i < Plantae.getRowCount(); i++) {
    Plantae_names[i] = Plantae.getString(i,0);
    Plantae_kingdom[i] = Plantae.getString(i,1);
    Plantae_class[i] = Plantae.getString(i,3);
    Plantae_family[i] = Plantae.getString(i,5);
    Plantae_system[i] = Plantae.getString(i,6);

  }

  for (var i = 0; i < Protist.getRowCount(); i++) {
    Protist_names[i] = Protist.getString(i,0);
    Protist_kingdom[i] = Protist.getString(i,1);
    Protist_class[i] = Protist.getString(i,3);
    Protist_family[i] = Protist.getString(i,5);
    Protist_system[i] = Protist.getString(i,6);

  }

  for (var i = 0; i < Virus.getRowCount(); i++) {
    Virus_names[i] = Virus.getString(i,0);
    Virus_kingdom[i] = Virus.getString(i,1);
    Virus_class[i] = Virus.getString(i,3);
    Virus_family[i] = Virus.getString(i,5);
    Virus_system[i] = Virus.getString(i,6);

  }          
}

function query() {
  // Determine name from Kingdom
  if (k == 1) {
    name = Animalia_names[user];
  }
  if (k == 2) {
    name = Bacteria_names[user];
  }
  if (k == 3) {
    name = Fungi_names[user];
  }
  if (k == 4) {
    name = Plantae_names[user];
  }    
  if (k == 5) {
    name = Protist_names[user];
  }
  if (k == 6) {
    name = Virus_names[user];
  }

  // URL for querying Species TaxonID
  if (mouseX > 800) {
    var start = 'http://api.gbif.org/v1/species?name=';
    console.log(name);
    var list_url = [start,name];
    var url= join(list_url,"");
    // Query the URL, set a callback
    // 'jsonp' is needed for security
    loadJSON(url, gotData, 'jsonp');
  }

  if (mouseX < 800) {
  // URL for querying species occurence
  var section1 = 'http://api.gbif.org/v1/occurrence/search?year=1800,'
  var section2 = currentyear;
  var section3 = '&country=US&taxonKey='
  var section4 = currentSpecies;
  console.log(name);
  var list_url = [section1,section2,section3,section4];
  var url= join(list_url,"");
  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
 }

}

function gotData(data) {

  if (mouseX > 800) {
    var splitString = split(data.results[0].taxonID, ":");
    //var class_name = data.results[0].class;
    currentSpecies = splitString[1];
    console.log(currentSpecies);
    //console.log(class_name);
    //console.log(data);
    //console.log(data.count);    
  }

  if (mouseX < 800) {
    currentOccurence = data.count;
    console.log(data.count);
    num_occurences = data.count;
    append(occurrences,data.count);
    console.log(occurrences);
    count ++;
    console.log(count);

  }
}

function setup() {
  //textFont(myFont);
  var canvas = createCanvas(1400,800);  
  canvas.parent("container"); 
  // var canvas1 = createCanvas(800,100);  
  // canvas.parent("container1");
  createMap(); 
  Datasetup();
  //query();

}

function draw(){
  background(255);
  textFont(myFont);
  textSize(50);
  fill(100);

  text("Invasive Species of the United States",10,45);
  //text("Animalia",810,10);
  fill(255,0,0);
  //ellipse(0,0,100,100);

// Type Kingdom Names
  rectMode(CORNERS);
  fill(200,10);
  rect(805,25 + move_down,895,60+y_kingdom*5 + move_down,2,2,2,2);
  textSize(20);
  fill(200);
  if ((mouseX>810) && (mouseX<900) && (mouseY>30+ move_down) && (mouseY<50+ move_down) || (k==1)) {
    fill(0);
  }
  text("Animalia",810,50+ move_down);
  fill(200);
  if ((mouseX>810) && (mouseX<900) && (mouseY>60+ move_down) && (mouseY<80+ move_down) || (k==2)) {
    fill(0);
  }
  text("Bacteria",810,50+y_kingdom+ move_down);
  fill(200);
  if ((mouseX>810) && (mouseX<900) && (mouseY>90+ move_down) && (mouseY<110+ move_down) || (k==3)) {
    fill(0);
  }
  text("Fungi",810,50+y_kingdom*2+ move_down);
  fill(200);
  if ((mouseX>810) && (mouseX<900) && (mouseY>120+ move_down) && (mouseY<140+ move_down) || (k==4)) {
    fill(0);
  }
  text("Plantae",810,50+y_kingdom*3+ move_down);
  fill(200);
  if ((mouseX>810) && (mouseX<900) && (mouseY>150+ move_down) && (mouseY<170+ move_down) || (k==5)) {
    fill(0);
  }
  text("Protist",810,50+y_kingdom*4+ move_down);
  fill(200);
  if ((mouseX>810) && (mouseX<900) && (mouseY>180+ move_down) && (mouseY<200+ move_down) || (k==6)) {
    fill(0);
  }
  text("Virus",810,50+y_kingdom*5+ move_down);
  fill(200);

//Type Species Names
//textFont(myFont1);
fill(200,10);
rect(900,25+ move_down,1300,500+ move_down,2,2,2,2);
textSize(20);

if (k == 1) {
  currentstyle = 'square&squareSize=100&style=iNaturalist.poly';
  text('Species: ' + Animalia_names[user], 905, 540+ move_down);
  text('Kingdom: '+ Animalia_kingdom[user], 905, 570+ move_down);
  text('Class: '+ Animalia_class[user], 905, 600+ move_down);
  text('Family: '+ Animalia_family[user], 905, 630+ move_down);
  text('System: '+ Animalia_system[user], 905, 660+ move_down);
  for (var i = 0; i <= Animalia_names.length - 1; i++) {
    fill(200);
    if ((mouseX>900) && (mouseX<1050) && (mouseY>pos+30 + 20 * i+ move_down) && (mouseY<pos+50 + 20 * i+ move_down) || (i==user)) {
      fill(0);
    }
    text(Animalia_names[i],905,pos+50 + 20 * i+ move_down);
  }
}

if (k == 2) {
  currentstyle = 'square&squareSize=100&style=iNaturalist.poly';
  text('Species: ' + Bacteria_names[user], 905, 540+ move_down);
  text('Kingdom: '+ Bacteria_kingdom[user], 905, 570+ move_down);
  text('Class: '+ Bacteria_class[user], 905, 600+ move_down);
  text('Family: '+ Bacteria_family[user], 905, 630+ move_down);
  text('System: '+ Bacteria_system[user], 905, 660+ move_down);  
  for (var i = 0; i <= Bacteria_names.length - 1; i++) {
    fill(200);
    if ((mouseX>900) && (mouseX<1050) && (mouseY>pos+30 + 20 * i+ move_down) && (mouseY<pos+50 + 20 * i+ move_down)) {
      fill(0);
    }
    text(Bacteria_names[i],905,pos+50 + 20 * i+ move_down);
  }
}

if (k == 3) {
  currentstyle = 'square&squareSize=100&style=purpleYellow.poly';
  text('Species: ' + Fungi_names[user], 905, 540+ move_down);
  text('Kingdom: '+ Fungi_kingdom[user], 905, 570+ move_down);
  text('Class: '+ Fungi_class[user], 905, 600+ move_down);
  text('Family: '+ Fungi_family[user], 905, 630+ move_down);
  text('System: '+ Fungi_system[user], 905, 660+ move_down);  
  for (var i = 0; i <= Fungi_names.length - 1; i++) {
    fill(200);
    if ((mouseX>900) && (mouseX<1050) && (mouseY>pos+30 + 20 * i+ move_down) && (mouseY<pos+50 + 20 * i+ move_down)) {
      fill(0);
    }
    text(Fungi_names[i],905,pos+50 + 20 * i+ move_down);
  }
}

if (k == 4) {
  currentstyle = 'square&squareSize=100&style=green.poly';
  text('Species: ' + Plantae_names[user], 905, 540+ move_down);
  text('Kingdom: '+ Plantae_kingdom[user], 905, 570+ move_down);
  text('Class: '+ Plantae_class[user], 905, 600+ move_down);
  text('Family: '+ Plantae_family[user], 905, 630+ move_down);
  text('System: '+ Plantae_system[user], 905, 660+ move_down);   
  for (var i = 0; i <= Plantae_names.length - 1; i++) {
    fill(200);
    if ((mouseX>900) && (mouseX<1050) && (mouseY>pos+30 + 20 * i+ move_down) && (mouseY<pos+50 + 20 * i+ move_down)) {
      fill(0);
    }
    text(Plantae_names[i],905,pos+50 + 20 * i+ move_down);
  }
}

if (k == 5) {
  currentstyle = 'square&squareSize=100&style=purpleWhite.poly';
  text('Species: ' + Protist_names[user], 905, 540+ move_down);
  text('Kingdom: '+ Protist_kingdom[user], 905, 570+ move_down);
  text('Class: '+ Protist_class[user], 905, 600+ move_down);
  text('Family: '+ Protist_family[user], 905, 630+ move_down);
  text('System: '+ Protist_system[user], 905, 660+ move_down);  
  for (var i = 0; i <= Protist_names.length - 1; i++) {
    fill(200);
    if ((mouseX>900) && (mouseX<1050) && (mouseY>pos+30 + 20 * i+ move_down) && (mouseY<pos+50 + 20 * i+ move_down)) {
      fill(0);
    }
    text(Protist_names[i],905,pos+50 + 20 * i+ move_down);
  }
}

if (k == 6) {
  currentstyle = 'square&squareSize=100&style=classic.poly';
  text('Species: ' + Virus_names[user], 905, 540+ move_down);
  text('Kingdom: '+ Virus_kingdom[user], 905, 570+ move_down);
  text('Class: '+ Virus_class[user], 905, 600+ move_down);
  text('Family: '+ Virus_family[user], 905, 630+ move_down);
  text('System: '+ Virus_system[user], 905, 660+ move_down);  
  for (var i = 0; i <= Virus_names.length - 1; i++) {
    fill(200);
    if ((mouseX>900) && (mouseX<1050) && (mouseY>pos+30 + 20 * i+ move_down) && (mouseY<pos+50 + 20 * i+ move_down)) {
      fill(0);
    }
    text(Virus_names[i],905,pos+50 + 20 * i+ move_down);
  }
}
//textFont(myFont);

fill(255);
noStroke();
rect(800,0,width,25+ move_down);
rect(0,501+ move_down,width,height+ move_down);
fill(200);

//Draw Species Box

text('Species: ' + Animalia_names[user], 905, 540+ move_down);
text('Kingdom: '+ Animalia_kingdom[user], 905, 570+ move_down);
text('Class: '+ Animalia_class[user], 905, 600+ move_down);
text('Family: '+ Animalia_family[user], 905, 630+ move_down);
text('System: '+ Animalia_system[user], 905, 660+ move_down);


//Draw Bottom Graph Starts(y = 500)

  textSize(30);
  //console.log(name);
  //text(name + '-',0,530);
  

  textSize(20);
  stroke(200);
  //strokeWeight(2);
  rectMode(CORNERS);


if (count > 0) {
  line(10,540,10,740);
  if ((mouseX>10) && (mouseX<60) && (mouseY>720) && (mouseY<740)) {
    fill(0);
  }
  //text('1900',15,740);
  text('1900',15,560 + a);
  if (560 + a < 740) {
    a+= 2;
  }

  fill(200);
}

if (count > 1) {
  line(10 + a_x,540,10 + a_x,740);
  if ((mouseX>195) && (mouseX<245) && (mouseY>720) && (mouseY<740)) {
    fill(0);
  }  
  text('1930',15 + a_x,560 + a_y);
  if (10 + a_x < 195) {
    a_x+= 2;
  }

  if (560 + a_y < 740) {
    a_y+= 2;
  }
  fill(200);
}

if (count > 2) {
  line(195 + a_x_1,540,195 + a_x_1,740);
  if ((mouseX>380) && (mouseX<430) && (mouseY>720) && (mouseY<740)) {
    fill(0);
  }  
  text('1960',200 + a_x_1,560 + a_y_1);
  if (195 + a_x_1 < 380) {
    a_x_1+= 2;
  } 
  if (560 + a_y_1 < 740) {
    a_y_1+= 2;
  }   
  fill(200);
}

if (count > 3) {
  line(380 + a_x_2,540,380 + a_x_2,740);
  if ((mouseX>565) && (mouseX<615) && (mouseY>720) && (mouseY<740)) {
    fill(0);
  }  
  text('1990',385 + a_x_2,560 + a_y_2);
  if (380 + a_x_2 < 565) {
    a_x_2+= 2;
  } 
  if (560 + a_y_2 < 740) {
    a_y_2+= 2;
  }   
  fill(200);

}

if (count > 4) {
  line(565 + a_x_3,540,565 + a_x_3,740);
  if ((mouseX>750) && (mouseX<800) && (mouseY>720) && (mouseY<740)) {
    fill(0);
  }  
  text('2017',570 + a_x_3,560 + a_y_3);
  if (565 + a_x_3 < 750) {
    a_x_3+= 2;
  } 
  if (560 + a_y_3 < 740) {
    a_y_3+= 2;
  }   
  fill(200);  
  fill(200);
}

  if (occurrences.length > 0) {
    for (var i = 0; i <= occurrences.length; i++) {
      var y_h = map(occurrences[i],0,max(occurrences),720,540);
      if (i > 0) {
        var y_h_last = map(occurrences[i-1],0,max(occurrences),720,540);
        line(10 + 185 * i,y_h,10 + 185 * (i-1),y_h_last);
      }      
      if (k == 1) {
        fill(220,20,60);
      }
      if (k == 2) {
        fill(220,20,60);
      }
      if (k == 3) {
        fill(160,82,45);
      }
      if (k == 4) {
        fill(46,139,87);
      }
      if (k == 5) {
        fill(220,20,60);
      }
      if (k == 5) {
        fill(220,20,60);
      }
      ellipse(10 + 185 * i, y_h, 10,10);
    }
 
    fill(200);
    text(num_occurences, 760, 560);
    text('ocurences', 760, 580);

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


function mouseClicked() {

  //currentyear_index += 1;
  //Determine the Year
  if ((mouseX>10) && (mouseX<60) && (mouseY>720) && (mouseY<740)) {
    currentyear = '1900';
  }
  if ((mouseX>195) && (mouseX<245) && (mouseY>720) && (mouseY<740)) {
    currentyear = '1930';
  }  
  if ((mouseX>380) && (mouseX<430) && (mouseY>720) && (mouseY<740)) {
    currentyear = '1960';
  }  
  if ((mouseX>565) && (mouseX<615) && (mouseY>720) && (mouseY<740)) {
    currentyear = '1990';
  }  
  if ((mouseX>750) && (mouseX<800) && (mouseY>720) && (mouseY<740)) {
    currentyear = '2017';
  }              

  console.log(currentyear);  

  // Identify Kingdom Selected
  if ((mouseX>810) && (mouseX<900) && (mouseY>30+ move_down) && (mouseY<50+ move_down)) {
    k = 1;
    pos = 0;
  }
  if ((mouseX>810) && (mouseX<900) && (mouseY>60+ move_down) && (mouseY<80+ move_down)) {
    k = 2;
    pos = 0;
  }
  if ((mouseX>810) && (mouseX<900) && (mouseY>90+ move_down) && (mouseY<110+ move_down)) {
    k = 3;
    pos = 0;
  }
  if ((mouseX>810) && (mouseX<900) && (mouseY>120+ move_down) && (mouseY<140+ move_down)) {
    k = 4;
    pos = 0;
  }
  if ((mouseX>810) && (mouseX<900) && (mouseY>150+ move_down) && (mouseY<170+ move_down)) {
    k = 5;
    pos = 0;
  }
  if ((mouseX>810) && (mouseX<900) && (mouseY>180+ move_down) && (mouseY<200+ move_down)) {
    k = 6;
    pos = 0;
  }

  //count ++;
    // map.eachLayer(function (layer) {
    //   map.removeLayer(layer);
    // });
  if (k > 0) {
    for (var i = 0; i <= Plantae_names.length - 1; i++) {
      if ((mouseX>900) && (mouseX<1050) && (mouseY>pos+30 + 20 * i+ move_down) && (mouseY<pos+50 + 20 * i+ move_down)) {
        occurrences = [];
        count = 1;
        user = i;
      }
    }
  }
      //user = 200;
      query();

    if (currentSpecies > 0) {
      var section1 = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=';
      var section2 = '&year=1600,';
      var section3 = '&bin=';
      //var currentyear = '1950';
      var map_url = [section1,currentSpecies,section2,currentyear,section3,currentstyle];
      var species_map = join(map_url,"");
      //species_map = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=212&basisOfRecord=MACHINE_OBSERVATION&years=1900,1950&bin=square&squareSize=128&style=purpleYellow-noborder.poly';
      console.log(species_map);
      //var species_map = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=2441056&years=1600,2017&bin=square&squareSize=50&style=purpleYellow-noborder.poly';
      L.tileLayer(species_map, {
      }).addTo(mymap);

    }
    // if (currentSpecies > 0) {
    //   var section1 = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?year=';
    //   var section2 = '&taxonKey=,';
    //   var section3 = '&bin='
    //   var map_url = [section1,currentSpecies,section2,currentyear,section3,currentstyle];
    //   var species_map = join(map_url,"");
    //   //species_map = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=212&basisOfRecord=MACHINE_OBSERVATION&years=1900,1950&bin=square&squareSize=128&style=purpleYellow-noborder.poly';
    //   console.log(species_map);
    //   //var species_map = 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=2441056&years=1600,2017&bin=square&squareSize=50&style=purpleYellow-noborder.poly';
    //   L.tileLayer(species_map, {
    //   }).addTo(mymap);

    // }   


 
}

function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  pos -= event.delta;
  if (pos > 0) {
    pos = 0;
  }
  if (pos < -(50 + 20 * Animalia_names.length)) {
    pos = -(-600+20 * Animalia_names.length);
  }
  //uncomment to block page scrolling
  return false;
}


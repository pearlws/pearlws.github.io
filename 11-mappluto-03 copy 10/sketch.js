var table;
// arrays with category names
var industry_names = [];
var race_names = [];
var race_total = 0;
var gender_names = [];
var gender_total = 0;
var age_names = [];
var age_total = 0;
// collect all data in one array
var data_all = [];
// collect most likely in each category
var likelyindustry = 0;
var ind = 0;
var likelyrace = 0;
var r = 0;
var likelygender = 0;
var g = 0;
var likelyage = 0;
var a = 0;
var masterhuman = 0;
// relative likelyhoods
var race_rat = 1;
var gender_rat = 1;
var age_rat = 1;
var human_rat = 1;
// current user categories
var race = 0;
var gender = 0;
var age = 1;
// geo variables
var o_x = 1000/2;
var o_y = 150;
var space_y = 300;
var y_h = 10 // height of buttons
var x_total = 600; //total length of buttons;
var x_w_race = 0;
var x_w_gender = 0;
var x_w_age = 0;

var questions = ['What race are you?','What gender are you?', 'How old are you?', ''];

var x_w_race_last = 0;
var on = 0;
var p = 0;
var p_1 = o_y + space_y;
var p_2 = o_y + space_y * 2;

var p_3 = 0;
var p_4 = o_y + space_y;
var p_5 = o_y + space_y * 2;


// we will preload the data set. 
// That will display "Loading..." on the screen so we see something's happening
function preload(){
	table = loadTable('PLUTODD16v1-Manhattan-mi.csv', 'csv', 'header');
}

// In this program everything happens in setup
function setup() {
	createCanvas(1000, 2000);
  background(255);
  frameRate(30);
  loadData(); 
  x_w_race = x_total / (race_names.length - 5);
  x_w_race_last = (width - x_total)/2 ;
}

function loadData() {

  for (var i = 0; i < table.getRowCount() / 288; i += 1) {
    industry_names[i] = table.getString(i * 288, 4);
  }

  for (var i = 0; i < 288 / 24; i += 1) {
    race_names[i] = table.getString(i * 24, 6);
  }  

  for (var i = 0; i < 24 / 8; i += 1) {
    gender_names[i] = table.getString(i * 8, 8);
  }

  for (var i = 0; i < 7; i += 1) {
    age_names[i] = table.getString(i, 10);
  } 

  //collect all data in one array

  for (var x = 0; x < table.getRowCount() / 288; x += 1) {
    data_all[x] = [];
    for (var y = 0; y < 288 /24; y+= 1){
      data_all[x][y] = [];
      for (var z = 0; z < 24 /8; z+= 1) {
        data_all[x][y][z] = [];
        for (var w = 0; w < 7; w += 1) {
          data_all[x][y][z][w] = table.getString((x*288) + (y*24) + (z*8) + w,12);
        }
      }
    }
  }

  //calculate most likely race, gender and age

  for (var i = 1; i < 288 / 24; i += 1) {
    if (int(data_all[0][i][0][6]) > likelyrace) {
      r = i;
      likelyrace = data_all[0][i][0][6];
      //race = likelyrace;
    }
  } 

  for (var i = 1; i < 24 / 8; i += 1) {
    if (int(data_all[0][0][i][6]) > likelygender) {
      likelygender = data_all[0][0][i][6];
      //gender = likelygender;
    }
  } 

  for (var i = 0; i < 6; i += 1) {
    if (int(data_all[0][0][0][i]) > likelyage) {
      likelyage = data_all[0][0][0][i];
      //age = likelyage;
    }   
  } 

  //calculate most likely race, gender and age combined

  for (var y = 1; y < 288 /24; y+= 1){
    for (var z = 1; z < 24 /8; z+= 1) {
      for (var w = 0; w < 6; w += 1) {
        if (int(data_all[0][y][z][w]) > masterhuman) {
            masterhuman = int(data_all[0][y][z][w]);
            r = y;
            g = z;
            a = w;
        }
      }
    }
  }  

  //calculate total who reseponded 

  for (var i = 1; i <=7; i++) {
    race_total += int(data_all[0][i][0][6]);
  }

  for (var i = 1; i <=2; i++) {
    gender_total += int(data_all[0][0][i][6]);
  }

  for (var i = 0; i <=5; i++) {
    age_total += int(data_all[0][0][0][i]);
  }  

  console.log(race_names);
  console.log(age_names);
  console.log(gender_names);
  console.log(gender_total);
  console.log(race_names[race+1]);

}


function draw() {
  background(255);
  textSize(40);
  textAlign(CENTER);
  fill(51);
  noStroke();
  textStyle(BOLD);
  text('What is the likelihood that you own a company?',width/2,100);
  textStyle(NORMAL);
  
  // origin
  fill(255);
  strokeWeight(4);
  stroke(70,130,180);
  ellipse(o_x,o_y,15,15);

  // if ( on == 1) {
  //   x_w_race_last = (width - x_total)/2 ;
  //   for (var i = 1; i <= 7; i++) {
  //     x_w_race = x_total * (int(data_all[0][i][0][6]) / race_total);
  //     rect(x_w_race_last, o_y + space_y,x_w_race,y_h,2,2,2,2);
  //     var number_of_lines = int(data_all[0][i][0][6])/150000;
  //     for (var x = 0; x <= number_of_lines; x++){
  //       stroke(255,0,50);
  //       line(o_x, o_y, x_w_race_last + x * (x_w_race/ number_of_lines) ,o_y+space_y); 
  //     } 
  //     x_w_race_last += x_w_race ;
  //   }
 
  // } 

 
  if (on == 0) { 
    //race lines
    x_w_race = x_total/7;
    for (var i = 1; i <= 7; i++) {
      buttonsRect();
      rect((width - x_total)/2 + (i - 1) * x_w_race, o_y+p,x_w_race,y_h,2,2,2,2);
      var number_of_lines = int(data_all[0][i][0][6])/150000;
      backgroundLines();
      if (i == race){
        userLines();
      }
      for (var x = 0; x <= number_of_lines; x++){
        line(o_x, o_y, (width - x_total)/2 + (i - 1) * x_w_race + x * (x_w_race/ number_of_lines) ,o_y+p); 
      } 
      x_w_race_last += x_w_race ;      
    } 

    if (p < space_y) {
      p+= 6;
    }
  }


  if (on >=1) {

    x_w_race_last = (width - x_total)/2 ;
    for (var i = 1; i <= 7; i++) {
      buttonsRect();
      backgroundLines();
      x_w_race = x_total * (int(data_all[0][i][0][6]) / race_total);
      if (i == race){
        buttonsPick();
      }
      rect(x_w_race_last, o_y + space_y,x_w_race,y_h,2,2,2,2);
      var number_of_lines = int(data_all[0][i][0][6])/150000;
      if (i == race){
        userLines();
      }      
      for (var x = 0; x <= number_of_lines; x++){
        line(o_x, o_y, x_w_race_last + x * (x_w_race/ number_of_lines) ,o_y+space_y); 
      } 
      x_w_race_last += x_w_race ;
    }

    //lines between race and gender
    x_w_gender = x_total/2;
    var number_of_lines_last_gender = [0,0];
    x_w_race_last = (width - x_total)/2 ;
    for (var i = 1; i <= 7; i++) {
      x_w_race = x_total * (int(data_all[0][i][0][6]) / race_total);
      var race_lines = int(data_all[0][i][0][6])/150000;
      var number_of_lines_last = 0;
      buttonsRect();
      if (i == race){
        buttonsPick();
      }
      rect(x_w_race_last, o_y + space_y,x_w_race,y_h,2,2,2,2);
      for (var x = 1; x<=2; x++){
        buttonsRect();
        rect((width - x_total)/2 + (x-1) * x_w_gender, o_y+p_1,x_w_gender,y_h,2,2,2,2);
        var gender_lines = int(data_all[0][0][x][6])/150000;
        number_of_lines = int(data_all[0][i][x][6])/150000;
        for (var y = 0; y <= number_of_lines; y++){
          backgroundLines();
          if (x == gender && i == race){
        	userLines();
      	  }
          var x1 = x_w_race_last + (y + number_of_lines_last) * (x_w_race/ race_lines);
          var y1 = o_y+space_y + y_h;
          var x2 = (width - x_total)/2 + (x-1) * x_w_gender + (y + number_of_lines_last_gender[x - 1]) * (x_w_gender/ (gender_lines+7));
          var y2 = o_y + p_1;
          line(x1,y1,x2,y2);
        }
        number_of_lines_last = number_of_lines;
        number_of_lines_last_gender[x - 1] += number_of_lines;
      } 
      x_w_race_last +=x_w_race;   
    }

    if (p_1 < space_y * 2) {
      p_1+= 6;
    }

  }


  if (on >= 2) {

      for (var x = 1; x<=2; x++){
        buttonsRect();
        if (x == gender) {
          buttonsPick();
        }
        rect((width - x_total)/2 + (x-1) * x_w_gender, o_y+p_1,x_w_gender,y_h,2,2,2,2);
        }    
    //lines between gender and age
    x_w_age = x_total/6;
    var number_of_lines_last_age = [0,0,0,0,0,0];
    for (var i = 1; i <= 2; i++) {
      var gender_lines = int(data_all[0][0][i][6])/150000;
      var number_of_lines_last = 0;
      for (var x = 0; x<=5; x++){
        buttonsRect();
        rect((width - x_total)/2 + (x) * x_w_age, o_y+p_2,x_w_age,y_h,2,2,2,2);
        var age_lines = int(data_all[0][0][0][x])/150000;
        number_of_lines = int(data_all[0][0][i][x])/150000;
        for (var y = 0; y <= number_of_lines; y++){
          backgroundLines();
          if (x == age && i == gender){
        	userLines();
      	  }          
          var x1 = (width - x_total)/2 + (i - 1) * x_w_gender + (y + number_of_lines_last) * (x_w_gender/ gender_lines);
          var y1 = o_y+space_y*2 + y_h;
          var x2 = (width - x_total)/2 + (x) * x_w_age + (y + number_of_lines_last_age[x]) * (x_w_age/ age_lines);
          var y2 = o_y + p_2;
          line(x1,y1,x2,y2);
        }
        number_of_lines_last += number_of_lines;
        number_of_lines_last_age[x] += number_of_lines;
      }    
    }

    if (p_2 < space_y * 3) {
      p_2+= 6;
    }               
  }



  // origin buttons
  if (mouseX > o_x - 10 && mouseX < o_x + 10 && mouseY > o_y - 10 && mouseY < o_y + 10) {
  	stroke(135,206,250);
    fill(135,206,250);
  	strokeWeight(4);
  	ellipse(o_x,o_y,20,20);
  }


  // questions
  stroke(100);
if (on >= 0) {
  stroke(100,0,0);
  textSize(18);
  textAlign(RIGHT);
  text(questions[0], (width - x_total)/2 - 10, o_y + p_3 * (0 + 1) + 10);

  textSize(18);
  textAlign(LEFT);
  text(nf(race_rat * 100,2,1) + '%',(8.1)*width/10,o_y + p_3 + 10);
  textSize(12);
  text(race_names[race],(8.1)*width/10,o_y + p_3 + 25);

  if (p < space_y) {
    p_3 += 6;
  }


}
if (on >= 1) {
  textSize(18);
  textAlign(RIGHT);  
  text(questions[1], (width - x_total)/2 - 10, o_y + p_4 * (0 + 1) + 10);

  textSize(18);
  textAlign(LEFT);
  text(nf(gender_rat * 100,2,1) + '%',(8.1)*width/10,o_y + p_4 + 10);
  textSize(12);
  text(gender_names[gender],(8.1)*width/10,o_y + p_4 + 25); 
  if (p_4 < 2 * space_y) {
    p_4 += 6;
  }   
}

if (on >= 2) {
      for (var x = 1; x<=2; x++){
        buttonsRect();
        if (x == gender) {
          buttonsPick();
        }
        rect((width - x_total)/2 + (x-1) * x_w_gender, o_y+p_1,x_w_gender,y_h,2,2,2,2);
        } 
  textSize(18);
  textAlign(RIGHT);  
  text(questions[2], (width - x_total)/2 - 10, o_y + p_5  + 10);

  textSize(18);
  textAlign(LEFT);
  text(nf(age_rat * 100,2,1) + '%',(8.1)*width/10,o_y + p_5 + 10);
  textSize(12);
  text(age_names[age],(8.1)*width/10,o_y + p_5 + 25); 

  if (p_5 < 3 * space_y) {
    p_5 += 6;
  }  
}

if (on >= 3) {
      for (var x = 0; x<=5; x++){
        buttonsRect();
        if (x == age) {
          buttonsPick();
        }
        rect((width - x_total)/2 + (x) * x_w_age, o_y+p_2,x_w_age,y_h,2,2,2,2);
      }
  textSize(25);
  textAlign(CENTER);
  text(nf(human_rat * 100,2,1) + '%',(width - x_total + x_w_age)/2 + age * x_w_age, o_y + space_y * 3 + 50);  
  
  textSize(12);
  textAlign(LEFT);
  text(race_names[race],(width - x_total + x_w_age)/2 + age * x_w_age,o_y + space_y * 3 + 65);
  text(gender_names[gender],(width - x_total + x_w_age)/2 + age * x_w_age,o_y + space_y * 3 + 80);
  text(age_names[age],(width - x_total + x_w_age)/2 + age * x_w_age,o_y + space_y * 3 + 95);
}


if (on < 1) {
  // race buttons
  for (var i = 1; i <= 7; i++) {
    if (mouseX > (width - x_total)/2 + (i - 1) * x_w_race && mouseX < (width - x_total)/2 + (i - 1) * x_w_race + x_w_race && mouseY > o_y+space_y && mouseY < o_y+space_y + y_h ) {
      buttonText();
      race = i;
      race_rat = int(data_all[0][i][0][6])/race_total;
      text(race_names[i], (width - x_total + x_w_race)/2 + (i - 1) * x_w_race, o_y + space_y + 35);
      buttonsPick();
      rect((width - x_total)/2 + (i - 1) * x_w_race, o_y+space_y,x_w_race,y_h + 6,2,2,2,2);
    }

  }
}

if (on < 2) {
  // gender buttons
  for (var i = 1; i <= 2; i++) {
    if (mouseX > (width - x_total)/2 + (i - 1) * x_w_gender && mouseX < (width - x_total)/2 + (i - 1) * x_w_gender + x_w_gender && mouseY > o_y + space_y * 2 && mouseY < o_y+space_y * 2 + y_h ) {
      buttonText();
      gender = i;
      gender_rat = int(data_all[0][0][i][6])/int(data_all[0][0][0][6]);
      text(gender_names[i], (width - x_total + x_w_gender)/2 + (i - 1) * x_w_gender, o_y + space_y * 2 + 35);      
      buttonsPick();
      rect((width - x_total)/2 + (i - 1) * x_w_gender, o_y+space_y*2,x_w_gender,y_h + 6,2,2,2,2);
    }

  } 

}

if (on < 3) {
  // age buttons
  for (var i = 0; i <= 5; i++) {
    if (mouseX > (width - x_total)/2 + i * x_w_age && mouseX < (width - x_total)/2 + i * x_w_age + x_w_age && mouseY > o_y + space_y * 3 && mouseY < o_y+space_y * 3 + y_h ) {
      buttonText();
      age = i;
      age_rat = int(data_all[0][0][0][i-1])/int(data_all[0][0][0][6]);
      text(age_names[i], (width - x_total + x_w_age)/2 + i * x_w_age, o_y + space_y * 3 + 35);
      buttonsPick();
      rect((width - x_total)/2 + i * x_w_age, o_y+space_y*3,x_w_age,y_h + 6,2,2,2,2);
    }

  }  

}

}

function mouseClicked() {

  if (on < 3) {
   on += 1;
  }

  for (var i = 1; i <= 7; i++) {
    if (mouseX > (width - x_total)/2 + (i - 1) * x_w_race && mouseX < (width - x_total)/2 + (i - 1) * x_w_race + x_w_race && mouseY > o_y+space_y && mouseY < o_y+space_y + y_h ) {
      race = i;
      race_rat = int(data_all[0][i][0][6])/race_total;
      human_rat = int(data_all[0][race][gender][age]) / int(data_all[0][0][0][6]);

    }

    if (mouseX > (width - x_total)/2 + (i - 1) * x_w_gender && mouseX < (width - x_total)/2 + (i - 1) * x_w_gender + x_w_gender && mouseY > o_y + space_y * 2 && mouseY < o_y+space_y * 2 + y_h ) {
      gender = i;
      gender_rat = int(data_all[0][0][i][6])/gender_total;
      human_rat = int(data_all[0][race][gender][age]) / int(data_all[0][0][0][6]);
    }

    if (mouseX > (width - x_total)/2 + (i - 1) * x_w_age && mouseX < (width - x_total)/2 + (i - 1) * x_w_age + x_w_age && mouseY > o_y + space_y * 3 && mouseY < o_y+space_y * 3 + y_h ) {
      age = i - 1;
      age_rat = int(data_all[0][0][0][i-1])/int(data_all[0][0][0][6]);
      human_rat = int(data_all[0][race][gender][age]) / int(data_all[0][0][0][6]);
    }  

  }

  if (mouseX > o_x - 10 && mouseX < o_x + 10 && mouseY > o_y - 10 && mouseY < o_y + 10) {
  	race = 0;
  	gender = 0;
  	age = 0;
  	on = 0;
    p = 0;
    p_1 = o_y + space_y;
    p_2 = o_y + 2 * space_y;

    p_3 = 0;
    p_4 = o_y + space_y;
    p_5 = o_y + 2 * space_y;    
  }  
}

function backgroundLines() {
  strokeWeight(0.2);
  stroke(50);
}

function userLines() {
  stroke(255,140,0);
  strokeWeight(10);
}

function buttonsRect() {
  strokeWeight(0.2);
  stroke(255);
  fill(70,130,180);
}

function buttonText() {
  textSize(15);
  textAlign(CENTER);
  fill(50);
  noStroke();
}

function buttonsPick() {
  strokeWeight(3);
  stroke(135,206,250);
  fill(135,206,250);
}

function userLines() {
  strokeWeight(0.75);
  stroke(255,128,0);
}

function question() {
  strokeWeight(0.2);
  stroke(100);
}




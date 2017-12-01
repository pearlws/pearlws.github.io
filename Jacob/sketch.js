
function setup() {
  createCanvas(1200, 3000);

}

function draw() {
  background(255);
  fill(200,100);
  stroke(200);
  for (var v = 0; v <= 24; v++){
    for (var i = 0; i <= 29; i++) {
      ellipse(100+30*v,40 + (i * 60),15,60);
    }
  }

  fill(200);
  //translate(100 + 20 * hour(), 70 + (60 * minute()));
  if (minute() < 29 ) {
    translate(100+30*hour(), 70 + (60 * minute()));
    if (minute() % 2 == 0) {
      rotate(-(second()*PI/60) + PI);
    } else {
      rotate((second()*PI/60) + PI);
    }
  } else {
    translate(100+30*hour(), 70 + (60 * (60 - minute())));
    if (minute() % 2 == 0) {
      rotate(-(second()*PI/60) + TWO_PI);
    } else {
      rotate((second()*PI/60) + TWO_PI);
    }
  }

  ellipse(0,30,15,60);




  // if (minute() % 2 == 0) {
  //   rotate(-(second()*PI/60) + PI);
  // } else {
  //   rotate((second()*PI/60) + PI);
  // }
  // ellipse(0,30,10,60);


}


  // fill(200);
  // translate(100, 70);
  // rotate((second()*PI/60) - PI);
  // ellipse(0,30,10,60);
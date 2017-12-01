
function setup() {

  createCanvas(850, 850);
  stroke(255);

}

function draw() {
  background(255);
  stroke(0);
  fill(0);

  for (var i = 0; i <= 60; i++){
    line(10 + (i*14),height-14 - (i*14),10 + 14 + (i*14),height-14 - (i*14));
    line(10 + (i*14),height - (i*14),10 + (i*14),height-14 - (i*14));
  }


  for (var i = 0; i < minute(); i++) {
    fill(0);
    rect(-2 + (60*14),height-12 - (i*14),10,10);
  }

  for (var v = 0; v < hour(); v++) {
    for (var i = 0; i <= 60; i++) {
      fill(0);
      rect(-2 - ((v+1)*14) + (60*14),height-12 - (i*14),10,10);
  }

  }

  fill(200);
  rect(-2 + (second()*14),height-12 - (second()*14),10,10);


}


function setup() {

  createCanvas(6000, 2400);
  background(255);
  stroke(255);
  var x = 10;
  var y = 100;
  for (var h = 0; h < hour(); h++){
    for (var m = 0; m <= 60; m++) {
      for (var s = 0; s <=60; s++) {
        stroke(h*(255/24),m*(255/60),s*(255/60));
        line(x+(m*60)+s,y + (55*h),x+(m*60)+s,y + (55*h) + 50);

      }
    }
  }

  for (var m = 0; m <= minute(); m++) {
    for (var s = 0; s <=60; s++) {
        stroke(hour()*(255/24),m*(255/60),s*(255/60));
        line(x+(m*60)+s,y + (55*hour()),x+(m*60)+s,y + (55*hour()) + 50);

      }
    }
 
}

function draw() {
	var x = 10;
  	var y = 100;
	//background(255);
  	stroke(hour()*(255/24),minute()*(255/60),second()*(255/60));
  	strokeWeight(1);
  	line(x+(minute()*60)+second(),y + (55*hour()),x+(minute()*60)+second(),y + (55*hour()) + 50);
  	x = x+1;
  	y = y+1;

}

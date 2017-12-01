
function setup() {
  createCanvas(1500, 1200);
  background(250);
  var len = 100;
}

function draw() {
  background(250);
  stroke(0);
  strokeWeight(2);

  // if (hour() == 8) {
  // 	drawzero(10,800,minute());
  // 	draweight(260,800,minute());
  // }  

  if (hour() == 0) {
    drawzero(10,800,minute());
    drawzero(260,800,minute());
  }

  if (hour() == 1) {
    drawzero(10,800,minute());
    drawone(260,800,minute());
  }

  if (hour() == 2) {
    drawzero(10,800,minute());
    drawtwo(260,800,minute());
  }

  if (hour() == 3) {
    drawzero(10,800,minute());
    drawthree(260,800,minute());
  }

  if (hour() == 4) {
    drawzero(10,800,minute());
    drawfour(260,800,minute());
  }

  if (hour() == 5) {
    drawzero(10,800,minute());
    drawfive(260,800,minute());
  }

  if (hour() == 6) {
    drawzero(10,800,minute());
    drawsix(260,800,minute());
  }

  if (hour() == 7) {
    drawzero(10,800,minute());
    drawseven(260,800,minute());
  }

  if (hour() == 8) {
    drawzero(10,800,minute());
    draweight(260,800,minute());
  }

  if (hour() == 9) {
    drawzero(10,800,minute());
    drawnine(260,800,minute());
  }

  if (hour() == 10) {
    drawone(10,800,minute());
    drawzero(260,800,minute());
  }

    if (hour() == 11) {
    drawone(10,800,minute());
    drawone(260,800,minute());
  }

  if (hour() == 12) {
    drawone(10,800,minute());
    drawtwo(260,800,minute());
  }

  if (hour() == 13) {
    drawone(10,800,minute());
    drawthree(260,800,minute());
  }

  if (hour() == 14) {
    drawone(10,800,minute());
    drawfour(260,800,minute());
  }

  if (hour() == 15) {
    drawone(10,800,minute());
    drawfive(260,800,minute());
  }

  if (hour() == 16) {
    drawone(10,800,minute());
    drawsix(260,800,minute());
  }

  if (hour() == 17) {
    drawone(10,800,minute());
    drawseven(260,800,minute());
  }

  if (hour() == 18) {
    drawone(10,800,minute());
    draweight(260,800,minute());
  }

  if (hour() == 19) {
    drawone(10,800,minute());
    drawnine(260,800,minute());
  }

  if (hour() == 20) {
    drawtwo(10,800,minute());
    drawzero(260,800,minute());
  }

  if (hour() == 21) {
    drawtwo(10,800,minute());
    drawone(260,800,minute());
  }

  if (hour() == 22) {
    drawtwo(10,800,minute());
    drawtwo(260,800,minute());
  }

  if (hour() == 23) {
    drawtwo(10,800,minute());
    drawthree(260,800,minute());
  }

  if (hour() == 24) {
    drawtwo(10,800,minute());
    drawfour(260,800,minute());
  } 

// set minutes 

  if (minute() == 0) {
    drawzero(660,800,second());
    drawzero(910,800,second());
  }

  if (minute() == 1) {
    drawzero(660,800,second());
    drawone(910,800,second());
  }

  if (minute() == 2) {
    drawzero(660,800,second());
    drawtwo(910,800,second());
  }

  if (minute() == 3) {
    drawzero(660,800,second());
    drawthree(910,800,second());
  }

  if (minute() == 4) {
    drawzero(660,800,second());
    drawfour(910,800,second());
  }

  if (minute() == 5) {
    drawzero(660,800,second());
    drawfive(910,800,second());
  }

  if (minute() == 6) {
    drawzero(660,800,second());
    drawsix(910,800,second());
  }

  if (minute() == 7) {
    drawzero(660,800,second());
    drawseven(910,800,second());
  }

  if (minute() == 8) {
    drawzero(660,800,second());
    draweight(910,800,second());
  }

  if (minute() == 9) {
    drawzero(660,800,second());
    drawnine(910,800,second());
  }

  if (minute() == 10) {
    drawone(660,800,second());
    drawzero(910,800,second());
  }

    if (minute() == 11) {
    drawone(660,800,second());
    drawone(910,800,second());
  }

  if (minute() == 12) {
    drawone(660,800,second());
    drawtwo(910,800,second());
  }

  if (minute() == 13) {
    drawone(660,800,second());
    drawthree(910,800,second());
  }

  if (minute() == 14) {
    drawone(660,800,second());
    drawfour(910,800,second());
  }

  if (minute() == 15) {
    drawone(660,800,second());
    drawfive(910,800,second());
  }

  if (minute() == 16) {
    drawone(660,800,second());
    drawsix(910,800,second());
  }

  if (minute() == 17) {
    drawone(660,800,second());
    drawseven(910,800,second());
  }

  if (minute() == 18) {
    drawone(660,800,second());
    draweight(910,800,second());
  }

  if (minute() == 19) {
    drawone(660,800,second());
    drawnine(910,800,second());
  }

  if (minute() == 20) {
    drawtwo(660,800,second());
    drawzero(910,800,second());
  }

  if (minute() == 21) {
    drawtwo(660,800,second());
    drawone(910,800,second());
  }

  if (minute() == 22) {
    drawtwo(660,800,second());
    drawtwo(910,800,second());
  }

  if (minute() == 23) {
    drawtwo(660,800,second());
    drawthree(910,800,second());
  }

  if (minute() == 24) {
    drawtwo(660,800,second());
    drawfour(910,800,second());
  }

  if (minute() == 25) {
    drawtwo(660,800,second());
    drawfive(910,800,second());
  }

  if (minute() == 26) {
    drawtwo(660,800,second());
    drawsix(910,800,second());
  }

  if (minute() == 27) {
    drawtwo(660,800,second());
    drawseven(910,800,second());
  }

  if (minute() == 28) {
    drawtwo(660,800,second());
    draweight(910,800,second());
  }

  if (minute() == 29) {
    drawtwo(660,800,second());
    drawnine(910,800,second());
  }

  if (minute() == 30) {
    drawthree(660,800,second());
    drawzero(910,800,second());
  }

    if (minute() == 31) {
    drawthree(660,800,second());
    drawone(910,800,second());
  }

  if (minute() == 32) {
    drawthree(660,800,second());
    drawtwo(910,800,second());
  }

  if (minute() == 33) {
    drawthree(660,800,second());
    drawthree(910,800,second());
  }

  if (minute() == 34) {
    drawthree(660,800,second());
    drawfour(910,800,second());
  }

  if (minute() == 35) {
    drawthree(660,800,second());
    drawfive(910,800,second());
  }

  if (minute() == 36) {
    drawthree(660,800,second());
    drawsix(910,800,second());
  }

  if (minute() == 37) {
    drawzero(660,800,second());
    drawseven(910,800,second());
  }

  if (minute() == 38) {
    drawthree(660,800,second());
    draweight(910,800,second());
  }

  if (minute() == 39) {
    drawthree(660,800,second());
    drawnine(910,800,second());
  }

  if (minute() == 40) {
    drawfour(660,800,second());
    drawzero(910,800,second());
  }
  
    if (minute() == 41) {
    drawfour(660,800,second());
    drawone(910,800,second());
  }

  if (minute() == 42) {
    drawfour(660,800,second());
    drawtwo(910,800,second());
  }

  if (minute() == 43) {
    drawfour(660,800,second());
    drawthree(910,800,second());
  }

  if (minute() == 44) {
    drawfour(660,800,second());
    drawfour(910,800,second());
  }

  if (minute() == 45) {
    drawfour(660,800,second());
    drawfive(910,800,second());
  }

  if (minute() == 46) {
    drawfour(660,800,second());
    drawsix(910,800,second());
  }

  if (minute() == 47) {
    drawfour(660,800,second());
    drawseven(910,800,second());
  }

  if (minute() == 48) {
    drawfour(660,800,second());
    draweight(910,800,second());
  }

  if (minute() == 49) {
    drawfour(660,800,second());
    drawnine(910,800,second());
  }

  if (minute() == 50) {
    drawfive(660,800,second());
    drawzero(910,800,second());
  }

    if (minute() == 51) {
    drawfive(660,800,second());
    drawone(910,800,second());
  }

  if (minute() == 52) {
    drawfive(660,800,second());
    drawtwo(910,800,second());
  }

  if (minute() == 53) {
    drawfive(660,800,second());
    drawthree(910,800,second());
  }

  if (minute() == 54) {
    drawfive(660,800,second());
    drawfour(910,800,second());
  }

  if (minute() == 55) {
    drawfive(660,800,second());
    drawfive(910,800,second());
  }

  if (minute() == 56) {
    drawfive(660,800,second());
    drawsix(910,800,second());
  }

  if (minute() == 57) {
    drawfive(660,800,second());
    drawseven(910,800,second());
  }

  if (minute() == 58) {
    drawfive(660,800,second());
    draweight(910,800,second());
  }

  if (minute() == 59) {
    drawfive(660,800,second());
    drawnine(910,800,second());
  }

  if (minute() == 60) {
    drawsix(660,800,second());
    drawzero(910,800,second());
  }
  // drawzero(660,800,second());
  // drawtwo(910,800,second());


}

function drawzero(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	line(x+150,y-150- (i*5),x,y- (i*5));
    	//line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }

function drawone(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	//line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	//line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	//line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	//line(x+150,y-150- (i*5),x,y- (i*5));
    	//line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }

function drawtwo(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}
    	line(x,y- (i*5),x+200,y- (i*5));
    	//line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	//line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	line(x+150,y-150- (i*5),x,y- (i*5));
    	line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }

function drawthree(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	//line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	//line(x+150,y-150- (i*5),x,y- (i*5));
    	line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }  

function drawfour(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	//line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	//line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	//line(x+150,y-150- (i*5),x,y- (i*5));
    	line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  } 

function drawfive(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	//line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	//line(x+150,y-150- (i*5),x,y- (i*5));
    	line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  } 

function drawsix(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	//line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	line(x+150,y-150- (i*5),x,y- (i*5));
    	line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }

function drawseven(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	//line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	//line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	//line(x+150,y-150- (i*5),x,y- (i*5));
    	//line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }     

function draweight(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	line(x+150,y-150- (i*5),x,y- (i*5));
    	line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }

function drawnine(x,y,tim) {
	for (var i = 0; i <= tim; i++) {
		if (i == 0){
			strokeWeight(4);
		} else {
			strokeWeight(2);
		}		
    	line(x,y- (i*5),x+200,y- (i*5));
    	line(x+200,y - (i*5),x+350,y-150-(i*5));
    	line(x+350,y-150- (i*5),x+500,y-300- (i*5));
    	line(x+500,y-300- (i*5),x+300,y-300- (i*5));
    	line(x+300,y-300- (i*5),x+150,y-150- (i*5));
    	//line(x+150,y-150- (i*5),x,y- (i*5));
    	line(x+150,y-150- (i*5),x+350,y-150- (i*5));
  	}
  }













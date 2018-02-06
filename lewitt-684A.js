
function start(thickness) {
  createCanvas(340, 340);
	colorMode(HSB)
  
  var startX = 0;
  var startY = 0;
  var endX = 0;
  var endY = 0;
  

//quad1
  
  for (var i = 0; i <= 170; i = i + thickness) {
  startX = i;
  startY = 0;
  endX = i;
  endY = 165;
  strokeWeight(thickness)
  stroke(random(0,75),100,100)
  line(startX, startY, endX, endY);
}
  
//quad2
  
  for (i = 0; i <= 170; i = i + thickness) {
    startX = 170;
    startY = i;
    endX = 340;
    endY = i;
    strokeWeight(thickness)
  	stroke(random(75,150),100,random(50,100))
    line(startX, startY, endX, endY);
  }
  
//quad3
  
  for (var k = 0; k <= 160; k = k + thickness+2) {
  startX = 0;
  startY = 170+k;
  endX = k;
  endY = 170;
  strokeWeight(thickness)
 	stroke(random(150,225),100,random(50,100))
  line(startX, startY, endX, endY);
	}

  for (k = thickness; k <= 170; k = k + thickness +2) {
    startX = 170
    startY = 170+k
    endX = k
    endY = 340
    strokeWeight(thickness)
 		stroke(random(150,225),100,random(50,100))
    line(startX, startY, endX, endY);
  }

  //quad4
  
  for (k = 0; k <= 160; k = k + thickness+2) {
    startX = 170+k;
    startY = 340;
    endX = 170;
    endY = 340-k;
    strokeWeight(thickness)
    stroke(random(225,300),100,random(50,100))
    line(startX, startY, endX, endY);
  }

  for (k = thickness; k <= 170; k = k + thickness+2) {
    startX = 170+k
    startY = 170
    endX = 340
    endY = 340-k
    strokeWeight(thickness)
 		stroke(random(225,300),100,random(50,100))
    line(startX, startY, endX, endY);
  }
  
	strokeWeight(thickness)
  stroke(0,0,100)
  line(170,0,170,340)
  line(0,170,340,170)
} 

start(30)

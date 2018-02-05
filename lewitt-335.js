function setup(){
  colorMode(HSB);
  createCanvas(340, 340);
  fill(0)
  rect(0,0,width,height)

  var startX = 0;
	var startY = 0;
  var endX = 0;
  var endY = 0;
  
  for (var i = 5; i <= width-10; i = i + 5) {
    startX = i;
    startY = 0;
    endX = i;
    endY = height;
    stroke(0,0,100)
    line(startX, startY, endX, endY);
  }
  
  fill(0)
  stroke(0,0,100)
  rect(70,70,200,200)
 
  for (var j = 70; j <= 270; j = j + 5) {
  startX = 70;
  startY = j;
  endX = 270;
  endY = j;
  line(startX, startY, endX, endY);
	}
}

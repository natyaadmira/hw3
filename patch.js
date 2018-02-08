function NatyaPatch(x, y) {
  noFill();
  colorMode(HSB)
  stroke(238);
  fill(55,100,100)
  rect(x, y, 300, 300);

 	while(true){
 	 	noFill();
  	stroke(random(300), 100, 100);
   	strokeWeight(random(4,10))
  	bezier(random(300), random(300), random(300), random(300), random(300), random(300), random(300), random(300));
 	}
}

background(255);
NatyaPatch(0, 0); // draw patch at upper-left

background(255);
NatyaPatch(width-301, height-301); // draw patch at lower-right

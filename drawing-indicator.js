function setup() { 
  createCanvas(400, 400);
	background(255)
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
		ellipse(40,40,diameter,diameter)
  } else if (key == 'G') {
    fill(0, 255, 0);
		ellipse(40,40,diameter,diameter)
  } else if (key == 'B') {
    fill(0, 0, 255); 
		ellipse(40,40,diameter,diameter)
	} else if (key == 'P') {
    fill(140, 0, 255); 
		ellipse(40,40,diameter,diameter)
	} else if (key == 'O') {
    fill(255, 127, 0); 
		ellipse(40,40,diameter,diameter)
	} else if (key == 'Y') {
    fill(255, 240, 0); 
		ellipse(40,40,diameter,diameter)
	} else if (key == 'E') {
    fill(255, 255, 255); 
		ellipse(40,40,diameter,diameter)
	}	else if (key == '1') {
    diameter = 10; 
		ellipse(40,40,diameter,diameter)
	}	else if (key == '2') {
    diameter = 20
		ellipse(40,40,diameter,diameter)
	}	else if (key == '3') {
    diameter = 30
		ellipse(40,40,diameter,diameter)
	}
}

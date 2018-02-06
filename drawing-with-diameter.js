function setup() { 
  createCanvas(400, 400);
	background(0)
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
		noStroke()
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
	} else if (key == 'P') {
    fill(140, 0, 255); 
	} else if (key == 'O') {
    fill(255, 127, 0); 
	} else if (key == 'Y') {
    fill(255, 240, 0); 
	}	else if (key == '1') {
    diameter = 10
	}	else if (key == '2') {
    diameter = 20
	}	else if (key == '3') {
    diameter = 30
	}
}

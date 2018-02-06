function setup() { 
  createCanvas(400, 400);
} 

var diameter = 30;

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
	}
}

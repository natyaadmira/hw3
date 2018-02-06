function setup(){
  createCanvas(340,340)
  background(0)

var startX = 0
var startY = 0
var distanceApart = 20

  for (var j=0; j<=15; j=j+1){
    for (var i=0; i<=15; i=i+1){
      ellipse(startX+distanceApart,startY+distanceApart,15,15)
      startY = startY + distanceApart
    }
    startX = startX+distanceApart
    startY = 0
  }
}

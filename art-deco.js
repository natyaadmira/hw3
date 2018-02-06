var Xstart = 30
var Ystart = 40
var distance = 15

for(var j=1; j<=5; j=j+1){
  for(var i=10; i<=60; i=i+distance){
    noFill()
    rect(Xstart,Ystart,i,i)
    Xstart = Xstart - (distance/2)
    Ystart = Ystart - (distance/2)
  }
  Xstart = Xstart + 95
  Ystart = 40
}

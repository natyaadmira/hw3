for (var i = 0; i <= (width/2)-10; i = i + 10) {
  var startX = 170-i;
  var startY = i;
  var endX = startX + (i*2);
  var endY = i;
  line(startX, startY, endX, endY);
}

for (var i = 0; i <= (width/2-10); i = i + 10) {
  var startX = i
  var startY = 170+i;
  var endX = (width-i);
  var endY = 170+i;
  line(startX, startY, endX, endY);
}

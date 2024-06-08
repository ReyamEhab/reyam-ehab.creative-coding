function setup() {
  createCanvas(400, 400);
}

function draw()  {
  //sky dark blue background
  background(65, 67, 95);
  translate(width/2,height/2);//Move the orgin to the center
  //Set the alien body on the center 
  //light green 
  fill(178, 255, 102)
  //strokeweight for outlines
  strokeWeight(2)
  //Draw the alien body 
  //uses beginShape, endShape,bezierVertex to draw the alien body
  beginShape()
  //Top point
  vertex(0, -100);
  //Right side curve
  bezierVertex(70, -90, 70, 50, 90, 100)
  //Left side curve
  bezierVertex(-50, 70, -50, -70, 0, -100)
  endShape(CLOSE)
  //Set the alien eyes color
  //black
  fill(0)
  //Left eye 
  ellipse(-10, -40, 20, 20)
  //Right eye
  ellipse(20, -40, 20, 20)
  //Set the alien antenna color 
  //white
  stroke(255)
  strokeWeight(3)
  //Draw the alien antennas
  line(-10, -100, -20, -150)
  line(10, -100, 20, -150)
//set the alien mouth color
  noFill()
  stroke(255)
  //Draw the alien mouth 
  beginShape()
  //start from the left 
  vertex(-10, -10)
  bezierVertex(-30, -20, 30, -20, 10, -10)//uper curve
  bezierVertex(30, 0, -30, 0, -10, -10)//Lower curve
  endShape()
  
}

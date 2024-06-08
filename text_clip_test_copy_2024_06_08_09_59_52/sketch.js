let cnv;

function setup() {
  cnv = createCanvas(400, 400); //creates a square area of 400 pixels by 400 pixels to draw on.
}

function draw() {
  let bgColor = map(mouseX, 0, width, 0, 255); // Map mouseX to background color
  background(bgColor); // Set background color based on mouseX

  drawingContext.save();
  rectMode(CENTER); //ensures that shapes are drawn from their center
  circle(200, 200, 200); //draws a circle with its center at (200, 200) and a diameter of 200 pixels.

  drawingContext.clip();
  push(); //push() and pop() like starting and ending a new drawing layer.
  textSize(25); //sets the size of the text to 25 pixels
  textAlign(CENTER, CENTER); // makes sure the text is centered.
  text('Creative Coding', 200, 200); //writes "Creative Coding" at the center of the circle.
  pop();
  drawingContext.restore();
}

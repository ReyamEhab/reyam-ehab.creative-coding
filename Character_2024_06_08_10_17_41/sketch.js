function setup() {
  createCanvas(400, 400); // Set up the canvas with dimensions 400x400 pixels
}

function draw() {
  background(220); // Set the background color to a light grey (220)
  
  ellipse(200, 250, 50, 50); // Draw an ellipse at coordinates (200, 250) with width and height 50 pixels
  fill(250, 0, 0); // Set the fill color to red (RGB: 250, 0, 0)
  
  triangle(200, 285, 150, 350, 250, 350); // Draw a triangle with vertices at (200, 285), (150, 350), and (250, 350)
  fill(255); // Set the fill color to white
  
  line(200, 275, 200, 350); // Draw a line from (200, 275) to (200, 350)
  line(200, 350, 180, 400); // Draw a line from (200, 350) to (180, 400)
  line(200, 350, 180, 400); // Draw another line from (200, 350) to (180, 400) (redundant)
  line(150, 250, 200, 300); // Draw a line from (150, 250) to (200, 300)
  line(250, 250, 200, 300); // Draw a line from (250, 250) to (200, 300)
  line(200, 350, 180, 300); // Draw a line from (200, 350) to (180, 300)
}

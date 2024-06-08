function setup() {
  createCanvas(400, 400); // Set up the canvas with dimensions 400x400 pixels
}

function draw() {
  background(220); // Set the background color to a light grey (220)
  
  // Face
  fill(255); // Set the fill color to white for the face
  stroke(0, 0, 255); // Set the stroke color to blue (RGB: 0, 0, 255)
  strokeWeight(5); // Set the stroke weight (thickness) to 5 pixels
  rect(50, 100, 300, 250); // Draw a rectangle at (50, 100) with width 300 pixels and height 250 pixels for the face
  
  // The eyes
  fill(255); // Set the fill color to white for the eyes
  stroke(0); // Set the stroke color to black
  rect(100, 150, 50, 50); // Draw the left eye at (100, 150) with width and height 50 pixels
  rect(250, 150, 50, 50); // Draw the right eye at (250, 150) with width and height 50 pixels
  
  // The eye balls
  fill(0); // Set the fill color to black for the eyeballs
  rect(120, 170, 10, 10); // Draw the left eyeball at (120, 170) with width and height 10 pixels
  rect(270, 170, 10, 10); // Draw the right eyeball at (270, 170) with width and height 10 pixels
  
  // The mouth
  rect(100, 250, 200, 75); // Draw a rectangle at (100, 250) with width 200 pixels and height 75 pixels for the mouth
}

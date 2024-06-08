var img; // Declare a variable to hold the image

function preload() {
  // The preload function is used to handle asynchronous loading of external files, ensuring they are fully loaded before the program continues
  img = loadImage("park.jpg"); // Load the image "park.jpg" and assign it to the variable img
}

function setup() {
  createCanvas(400, 400); // Create a canvas with dimensions 400x400 pixels
  background(0); // Set the background color to black (0)
}

function draw() {
  background(0); // Reset the background color to black at the beginning of each frame
  image(img, 0, 0); // Draw the image at coordinates (0, 0)

  var v = map(mouseX, 0, width, 0, 5); // Map the mouse's X position (mouseX) from the range [0, width] to the range [0, 5]
  filter(BLUR, v); // Apply a blur filter to the canvas with a radius determined by the mapped value v
}

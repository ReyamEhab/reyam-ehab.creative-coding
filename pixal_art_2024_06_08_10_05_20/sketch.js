var img, x, y;//This line declares three variables img, x, and y to store the image and mouse coordinates respectively.

function preload() {
  img = loadImage("park.jpg");// Preloading the image before setup.
}

function setup() {
  createCanvas(400, 400);// Creating a canvas of size 400x400 pixels.
  background(0);// Setting the background color to black.
  noStroke();// Disabling stroke (outline) for shapes.
}

function draw() {
  background(0);// Refreshing the background to black.
  x = mouseX;// Updating the x-coordinate with the current mouse position.
  y = mouseY;// Updating the y-coordinate with the current mouse position.
  image(img, 0, 0);// Drawing the loaded image at the top-left corner of the canvas.
  var c = get(x, y);// Getting the color of the pixel at the current mouse position.
  fill(c);// Setting the fill color to the color obtained from the image pixel.
  rect(x, y, 100, 100); // Draw a rectangle instead of an ellipse
}

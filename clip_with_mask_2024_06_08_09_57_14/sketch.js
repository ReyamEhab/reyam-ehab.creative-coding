let img;

function preload() {
  img = loadImage("street.jpg"); // Load your image
}

function setup() {
  createCanvas(600, 600); // Main canvas size

  // Resize the image to fit the design
  img.resize(300, 300);
}

function draw() {
  // Interactive gradient background
  createInteractiveBackground();

  // Center coordinates for the image
  let centerX = width / 2;
  let centerY = height / 2;

  // Draw the image inside a rectangle using clipping
  let cnvClip = createGraphics(300, 300); // Create a sub-canvas for clipping
  cnvClip.rect(0, 0, 300, 300); // Define the clipping area as a rectangle
  cnvClip.canvas.getContext("2d").clip(); // Clip the context to the rectangle
  cnvClip.image(img, 0, 0, 300, 300); // Draw the image inside the clipped area
  image(cnvClip, centerX - 150, centerY - 150); // Place the sub-canvas centered on the main canvas

  // Draw the image inside a 2 rectangle   using masking
  let cnvMask = createGraphics(400, 400); // Create another sub-canvas for masking
  cnvMask.rect(50, 50, 150, 300); // Draw a rectangle in the center of the sub-canvas
  cnvMask.rect(200, 50, 150, 300);
  //cnvMask.triangle(200, 100, 300, 300, 100, 300); // Draw a triangle
  img.mask(cnvMask); // Apply the mask to the image
  //image(img, centerX - 200, centerY - 200); // Place the masked image centered on the main canvas
}

function createInteractiveBackground() {
  // Draw a dynamic background pattern that changes with the mouse position
  let gridSize = 50; // Size of the grid cells
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      // Calculate distance from the mouse to the grid cell
      let distance = dist(mouseX, mouseY, x + gridSize / 2, y + gridSize / 2);
      // Map distance to color intensity
      let colorIntensity = map(distance, 0, width / 2, 255, 50);
      // Set fill color based on distance
      fill(200, colorIntensity, 200 - colorIntensity, 150);
      noStroke();
      // Draw a rotating rectangle
      push();
      translate(x + gridSize / 2, y + gridSize / 2);
      rotate(radians(distance % 70));
      rectMode(CENTER);
      rect(0, 0, gridSize * 0.8, gridSize * 0.8);
      pop();
    }
  }
}

// Declare an empty array to store the mouse interaction trails
let trails = [];
// Set the initial speed of the trails to 5
let speed = 5;
// Define an array of color options for the trails
let colorOptions = ['pink'];
// Set the initial color of the trails to red
let currentColor = ('pink');

// Setup function to initialize the canvas
function setup() {
  // Create a canvas that fills the entire window
  createCanvas(windowWidth, windowHeight);
}

// Draw function to continuously draw the trails
function draw() {
  // Set the background color to black
  background(0);

  // Loop through each trail in the trails array
  for (let i = 0; i < trails.length; i++) {
    // Get the current trail
    let trail = trails[i];
    // Set the fill color of the trail to its color property
    fill(trail.color);
    // Draw an ellipse at the trail's position with a size of 10x10 pixels
    ellipse(trail.x, trail.y, 10, 10);

    // Move the trail's position based on its speed and direction
    trail.x += trail.dx * speed;
    trail.y += trail.dy * speed;
  }
}

// Function called when the mouse is dragged
function mouseDragged() {
  // Create a new trail object with the current mouse position,
  // a random horizontal speed (-1 to 1), a random vertical speed (-1 to 1),
  // and the current color
  let trail = {
    x: mouseX,
    y: mouseY,
    dx: random(-1, 1),
    dy: random(-1, 1),
    color: currentColor
  };
  // Add the new trail object to the trails array
  trails.push(trail);
}

// Function to save the trails as an image file
function saveTrails() {
  saveCanvas('mouse_trails', 'png');
}

// Function to change the color of the trails randomly
function changeColor() {
  // Get a random index from the colorOptions array
  let index = floor(random(colorOptions.length));
  // Set the current color to the color at the random index
  currentColor = colorOptions[index];
}

// Function to change the speed of the trails
function changeSpeed(value) {
  // Set the speed to the value passed as an argument
  speed = value;
}

// Function called when a key is pressed
function keyPressed() {
  // If the pressed key is the spacebar
  if (key === ' ') {
    // Change the color of the trails
    changeColor();
  }
}

// Function called when the mouse wheel is scrolled
function mouseWheel(event) {
  // Increase or decrease the speed based on the scroll direction
  speed += event.delta / 100;
  // Ensure that the speed stays within a certain range (1 to 10)
  speed = constrain(speed, 1, 10);
}

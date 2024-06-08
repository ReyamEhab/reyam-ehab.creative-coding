// Declare global variables
let font;
let points = [];
let msg = "Welcome to bathspa university!";
let size = 100;
let r = 15;
let angle = 0;
let t = 0;
let displayText = false; // Flag to control text display

// Define array of colors
let colors = [
  [227, 242, 253],
  [187, 222, 251],
  [144, 202, 249],
  [100, 181, 246],
  [30, 136, 229],
  [25, 118, 210],
  [21, 101, 192],
  [13, 71, 161]
];

//preload function to load font before setup
function preload() {
  font = loadFont("fonts/Roboto-Black.ttf");
}

//load the font from a file
function setup() {
  // creating a canvas to fill the entire browse window
  createCanvas(windowWidth, windowHeight);
  //generate points representing the outline of the text
  points = font.textToPoints(msg, 0, 0, size, {
    sampleFactor: 0.5,
    simplifyThreshold: 0.0
  });
  angleMode(DEGREES);
}

function draw() {
  // Generate dynamic background using repetition, decision-making, and randomization
  for (let i = 0; i < 5; i++) {
    //Randomly generate position for shape
    let posX = random(width);
    let posY = random(height);

    // Decision-making: Randomly draw ellipse or rectangle
    if (random(1) < 0.5) {
      // draw ellipse
      let circleSize = random(100, 500); // Random size
      let circleColor = random(colors); // Random color from the array
      fill(circleColor[0], circleColor[1], circleColor[2]); // Unpack the RGB values
      ellipse(posX, posY, circleSize, circleSize);
    } else {
      // draw rectangle
      let rectSize = random(50, 200); // Random size
      let rectColor = random(colors); // Random color from the array
      fill(rectColor[0], rectColor[1], rectColor[2]); // Unpack the RGB values
      rect(posX, posY, rectSize, rectSize);
    }
  }

  // Draw text only when mouse is clicked
  if (displayText) {
    stroke(3, 4, 94);
    strokeWeight(2);
    let x = mouseX + r * cos(angle);
    let y = mouseY + r * sin(angle);
    translate(20, 300);
    for (let i = 0; i < points.length; i++) {
      line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
    }

    fill(255);
    textSize(size);
    textFont(font);
    text(msg, mouseX, mouseY); // draw text at mouse position
  }

  // Update rotation
  let increment = 5 * sin(t);
  t++;
  angle += increment; // update rotation angle
}

// Function to toggle text display on mouse click
function mouseClicked() {
  displayText = !displayText;
}

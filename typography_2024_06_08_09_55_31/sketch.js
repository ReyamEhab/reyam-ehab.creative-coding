let logoPic;
let font1;
let message = 'Bath spa univercity!';
let messageX;
const xSpeed = 2;
const ySpeed = 0.05;
const amplitude = 100;
const verticalLetterSpacing = 10;
let font;

function preload() {
  logoPic = loadImage("Bath_Spa_University_logo.svg.png");
  font1 = loadFont("BigShouldersStencilText-VariableFont_wght.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Draw interactive background pattern
  drawInteractiveBackground();

  // Draw the logo
  image(logoPic, width / 2 - 50, height / 2 - 100, 100, 100);

  // Draw the interactive text
  drawInteractiveText();
}

function drawInteractiveBackground() {
  let gridSize = 50;

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let distToMouse = dist(mouseX, mouseY, x, y);
      let shapeSize = map(distToMouse, 0, 300, 20, 5);
      let alphaValue = map(distToMouse, 0, 300, 255, 50);

      fill(random(255), random(255), random(255), alphaValue);
      noStroke();
      ellipse(x + gridSize / 2, y + gridSize / 2, shapeSize, shapeSize);
    }
  }
}

function drawInteractiveText() {
  let textSizeBase = 50;
  let maxSizeIncrease = 20;
  let distToMouse = dist(mouseX, mouseY, width / 2, height / 2 + 100);
  let sizeIncrease = map(distToMouse, 0, 300, maxSizeIncrease, 0);
  let currentTextSize = textSizeBase + sizeIncrease;

  fill(255);
  textSize(currentTextSize);
  textFont(font1);
  textAlign(CENTER, CENTER);
  text("Bath Spa!", width / 2, height / 2 + 100);
}

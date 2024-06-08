let screen = 0; // Initialize variable for screen state
let circles = []; // Array to store falling circles
let speed = 3; // Speed at which circles fall
let score = 0; // Player's score
let stars = []; // Array to store background stars
let cursorRect; // Object representing the cursor
let flash = false; // Flag for flashing effect
let resource = 100; // Magic meter representing player's resource
let particles = []; // Array to store particle objects for explosion effects
let particlesLifetime = 30; // Lifetime of particles in frames

function setup() {
  createCanvas(windowWidth, windowHeight); // Create canvas
  textFont('Georgia'); // Change font style
  // Create stars for the background
  for (let i = 0; i < 200; i++) {
    stars.push(new Star());
  }
  cursorRect = new CursorRect(); // Initialize cursor object
}

function draw() {
  // Display different screens based on the value of 'screen'
  if (screen === 0) {
    startScreen();
  } else if (screen === 1) {
    gameOn();
  } else if (screen === 2) {
    winScreen();
  } else if (screen === 3) {
    loseScreen();
  }
}

function startScreen() {
  drawUniverseBackground(); // Display background with stars
  fill(255);
  textAlign(CENTER);
  textSize(32); // Increase font size
  // Display welcome message and game instructions
  text('WELCOME TO STRIVING FOR THE STARS', width / 2, height / 2);
  textSize(24); // Set smaller font size for instructions
  text('Collect 15 STARS to win.', width / 2, height / 2 + 40);
  text('Use the red bar to catch falling stars.', width / 2, height / 2 + 80);
  text('Avoid letting stars fall to the bottom.', width / 2, height / 2 + 120);
  text('Click to start', width / 2, height / 2 + 160);
  reset(); // Reset game variables
}

function gameOn() {
  drawUniverseBackground(); // Display background with stars
  cursorRect.display(); // Display cursor rectangle
  fill(255);
  textSize(16); // Set font size for score and resource
  // Display score and magic meter
  text("STAR = " + score, 40, 20);
  text("SCORE = " + resource, 50, 40); // Display magic meter
  
  // Update and display falling circles
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].display();
    circles[i].move();
    // Check if a circle is caught by the cursor
    if (circles[i].isCaught(cursorRect)) {
      createExplosion(circles[i].x, circles[i].y); // Create explosion effect
      circles.splice(i, 1); // Remove caught circle
      score++; // Increase score
      resource -= 10; // Decrease resource when catching a circle
    } else if (circles[i].y >= height) {
      circles.splice(i, 1); // Remove circle if it reaches the bottom
      if (score < 15) {
        screen = 3; // Go to lose screen if score is less than 15
      }
    }
  }
  
  // Generate new circles if all are caught or every 60 frames
  if (circles.length === 0 || frameCount % 60 === 0) {
    pickRandom();
  }
  
  // Go to win screen if score reaches 15
  if (score >= 15) {
    screen = 2;
  }
  
  updateAndDisplayParticles(); // Update and display particles for explosions
}

function winScreen() {
  drawTwinklingStarsBackground(); // Draw twinkling stars background
  
  fill(255);
  textAlign(CENTER);
  textSize(32); // Increase font size for win screen
  text('YOU WIN', width / 2, height / 2); // Display win message
  text('click to play again', width / 2, height / 2 + 40); // Prompt to play again
}

function loseScreen() {
  drawUniverseBackground(); // Display background with stars
  fill(255);
  textAlign(CENTER);
  textSize(32); // Increase font size for lose screen
  text('GAME OVER', width / 2, height / 2); // Display game over message
  textSize(24); // Set smaller font size for final score and prompt
  text("SCORE = " + score, width / 2, height / 2 + 40); // Display final score
  text('click to play again', width / 2, height / 2 + 80); // Prompt to play again
}

function mousePressed() {
  // Change screen based on current screen
  if (screen === 0) {
    screen = 1; // Start game
  } else if (screen === 2 || screen === 3) {
    screen = 0; // Restart game
  }
}

function reset() {
  // Reset game variables
  score = 0;
  circles = [];
  resource = 100;
}

function pickRandom() {
  let newX = random(20, width - 20);
  let newY = -20;  // Start from the top
  circles.push(new Circle(newX, newY)); // Add new circle to the array
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.color = color(random(255), random(255), random(255)); // Random color
  }

  display() {
    // Display circle
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  move() {
    this.y += speed; // Move circle downwards
  }

  isCaught(cursorRect) {
    // Check if circle is caught by the cursor
    return this.y + this.radius > height - cursorRect.height &&
           this.x > cursorRect.x - cursorRect.width / 2 &&
           this.x < cursorRect.x + cursorRect.width / 2;
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3);
    this.color = color(random(200, 255)); // Bright white stars
    this.twinkleFactor = random(0.5, 1.5); // Factor for twinkling effect
  }

  display() {
    this.twinkle(); // Twinkle effect
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  twinkle() {
    this.size = this.size * this.twinkleFactor; // Change size for twinkling effect
    if (this.size > 3 || this.size < 1) {
      this.twinkleFactor = 1 / this.twinkleFactor; // Reverse twinkle factor if size exceeds bounds
    }
  }

  move() {
    this.y += 0.5; // Slowly move the star downwards
    if (this.y > height) {
      this.y = 0; // Reset to top if it moves off screen
      this.x = random(width); // Randomize x position
    }
  }
}

function drawUniverseBackground() {
  background(0); // Dark space background
  // Display stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
  }
}

function drawTwinklingStarsBackground() {
  background(0); // Dark space background
  // Display and move stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
    stars[i].move();
  }
}

class CursorRect {
  constructor() {
    this.width = 80;
    this.height = 20;
    this.color = color(255, 0, 0); // Red cursor color
  }

  display() {
    // Display cursor rectangle at mouse position
    fill(this.color);
    rectMode(CENTER);
    rect(mouseX, height - 10, this.width, this.height);
  }

  get x() {
    return mouseX; // Get the x-coordinate of the mouse
  }
}

function createExplosion(x, y) {
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(x, y)); // Create 20 new particles at position (x, y) and add them to the particles array
  }
}

function updateAndDisplayParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // Update particle position
    particles[i].display(); // Display particle
    if (particles[i].lifespan <= 0) {
      particles.splice(i, 1); // Remove particle from array if its lifespan is less than or equal to 0
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x; // X-coordinate of the particle
    this.y = y; // Y-coordinate of the particle
    this.vx = random(-2, 2); // Random velocity in the x-direction
    this.vy = random(-2, 2); // Random velocity in the y-direction
    this.lifespan = particlesLifetime; // Lifespan of the particle
    this.color = color(random(255), random(255), random(255)); // Random color for the particle
  }

  update() {
    this.x += this.vx; // Update x-coordinate based on velocity
    this.y += this.vy; // Update y-coordinate based on velocity
    this.lifespan--; // Decrease lifespan
  }

  display() {
    fill(this.color); // Set fill color
    noStroke(); // No stroke for the particle
    ellipse(this.x, this.y, 5, 5); // Display particle as a small ellipse
  }
}

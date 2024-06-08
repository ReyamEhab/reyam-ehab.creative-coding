let mic, fft;
let numBars = 50;
let barWidth, barHeight;
let barSpacing = -1;
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn(); // Microphone to listen to sounds
  mic.start(); // Start listening to the microphone
  fft = new p5.FFT(); // Tool to analyze the sounds
  fft.setInput(mic); // Use the microphone for sound analysis
  barWidth = width / numBars - barSpacing; // Calculate how wide each bar will be
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle(random(width), random(height))); // Create 200 particles at random positions
  }
}


function draw() {
  background(255); // Deep blue background
  drawBackgroundParticles();// Draw all the particles that move around
  drawAudioVisualizer();//Draw the bars that move with the sound
  interactWithParticles(); // Make the particles react to the mouse
}

function drawBackgroundParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].display();// Show the particle
    particles[i].move(); // Move the particle
  }
}

function drawAudioVisualizer() {
  let spectrum = fft.analyze();// Get the sound data
  for (let i = 0; i < numBars; i++) {
    barHeight = map(spectrum[i], 0, 255, 0, height);// Map the sound data to bar height
    let col = lerpColor(color('blue'), color('green'),// Color changes from blue to green
    i / numBars);
    fill(col); // Fill the bars with the color
    noStroke(); // No border around the bars
    rect(i * (barWidth + barSpacing), height - barHeight, barWidth, barHeight); // Draw the bars
  }
}

function interactWithParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].interact(mouseX, mouseY);// Make particles react to the mouse
  }
}

class Particle {
  constructor(x, y) {
    this.x = x; // Particle's x position
    this.y = y; // Particle's y position
    this.vx = random(-1, 1); // Random x speed
    this.vy = random(-1, 1); // Random y speed
    this.size = random(5, 15); // Random size
    this.color = color(random(50), random(255), random(50, 255), random(150, 255)); // Random color
  }

  display() {
    noStroke(); // No border around the particles
    fill(this.color); // Fill with the particle's color
    rect(this.x, this.y, this.size, this.size); // Draw the particle
  }

  move() {
    this.x += this.vx; // Move particle by vx
    this.y += this.vy; // Move particle by vy
    if (this.x < 0 || this.x > width) {
      this.vx *= -1; // Bounce back if it hits the left or right edge
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1; // Bounce back if it hits the top or bottom edge
    }
  }

  interact(mx, my) {
    let d = dist(this.x, this.y, mx, my); // Distance to the mouse
    if (d < 100) { // If the particle is close to the mouse
      let angle = atan2(this.y - my, this.x - mx); // Calculate the angle to the mouse
      this.vx += cos(angle); // Change vx to move away from the mouse
      this.vy += sin(angle); // Change vy to move away from the mouse
    }
  }
}

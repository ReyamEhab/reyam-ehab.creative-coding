function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  noStroke();
  let gridSize = 20;
  
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      // Random decision
      let decision = random(1);
      if (decision > 0.5) { // If decision is greater than 0.5, fill with color
        fill(random(255), random(255), random(255));
        ellipse(x + gridSize / 2, y + gridSize / 2, gridSize * 0.8); // Draw circle at center of grid cell
      }
    }
  }
}

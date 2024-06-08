var table; // Declare a variable to store tabular data

function preload() { // Preload function to load external resources before setup
    table = loadTable("My_Passions.csv", "csv"); // Load a CSV file named "My_Passions.csv" and assign it to the table variable
}

function setup() { // Setup function to initialize the canvas and other settings
    createCanvas(420,380); // Create a canvas with dimensions 390x325 pixels
    noLoop(); // Prevent draw from looping automatically
    drawBackgroundPattern(); // Call the drawBackgroundPattern function to draw the background pattern
    noStroke(); // Disable stroke for shapes
    textFont("Arial"); // Set the font for text to Arial
}

function draw() { // Draw function to render graphics and animations
    textSize(25); // Set the size of the text to 25 pixels
    textStyle(BOLD); // Set the text style to bold
    fill(255); // Set the fill color to white (RGB: 255, 255, 255)
    text('Exploring My Passions', 70, 50); // Display the text "Exploring My Passions" at coordinates (70, 50)
    textSize(14); // Set the size of the text to 14 pixels
    textStyle(NORMAL); // Set the text style to normal
    translate(0, 275); // Translate the origin of the coordinate system to (0, 275)
    var data = table.getRow(1).arr; // Get the data from the second row of the table
    for (let i = 0; i < table.getColumnCount(); i++) { // Loop through each column of the table
        var rectHeight = map(data[i], 98.6, 101.2, 25, 175); // Map the data values to a range between 25 and 175
        translate(i + 90, 0); // Translate horizontally to position the bars
        let lerpAm = map(data[i], 98.6, 101.2, 0, 1); // Map the data values to a range between 0 and 1 for color interpolation
        let lerpCol = lerpColor(color("#dc2f02"), color("#ffba08"), lerpAm); // Interpolate color between red and yellow based on lerpAm
        textStyle(BOLD); // Set the text style to bold
        fill(lerpCol); // Set the fill color for the bars
        textAlign(CENTER); // Set text alignment to center
        rect(0, 0, 40, -rectHeight); // Draw a rectangle representing the data value
        text(data[i], 20, -rectHeight - 10); // Display the data value above the bar
        fill(255); // Set the fill color to white
        text(table.getRow(0).arr[i], 20, 20); // Display the column name below the bar
    }
}

function drawBackgroundPattern() { // Function to draw a background pattern using Perlin noise
    for (let x = 0; x < width; x += 20) { // Loop through the canvas width in steps of 20 pixels
        for (let y = 0; y < height; y += 20) { // Loop through the canvas height in steps of 20 pixels
            let noiseVal = noise(x * 0.01, y * 0.01); // Generate Perlin noise value for smooth variation
            let grey = map(noiseVal, 0, 1, 0, 255); // Map noise value to grayscale color range
            fill(grey); // Set fill color to grayscale value
            rect(x, y, 20, 20); // Draw a rectangle at each grid point
        }
    }
}

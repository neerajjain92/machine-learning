var data = [],
    m = 1, // This is Slope of a line in y = mx + b;
    b = 0; // This is called as the Y-intercept

// This function is being invoked by the p5.js
function setup() {
    createCanvas(600, 600);
}

// Function to handle mousePressed events
function mousePressed() {
    var x = map(mouseX, 0, width, 0, 1),
        y = map(mouseY, 0, height, 1, 0),
        point;

    console.log(mouseX + " :: " + x);
    console.log(mouseY + " :: " + y);
    point = createVector(x, y);
    data.push(point);
}

/**
 * As we know y = mx + b
 *
 * and with Linear Regression
 *
 * m = Sigma[i=0 to n] (x(i) - x(mean)) (yi - y(mean)) / sigma[i=0 to n] (x(i) - xMean)^2
 *
 * b = y(mean) - m * xMean;
 */
function linearRegression() {
    let i, xSum = 0, ySum = 0, xMean, yMean, numerator = 0, denominator = 0;
    for (i = 0; i < data.length; i++) {
        xSum += data[i].x;
        ySum += data[i].y;
    }

    xMean = xSum / data.length;
    yMean = ySum / data.length;

    // Calculation for Slope
    for (i = 0; i < data.length; i++) {
        numerator += (data[i].x - xMean) * (data[i].y - yMean);
        denominator += Math.pow(data[i].x - xMean, 2);
    }

    m = numerator / denominator;
    b = yMean - m * xMean;
}

// Utility function to draw the optimal line
function drawLine() {
    var x1 = 0, x2 = 1, y1 = m * x1 + b, y2 = m * x2 + b;

    // Mapping the x1, y1, x2, y2 values which ranges between 0 to 1 with the actual width and height of the canvas
    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);

    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 0, 1, height, 0);

    stroke(255, 0, 255);
    line(x1, y1, x2, y2);
}

// The code inside the draw() function runs continuously from top to bottom until the program is stopped.
function draw() {
    background(51);
    var x, y;

    for (let i = 0; i < data.length; i++) {
        x = map(data[i].x, 0, 1, 0, width);
        y = map(data[i].y, 0, 1, height, 0);
        fill(255);
        stroke(255);
        ellipse(x, y, 8, 8);
    }

    // Only if there are 2 points then draw the optimal line, but before that update the linear regression formula
    if (data.length > 1) {
        linearRegression();
        drawLine();
    }
}
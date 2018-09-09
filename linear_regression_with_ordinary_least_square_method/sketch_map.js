var col = 0;
function setup() {
	createCanvas(600, 400);
}

function draw() {
	//background 
	col = mouseX/3; 

	// Let's use map()
	col = map(mouseX, 0, 60 0, 0, 255);

	background(col);

	// ellipse
	fill(250, 118, 222);
	ellipse(mouseX, 200, 64, 64);


	// map function which takes 5 arguments
	// map(value, start1, stop1, start2, stop2)
	// value : which needs to be mapped
	// start1: lower Range of Values in this case of Canvas(600,400)
	// So start1 and stop 1 will be 0 and 600 respectively
	// Similarly we want to map these value to the color range which is RGB(0-255)	
	// So start2 and stop2 will be 0 and 255 respectively
	// map(mouseX, 0, 600, 0, 255);
}
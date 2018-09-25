function setup() {
	// put setup code here
	createCanvas(500, 500);
	background(0, 0, 0);

	textSize(20);
	textAlign(CENTER, CENTER);

}

function draw() {
	// put drawing code here
	//fill(255, 255, 255);
	// background(0, 0, 0); 
	// stroke(0, 0, 255);
	// fill(0, 255, 255);

	// Exercise 1
	// fill(255, 0, 0);
	// ellipse(width/2 - 10, height/2 - 10, 200, 200);

	// fill(255, 255, 255);
	// ellipse(width/2, height/2, 200, 200);


	// fill(random(255), random(255), random(255));
	// ellipse(random(width), random(height), 20, 20)



	let xpos = mouseX + random(-100, 100);
	let ypos = mouseY + random(-100, 100);

	fill(255, 0, 0);
	ellipse(xpos, ypos, 20, 20);

	fill(random(255), random(255), random(255));
	text("BONJOUR", xpos, ypos);
}


let snake;
let food;
let cols;
let rows;
let SCL = 20;

function setup() {
	createCanvas(600, 600);
	frameRate(10);
	cols = floor(width/SCL);
	rows = floor(height/SCL);
	snake = new Snake();
	pickFoodLocation();
}

function draw() {
	background(51);
	snake.update();
	stroke(51);
    fill(255, 0, 0);
	rect(food.x, food.y, SCL, SCL);
	
	if (snake.eatsFood(food)) {
		pickFoodLocation();
	}
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		snake.setMoveDirection(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.setMoveDirection(0, 1);
	} else if (keyCode === LEFT_ARROW) {
		snake.setMoveDirection(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		snake.setMoveDirection(1, 0);
	}
}

function pickFoodLocation() {
	food = createVector(
		floor(random(cols)),
		floor(random(rows))
	);
	food.mult(SCL); 

}
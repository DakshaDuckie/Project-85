var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")
var greenCar_height = 100;
var greenCar_width = 100;
var greenCar_x = 5;
var greenCar_y = 225;
var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greenCar_imgTag = new Image();
	greenCar_imgTag.onload = uploadgreencar;
	greenCar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greenCar_imgTag, greenCar_x, greenCar_y, greenCar_width, greenCar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if(greenCar_y >= 0)
	{
		greenCar_y = greenCar_y - 20;
		console.log("when up arrow pressed, x =" + greenCar_x + "y =" + greenCar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if(greenCar_y <= 400)
	{
		greenCar_y = greenCar_y + 20;
		console.log("when down arrow pressed, x =" + greenCar_x + "y =" + greenCar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if(greenCar_x >= 0)
	{
		greenCar_x = greenCar_x - 20;
		console.log("when left arrow pressed, x =" + greenCar_x + "y =" + greenCar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if(greenCar_x <= 800)
	{
		greenCar_x = greenCar_x + 20;
		console.log("when right arrow pressed, x =" + greenCar_x + "y =" + greenCar_y);
		uploadBackground();
		uploadgreencar();
	}
}

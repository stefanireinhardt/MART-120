// x and y for my character
var characterX = 400;
var characterY = 400;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for potential enemy #1
var shapeX = 100;
var shapeY = 400;
var shapeXSpeed;
var shapeYSpeed;


// x and y for potential enemy #2
var shape2X = 400;
var shape2Y = 100;
var shape2XSpeed;
var shape2YSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(800, 800);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(222,220,210);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left upper border
    rect(width-800,0,10,height-75);
    // bottom border
    rect(0, height-10,width, 10);
    // right border
    rect(width-10,0,10,height-10);

    // exit message
    textSize(40);
    text("EXIT", width-785,height-75)

    //character
    fill(119,56,99);
    circle(characterX,characterY,75);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // potential enemy #1
    fill(48,34,101);
    // draw the shape
    circle(shapeX, shapeY, 25);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 5);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

   // potential enemy #2
    fill(222,165,64);
    // draw the shape
    circle(shape2X, shape2Y, 25);

     // get a random speed when the it first starts
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

    
    // check to see if the character has left the exit
    if(characterX < 0 && characterY < width-15)
    {
        fill(60,54,91);
        stroke(5);
        textSize(85);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(255,255,255);
    circle(mouseShapeX, mouseShapeY, 45);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */
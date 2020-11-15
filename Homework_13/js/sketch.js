    var characterX = 50;
    var characterY = 50;
    var diameter = 25;

    var mousex = 0;
    var mousey = 0;

    var s = 83;
    var w = 87;
    var a = 65;
    var d = 68;

    var myXs = []; // create an array for the x coordinate
    var myYs = []; // create an array for the y coordinate
    var myDiameters = []; // create array for the diameter of circles

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

// x and y for potential enemy #3
var shape3X = 200;
var shape3Y = 70;
var shape3XSpeed;
var shape3YSpeed;

// x and y for potential enemy #4
var shape4X = 600;
var shape4Y = 250;
var shape4XSpeed;
var shape4YSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

    function setup() 
    {
      createCanvas(800, 800);
      // create a for loop here to create the circles
        for(var i = 0; i < 3; i++)
        {
            // get all the random numbers to create a circles
            myXs[i] = getRandomNumber(800);
            myYs[i] = getRandomNumber(600);
            myDiameters[i] = getRandomNumber(100);
        }
        // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }

    function draw() 
    {
      background(222,220,210);
      stroke(0);
      fill(24, 200, 29);
      
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
      
      circle(characterX, characterY, diameter);

      // call the function created
      controlCircle();

      circle(mousex, mousey, 35);

      for(var i = 0; i < myXs.length; i++)
      {
        // concentric circle randomly using arrays
        ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, 50, 120, 120, 120, 50, 120);
      }
   }

    /* This function controls all the variables of the circle */
    function controlCircle()
    {
      if (characterX >= 800) 
      {
        characterX = 50;
      }
      
      if (characterY >= 800) 
      {
        characterY = 50;
      }

      if (keyIsDown(s)) 
      {
        characterY += 10;
      } 
      else if (keyIsDown(w)) 
      {
        characterY -= 10;
      }

      if (keyIsDown(d)) 
      {
        characterX += 10;
      } 
      else if (keyIsDown(a)) 
      {
        characterX -= 10;
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

          // potential enemy #3
    fill(178,149,211);
    // draw the shape
    circle(shape3X, shape3Y, 35);

     // get a random speed when the it first starts
     shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
     shape3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 3);

    // move the shape
    shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }

      // potential enemy #4
    fill(164,97,77);
    // draw the shape
    circle(shape4X, shape4Y, 15);

     // get a random speed when the it first starts
     shape4XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 8);
     shape4YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 5);

    // move the shape
    shape4X += shape4XSpeed;
    shape4Y += shape4YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape4X > width)
    {
        shape4X = 0;
    }
    if(shape4X < 0)
    {
        shape4X = width;
    }
    if(shape4Y > height)
    {
        shape4Y = 0;
    }
    if(shape4Y < 0)
    {
        shape4Y = height;
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

    // This function updates the size of the circle
    function changeDiameter()
    {
        if (diameter < 200) 
        {
            diameter += 2;
        } 
        else if (diameter >= 200) 
        {
            diameter = 25;
        }

    }

    function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }

    function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

    // define ConcentricCircle function
    function ConcentricCircle(characterX,characterY, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
    {
        fill(93,197,176);
        circle(characterX,characterY,outer_diameter);
        fill(inner_red, inner_green, inner_blue);
        circle(characterX,characterY,inner_diameter);
    }
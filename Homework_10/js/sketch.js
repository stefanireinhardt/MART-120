// Hair Variables
var hairBLpointX = 155;
var hairBLpointY = 135;
var hairTpointX = 200;
var hairTpointY = 40;
var hairBRpointX = 245;
var hairBRpointY = 135;
var hairDirection = 3;
// Hair Fill Variables
var hairRfill = 245;
var hairBfill = 202;
var hairGfill = 100;

// Hips/Shirt Variables
var hipsSkirtX = 155;
var hipsSkirtY = 225;
var hipsSkirtDirection = -2;
// Hips/Shirt Fill Variables
var hipsRfill = 59;
var hipsBfill = 62;
var hipsGfill = 80;

// Torso/Body Variables
var torsoBLpointX = 150;
var torsoBLpointY = 295;
var torsoTpointX = 200;
var torsoTpointY = 200;
var torsoBRpointX = 255;
var torsoBRpointY = 295;
var torsoDirection = 1;
// Torso Fill Variables
var torsoRfill = 75;
var torsoBfill = 94;
var torsoGfill = 215;

// Shoulder Variables
var shoulderBLpointX = 150;
var shoulderBLpointY = 105;
var shoulderTpointX = 200;
var shoulderTpointY = 200;
var shoulderBRpointX = 250;
var shoulderBRpointY = 105;
var shoulderDirection = -4;
// Shoulder Fill Variables
var shoulderRfill = 75;
var shoulderBfill = 94;
var shoulderGfill = 215;

// Hand Variables
var handX = 286;
var handY = 85;
var handXDirection = 1;
var handYDirection = -1.5;
// Hand Fill Variables(239, 197, 163)
var handRfill = 239;
var handBfill = 197;
var handGfill = 163;

// Portrait Title Variables
var size = 22;
var count = 0;
var sizeDirection = 1;

// Head Size Variables
var ellipseWidth = 55;
var ellipseHeighth = 75;
var count = 0;
var sizeDirection = 5;

function setup() {
  createCanvas(400, 400);
}

function draw()
{
    background(220);

    // "My Portrait" Text
    textSize(size);
    size+=sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    fill(0)
    text('My Portrait',10,45);

    // Hair
    fill(hairRfill,hairBfill,hairGfill);
    triangle(hairBLpointX,hairBLpointY,hairTpointX,hairTpointY,hairBRpointX,hairBRpointY);
    hairBLpointX+=hairDirection;
    hairTpointX+=hairDirection;
    hairBRpointX+=hairDirection;
    if(hairBLpointX >= 307 || hairBLpointX <= 0)
    {
        hairDirection *= -1;
        hairBfill *= -40;
    }

    // Right Hand
     fill(handRfill,handBfill,handGfill)
     ellipse(handX,handY,15,35);
     handX+=handXDirection;
     handY+=handYDirection;
     if(handX >= 393 || handX <= 7)
     {
        handXDirection *= -1;
        handRfill *= -15;
     }
     if(handY >= 385 || handY <= 15)
     {
        handYDirection *= -1;
        handRfill *= -15;
     }

  // Left Arm
  fill(239, 197, 163)
  ellipse(170,185,15,80);

  // Right Shoulder
  fill(239, 197, 163)
  ellipse(250,155,80,15);

  // Right Forearm
   fill(239, 197, 163)
   ellipse(286,128,15,60);

   // Torso/Body
   fill(torsoRfill,torsoBfill,torsoGfill);
   triangle(torsoBLpointX,torsoBLpointY,torsoTpointX,torsoTpointY,torsoBRpointX,torsoBRpointY);
   torsoBLpointY+=torsoDirection;
   torsoTpointY+=torsoDirection;
   torsoBRpointY+=torsoDirection;
   if(torsoBLpointY >= 400 || torsoBLpointY <= 95)
   {
       torsoDirection *= -1;
       torsoRfill *= -15;
   }

   // Shoulders
    fill(shoulderRfill,shoulderBfill,shoulderGfill)
    triangle(shoulderBLpointX,shoulderBLpointY,shoulderTpointX,shoulderTpointY,shoulderBRpointX,shoulderBRpointY);
    shoulderBLpointY+=shoulderDirection;
    shoulderTpointY+=shoulderDirection;
    shoulderBRpointY+=shoulderDirection;
    if(shoulderBLpointY >= 305 || shoulderBLpointY <= 0)
    {
       shoulderDirection *= -1;
       shoulderBfill *= -15;
    }

  // Right Leg
   fill(239, 197, 163)
   ellipse(230,300,15,100);

  // Left Leg
   fill(239, 197, 163)
   ellipse(175,300,15,100);

   // Hips/Skirt
   fill(hipsRfill,hipsBfill,hipsGfill);
   rect(hipsSkirtX,hipsSkirtY,90,50);
   hipsSkirtX+=hipsSkirtDirection;
   if(hipsSkirtX >= 307 || hipsSkirtX <= 0)
   {
       hipsSkirtDirection *= -1;
       hipsGfill *= -50;
       hipsRfill *= -15;

   }

   //Insert Torso/Body Here

  // Left Foot
  fill(229, 101, 31)
  ellipse(165,350,40,20);

  // Right Foot
  ellipse(240,350,40,20);

  // Hair Bun
  fill(245, 202, 100);
  circle(200,50,30);

  // Neck
  fill(239, 197, 163)
  ellipse(200,120,15,40);

  // Head
  fill(239, 197, 163)
  ellipse(200,90,ellipseWidth,ellipseHeighth);
    ellipseWidth+=sizeDirection;
    ellipseHeighth+=sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

  // Hairline
  line(190,60,228,90);
  line(190,60,172,90);

  //Left Eye
  circle(188,90,10);

  // Right Eye
  circle(210,90,10);

  // Left Iris
  fill(117, 135, 96)
  circle(188,92,5);

  // Left Pupil
  circle(188,92,2);

  // Right Iris
  fill(117, 135, 96)
  circle(210,92,5);

  // Right Pupil
  circle(210,92,2);

  // Hair Decoration
  point(224,82);
  point(221,79);
  point(218,76);
  point(215,73);
  point(212,70);
  point(209,67);
  point(206,64);
  point(203,61);
  point(200,58);
  point(197,55);

  // Right Eyelash
  line(206,89,218,89);

  // Left Eyelash
  line(180,89,192,89);

  // Mouth
  line(190,114,197,118);
  line(197,118,205,118);
  line(205,118,210,115);

  // Nose
  line(197,105,202,105);

  // Artist's Name
  textSize(22)
  text('by Stefani Reinhardt', 185, 390);

}

let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  stroke(255)
  strokeWeight(25)
  background(0);
  fill(255, 0, 0)
  ellipse(200, 200, 250, 250);
  fill(255, 0, 0);
  ellipse(200, 200, 125, 125);
  noStroke();
  translate(200, 200);   //where it is rotated around
  rotate(-angle);
  push();
  fill(255, 0, 0)
  rect(1, 44, 10, 35); //inner red rectangle
  pop();
  //rotate(angle);
  push();
  fill(255, 0, 0);
  rect(7, 110, 10, 29); //outer red rectangle
  pop();
  rotate(angle);
  rotate(angle);
  angle = angle + 0.5
  push();
  fill(255);
  rect(5, 73, 10, 40);//white rectangle
  pop();
  angle = angle + 1 //speed of rotation
  

  }
//I am trying to make it so the little rectangles go in circles around the circles. I want the top rectagle to be moving in the same direction as the botttom rectangle and the white rectangle in the oposite direction all at different speeds. 



//https://www.youtube.com/watch?v=o9sgjuh-CBM 15:08
//https://p5js.org/reference/#/p5/translate

//add push/pop
//add rotate x2 on line 24
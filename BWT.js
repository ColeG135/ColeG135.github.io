var ball = {
  
  x: 300,
  y: 200,
  xspeed: 7,
  yspeed: -4
}

function setup() {
  createCanvas(600, 400);
   background(255, 0, 0);
}

function draw() {
  stroke(225);
  strokeWeight(0);
  fill(0,255,0);
  ellipse(ball.x, ball.y, 24, 24);
  background(10, 10);
 
	if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  }



//https://www.youtube.com/watch?v=vqE8DMfOajk 
//http://coursescript.com/notes/interactivecomputing/animation/index.html

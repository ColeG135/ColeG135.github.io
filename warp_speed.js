var stars = [];

var speed;

function setup() {
  createCanvas(600,600)
  for(var i = 0; i < 3000; i++) {
    stars[i] = new Star();
  }
}

function draw () {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}














//https://www.youtube.com/watch?time_continue=4&v=17WoOqgXsRM
//Thanks to Daniel Shiffman's video
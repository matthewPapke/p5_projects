var images;
var loaded_img;
var y1;
var y2;
var img;
var img_x;
var img_y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  images = [];
  for (var i = 1; i <= 8; i++) {
    loaded_img = loadImage('/images/baseball' + i + '.png', img_ => {
      img_.resize((windowWidth / 2), 0);
    });
    images.push(loaded_img);
  }

  loadImage('assets/laDefense.jpg', img => {
    image(img, 0, 0);
  });

  frameRate(2);
  imageMode(CENTER);
}

function draw() {
  background(46,139,87);

  y1 = randomNumber(windowHeight);
  y2 = randomNumber(windowHeight);
  line(0, y1, windowWidth, y2);

  img = images[randomNumber(images.length) - 1];
  img_x = randomIntFromInterval((img.width / 2), windowWidth - (img.width / 2));
  img_y = randomIntFromInterval((img.height / 2), windowHeight - (img.height / 2));

  image(img, img_x, img_y);
}

function randomNumber(n){
  return Math.floor(Math.random() * n) + 1;
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

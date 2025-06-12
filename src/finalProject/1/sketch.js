let video;
let videoW;
let videoH;
let ballX = [];
let ballY = [];
let ballVx = [];
let ballVy = [];
let ballNum = 0;

function createBall(newBallX, newBallY) {
  ballX.push(newX);
  ballY.push(newY);
  ballVx.push(newVx);
  ballVy.push(newVy);
}

function update() {
  for (idx = 0; idx < ballNum; idx++) {
    x[idx] += vx[idx];
  }
}

function render() {
  for (idx = 0; idx < ballNum; idx++) {
    noStroke();
    fill('yellow');
    circle(x[idx], y[idx], 20);
  }
}

function mousePressed() {
  createBall(50, mouseY);
}

function setup() {
  createCanvas(1500, 480);

  videoW = 120;
  videoH = 80;

  video = createCapture(
    VIDEO,
    { flipped: true },
    { video: { width: videoW, height: videoH } }
  );
  video.hide();
  video.position(width - videoW, 0);
  video.size(videoW, videoH);
  console.log(video);
  console.log(video.pixels.length);
}

function draw() {
  background(200);

  update();
  render();

  video.loadPixels();

  let pixelSize = 4;

  for (let idx = 0; idx < video.pixels.length / 4; idx++) {
    let column = idx % video.width;
    let row = floor(idx / video.width);
    let r = video.pixels[idx * 4];
    let g = video.pixels[idx * 4 + 1];
    let b = video.pixels[idx * 4 + 2];
    let a = video.pixels[idx * 4 + 3];

    fill(r, g, b, a);
    noStroke();
    square(1000 + column * pixelSize, row * pixelSize, pixelSize);
  }

  fill('red');
  circle(mouseX, mouseY, 50);

  fill('blue');
  circle(50, mouseY, 50);
}

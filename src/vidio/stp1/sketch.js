// contain 이미지가 안 짤리고 적용, cover 가로가 길게 하려면 세로를 기준으로, 세로를 길게 하려면 가로를 기준으로 적용

let video;
let greyChars = ' .:-=+*#%@';

function setup() {
  createCanvas(800, 600);
  video = createCapture(VIDEO, { flipped: true });
  // 밑에 생성된 그 비디오 없앰
  video.hide();
  // 모자이크
  video.size(64, 48);
  console.log(video);
  // 픽셀 개수 알려줌
  video.loadPixels();
  console.log(video.pixels.length);
}

function draw() {
  background(0);
  video.loadPixels();
  for (let idx = 0; idx < video.pixels.length / 4; idx++) {
    let column = idx % video.width; // 열 인덱스
    let row = floor(idx / video.width); //행 인덱스
    let r = video.pixels[idx * 4];
    let g = video.pixels[idx * 4 + 1];
    let b = video.pixels[idx * 4 + 2];
    let a = video.pixels[idx * 4 + 3];
    if (mouseIsPressed) {
      fill(r, 0, 0, a);
    } else {
      fill(r, g, b, a);
    }
    noStroke();
    square(10 * column, 20 * row, 20); // 숫자 조정으로 픽셀 크기 조정
    //let c = color(r, g, b, a);
    //let brightnessValue = brightness(c);
    //fill(255);
    //noStroke();
    // circle(15 * column, row * 15, (50 * brightnessValue) / 255);
    //let charIdx = map(brightnessValue, 0, 255, 0, greyChars.length - 1);
    //let char = greyChars.charAt(charIdx);
    //let charSize = 20;
    //textSize(charSize);
    //textAlign(CENTER, CENTER);
    //text(
    //  char,
    //  charSize * column + 0.5 * charSize,
    //  charSize * row + 0.5 * charSize
    //);
  }
  fill('red');
  circle(mouseX, mouseY, 50);
}

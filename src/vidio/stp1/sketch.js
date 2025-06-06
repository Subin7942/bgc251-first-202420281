// contain 이미지가 안 짤리고 적용, cover 가로가 길게 하려면 세로를 기준으로, 세로를 길게 하려면 가로를 기준으로 적용

let video;

function setup() {
  createCanvas(800, 600);
  video = createCapture(VIDEO, { flipped: true });
  // 밑에 생성된 그 비디오 없앰
  video.hide();
  // 모자이크
  video.size(64, 48);
  console.log(video);
}

function draw() {
  // background(220);
  let aspectRatioCanvas = width / height;
  let aspectRatioVideo = video.width / video.height;
  let newWidth, newHeight;
  let zeroX, zeroY;
  if (aspectRatioCanvas > aspectRatioVideo) {
    newWidth = width;
    newHeight = newWidth / aspectRatioVideo;
  } else {
    newHeight = height;
    newWidth = newHeight * aspectRatioVideo;
  }
  zeroX = (width - newWidth) / 2;
  zeroY = (height - newHeight) / 2;

  image(video, zeroX, zeroY, newWidth, newHeight);
  fill('red');
  circle(mouseX, mouseY, 50);
}

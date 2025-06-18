let star = {
  makeStar: function (x, y, speed) {
    (this.position = createVector(x, y)),
      (this.speed = speed),
      (this.color = random(['white', 'yellow', 'lightblue', 'pink']));
  },
  render: function () {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, random(2, 7));
  },
  update: function () {
    this.position.x -= this.speed;
  },
};

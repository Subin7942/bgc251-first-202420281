let hero = {
  makeHero: function (x, y) {
    this.position = createVector(x, y);
  },
  render: function () {
    noStroke();
    fill('skyblue');
    ellipse(this.position.x, this.position.y, 50, 50);
  },
};

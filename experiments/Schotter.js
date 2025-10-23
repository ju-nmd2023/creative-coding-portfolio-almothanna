function setup() {
  createCanvas(600, 800);
  rectMode(CENTER);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  background(15, 20, 30); 

  let cols = 12;
  let rows = 22;
  let step = 40;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      push();

      let x = 100 + i * step;
      let y = 100 + j * step;
      translate(x, y);

      let chaos = map(j, 0, rows, 0, 1.5);

      let rot = random(-25, 25) * chaos;
      let dx = random(-12, 12) * chaos;
      let dy = random(-12, 12) * chaos;

      translate(dx, dy);
      rotate(rot);

      let hueVal = map(i + j, 0, cols + rows, 180, 360);
      let sat = map(j, 0, rows, 80, 100);
      let bright = map(j, 0, rows, 100, 60);
      colorMode(HSB);
      fill(hueVal, sat, bright);
      noStroke();

      let size = map(j, 0, rows, 28, 36);
      if ((i + j) % 2 == 0) {
        rect(0, 0, size, size);
      } else {
        ellipse(0, 0, size * 0.9, size * 0.9);
      }

      pop();
    }
  }
}

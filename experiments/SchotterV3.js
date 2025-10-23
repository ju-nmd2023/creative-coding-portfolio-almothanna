let cols = 14;
let rows = 22;
let step = 40;
let time = 0;

function setup() {
  createCanvas(600, 800);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(12, 12, 22, 20); // slightly transparent background for motion trails
  time += 0.01;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      push();

      let baseX = 100 + i * step;
      let baseY = 100 + j * step;

      // smooth flow-field motion using noise
      let n = noise(i * 0.15, j * 0.15, time);
      let angle = map(n, 0, 1, -PI, PI);
      let chaos = map(j, 0, rows, 0, 1.5);

      let dx = cos(angle) * 10 * chaos;
      let dy = sin(angle) * 10 * chaos;

      translate(baseX + dx, baseY + dy);
      rotate(angle * chaos);

      // color gradient by position
      let hueVal = map(i + j, 0, cols + rows, 180, 330);
      let sat = 80;
      let bright = 90;
      fill(hueVal, sat, bright, 0.8);

      // morph shape from square → circle based on row
      let morph = map(j, 0, rows, 0, 1);
      let size = 28 + 8 * chaos * sin(time + i * 0.3);
      if (morph < 0.5) {
        rect(0, 0, size, size, morph * 12);
      } else {
        ellipse(0, 0, size, size);
      }

      pop();
    }
  }
}

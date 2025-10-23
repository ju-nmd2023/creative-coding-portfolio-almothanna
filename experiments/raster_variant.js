let gridSize = 25;
let columns, rows;
let shapes = ['|', '-', '/', '\\', '•', ' '];

let lastShape = ' ';

function setup() {

  createCanvas(800, 800);
  background(20, 20, 25);
  textSize(20);
  textAlign(CENTER, CENTER);
  noLoop();
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);

  columns = width / gridSize;
  rows = height / gridSize;

}


function draw() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      let chaos = map(y, 0, rows, 0, 1); 
      let s = pickShape(lastShape);
      let px = x * gridSize + gridSize / 2;
      let py = y * gridSize + gridSize / 2;

      fill(0, 0, 100, 0.05);
      noStroke();
      circle(px, py, 10);

      let hueVal = map(x + y, 0, columns + rows, 180, 320);
      fill(hueVal, 70, 90);
      noStroke();

      if (random() < 0.4 + chaos * 0.5) {
        push();
        translate(px, py);
        rotate(random(-PI / 4, PI / 4) * chaos);
        let sz = 10 + random(-5, 5) * chaos;
        rect(0, 0, sz, sz);
        pop();
      } else {
        fill(255);
        text(s, px, py);
      }

      lastShape = s;
    }
  }


  stroke(255, 20);
  for (let x = 0; x <= width; x += gridSize) line(x, 0, x, height);
  for (let y = 0; y <= height; y += gridSize) line(0, y, width, y);
}



function pickShape(prev) {
  let r = random();
  if (r < 0.15) return '|';
  else if (r < 0.3) return '-';
  else if (r < 0.45) return '/';
  else if (r < 0.6) return '\\';
  else if (r < 0.75) return '•';
  else return ' ';

}

function setup() {
  createCanvas(600, 800);
  rectMode(CENTER);
  noFill();
  noLoop();
}

function draw() {
  background(255);

  let cols = 12;    
  let rows = 22;    
  let step = 40;    


  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      push();


      let x = 100 + i * step;
      let y = 100 + j * step;
      translate(x, y);


      let chaos = map(j, 0, rows, 0, 1);

      let rot = random(-PI / 6, PI / 6) * chaos;
      let dx = random(-10, 10) * chaos;
      let dy = random(-10, 10) * chaos;


      translate(dx, dy);
      rotate(rot);
      rect(0, 0, 30, 30);

      pop();
      
    }
  }
}

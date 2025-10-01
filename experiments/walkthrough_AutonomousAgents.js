let walkers = [];



function setup() {
  createCanvas(800, 800 );
  background(255 );
  stroke(0, 80 );


  for (let i = 0; i < 400; i++)  {

    walkers.push(createVector(random(width), random(height)));
  }
}

function draw() {

  for (let w of walkers) {
    point(w.x, w.y);

    let ang = noise(w.x*0.005, w.y*0.005)*TWO_PI*2;
    let step = p5.Vector.fromAngle(ang);
    step.setMag(1.5);
    w.add(step);

    if (w.x < 0) w.x = width;
    if (w.x > width) w.x = 0;
    if (w.y < 0) w.y = height;
    if (w.y > height) w.y = 0;
  }
}

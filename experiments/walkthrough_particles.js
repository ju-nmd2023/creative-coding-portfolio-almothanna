let dotThings = [];

function setup() {
  createCanvas(800, 800);
  background(255);
  stroke(0, 60);


  for (let i = 0; i < 250; i++) {

    dotThings.push(new dotThing(random(width), random(height)));
  }


}

function draw() {

  for (let d of dotThings) {
    d.move();
    d.show();
  }


}

class dotThing {


  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);

  }

  move()
  
  {

    let ang = noise(this.pos.x*0.004, this.pos.y*0.004)*TWO_PI*2;
    this.acc = p5.Vector.fromAngle(ang);
    this.acc.mult(0.2);

    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }



  show() {
    point(this.pos.x, this.pos.y);

  }

  
}

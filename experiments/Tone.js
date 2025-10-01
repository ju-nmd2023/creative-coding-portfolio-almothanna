let walkerz = [];
let synth; 
let started = false;

function setup()
 {
  createCanvas(800, 800);
  background(255);
  stroke(0, 80);



  for (let i = 0; i < 200; i++) {

    walkerz.push(createVector(random(width), random(height)));
  }

  synth = new Tone.PolySynth(Tone.Synth).toDestination();

  let reverb = new Tone.Reverb(3).toDestination();
  synth.connect(reverb);



  fill(0);
  textSize(23);
  textAlign(CENTER, CENTER);
  text("click here to start sound!! ;)", width/2, height/2);
}




function draw() {
  if (!started) return; 

  for (let w of walkerz) {
    point(w.x, w.y);


    let a = noise(w.x* 0.004, w.y* 0.004) * TWO_PI * 2;
    let step = p5.Vector.fromAngle(a);
    step.setMag(1.3);
    w.add(step);



    if (frameCount % 15 == 0) {

      let notez = ["C4", "D4", "E4", "G4", "A4", "C5"];
      let pick = random(notez);
      synth.triggerAttackRelease (pick, "8n");
    }

    if (w.x < 0) w.x = width;
    if (w.x > width) w.x = 0;
    if (w.y < 0) w.y = height;
    if (w.y > height) w.y = 0;
  }
}


function mousePressed() {
  if (!started) {

    Tone.start().then(()=>{
      started = true;
      background(255); 
    });

  }

}

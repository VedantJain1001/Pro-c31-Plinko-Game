var Engine = Matter.Engine, World = Matter.World, Events = Matter.Events, Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }  
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background("black");
 
  Engine.update(engine);  
  
  if (frameCount %100 === 0) {
    particles.push(new Particle(random(width/2-100, width/2+100),10,10));
  } 
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display();  
  }   
  for (var d = 0; d < divisions.length; d++) {
    divisions[d].display();
  }
  for (var p = 0; p < particles.length; p++) {  
    particles[p].display();
  }
  ground.display();
}
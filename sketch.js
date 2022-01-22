const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(12,{x: width/2, y: 20})
  fruit = Bodies.circle(width/2, 300, 15)
  Composite.add(rope.body, fruit)
  var lastLink = rope.body.bodies.length - 5
  var options = {
    bodyA : rope.body.bodies[lastLink],
    bodyB : fruit,
    length: 0, 
    stiffness : 0.01
  }
  fruitCon = Constraint.create(options)
  World.add(world, fruitCon)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  rope.show()
  ellipse(fruit.position.x, fruit.position.y, 30, 30)
 
   
}

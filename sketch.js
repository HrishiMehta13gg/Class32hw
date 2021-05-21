const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var punch,covid,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  punch = new Punch (400,800,250);
  rope = new Rope(punch.body, { x: 500, y: 50 });
  covid = new Covid(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 200, 70, 70);
  box3 = new Box(600, 300, 70, 70);
  box4 = new Box(600, 400, 70, 70);
  box5 = new Box(700, 100, 70, 70);
  box6 = new Box(700, 200, 70, 70);
  box7 = new Box(700, 300, 70, 70);
  box8 = new Box(700, 400, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()

  punch.display();
  rope.display();
  covid.display();

}

function mouseDragged(){
Matter.Body.setPosition(punch.body, {x:mouseX, y:mouseY });

}

function mouseReleased(){
  rope.fly();
}



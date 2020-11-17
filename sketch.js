const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,treeImage,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var boy,boyImage;
var stone;
var slingshot;

function preload()
{
  treeImage = loadImage("tree.png")
  boyImage = loadImage("boy.png")
}

function setup() {
  createCanvas(1400, 500);

  boy = createSprite(200,410,10,10);
  boy.addImage(boyImage);
  boy.scale = 0.1;

  //tree = createSprite(1100,280,20,20);
  //tree.addImage(treeImage);
  //tree.scale = 0.3;

	engine = Engine.create();
	world = engine.world;
    tree = new Tree(1100,280,400,400)
    ground = new Ground(700,480,1400,20);
    mango1 = new Mango(1100,140,50,60);
    mango2 = new Mango(1050,165,40,60);
    mango3 = new Mango(1020,190,60,50);
    mango4 = new Mango(1140,185,50,60);
    mango5 = new Mango(1190,210,40,50);
    mango6 = new Mango(1230,220,50,40);
    mango7 = new Mango(1020,230,40,40);
    mango8 = new Mango(1060,240,30,40);
    mango9 = new Mango(1090,210,40,50);
    mango10 = new Mango(1150,240,50,40);
    stone = new Stone(100,300,30,30)
    slingshot = new Slingshot(stone.body,{x:150,y:354})
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  fill(180,180,180);
  drawSprites();
  tree.display();
  ground.display();
  mango1.display();  
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});

}
function mouseReleased() {
 
 slingshot.fly();
}

function detectCollision(lstone,lmango){
  mangoPosition = lmango.body.position
  stonePosition = lstone.body.position

  var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x,mangoPosition.y)
    if(distance >= lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false);
    }
}
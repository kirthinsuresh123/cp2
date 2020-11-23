
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin;
var pac,pacImage;
var boxposition;
var dustbinObj,paperObject,groundObject;

function preload()
{
pacImage = loadImage("PAC.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj = new Dustbin(1200,500);
	paperObject = new Paper(200,450,40);
	groundObject = new Ground(width/2,670,width,20);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)
 dustbinObj.display();
 paperObject.display();
 groundObject.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.paper,paperObject.paper.position,{x:85,y:-80});
	}
}


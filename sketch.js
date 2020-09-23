const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var paper, ground, dustbin;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
  paper = new Paper(200,450,40);
  dustbin= new Dustbin(1200,650);
  ground = new Ground(width/2,670,width,20);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
 
 paper.display();
 dustbin.display();	
 ground.display();
keyPressed();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

 Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-2});
 
}

}




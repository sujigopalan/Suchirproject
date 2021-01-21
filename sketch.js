
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,d1,d2,d3,paper1;

function preload()
{

	
  
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(450,340,900,20);
  dustbinn = new Dustbin(700,350);
  paper1 = new Paper(200,200,40);
	


	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  
  keyPressed();
  ground.display();
  paper1.display();
  dustbinn.display();
  
  
  
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-20});
  }

}



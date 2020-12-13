
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var box1,box2,box3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball=new Ball(250,200,30);
box1=new Box(740,270,20,120);
box2=new Box(920,270,20,120);
box3=new Box(830,330,200,20);

ground=new Ground(500,350,1000,20);
	Engine.run(engine);
   
}


function draw() {
  
  background(244,19,128);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
}


function keyPressed(){
	if(keyCode===38){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-120});
	}
}




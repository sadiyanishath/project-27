
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var ground
var bob1,bob2,bob3,bob4,bob5
var rope,rope1,rope2,rope3,rope4,rope5
 var  roof,roof1,roof2,roof3,roof4,roof5

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Ground(395,200,250,20)

    bob1 = new Bob(390,400,40)
    bob2 = new Bob(430,400,20)
    bob3 = new Bob(480,400,20)
    bob4 = new Bob(310,400,20)
    bob5 = new Bob(250,400,20)

    roof1 = new Rec(390,200,28,20)
    roof2 = new Rec(438,200,48,20)
    roof3 = new Rec(486,200,48,20)
    roof4 = new Rec(342,200,48,20)
    roof5 = new Rec(294,200,48,20)
    
    
    rope1 = new Rope(roof1,bob1)
    rope1 = new Rope(roof2,bob2)
    rope1 = new Rope(roof3,bob3)
    rope1 = new Rope(roof4,bob4)
    rope1 = new Rope(roof5,bob5)
   

   
	
	Engine.run(engine);


  
}


function draw() {
  background(220);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  roof.display();

strokeWeight(3)
  line(roof1.x,roof1.y,bob1.x,bob1.y)
  
  drawSprites();

  
 
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-650,y:0}
 
    );
}




}
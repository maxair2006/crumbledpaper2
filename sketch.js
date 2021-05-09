
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball;
function preload()
{
	bin = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground =new Ground(400,600,800,20);
   ball = new Ball(50,550)

	Engine.run(engine);

	boxPosition=width/2+100
 	boxY=540;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display()
  //drawSprites();
  ball.display();
  push()
  translate (boxBottomBody.position.x,boxBottomBody.position.y-70)
  rotate (boxBottomBody.angle)
  imageMode(CENTER);
  image(bin,0,0,600,300)
  pop ()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:59,y:-62})
	}
}




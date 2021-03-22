
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy;
var rubberBand;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1040,70,20);
  mango3=new mango(1030,140,40);
  mango4=new mango(1075,200,35);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
    stone= new Rock(200,50);
    rubberBand=new RubberBand(stone.body,{x:234,y:408});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stone.display();
  rubberBand.display();
  mango2.display();
  mango3.display();
  mango4.display();

  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubberBand.fly();
}

function keyPressed(){
 if(keyCode===32){
rubberBand.attach(stone.body); 
 }
}

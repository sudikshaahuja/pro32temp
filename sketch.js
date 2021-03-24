const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var Ground;
var Ball;

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,320,50,50)
    box3 = new Box(250,340,50,50)
    box4  =new Box(270,360,50,50)
    Ball = new ball(150,400,30,10)
    Ground = new ground(500,600,1000,10)

    rope = new SlingShot(Ball.body,{x:200,y:50})
}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    Ball.display();
    rope.display();
    Ground.display();
   
}


function mouseDragged(){

    Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
        
    

    

}
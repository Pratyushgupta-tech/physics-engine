
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld
var ground,ball;



function setup() {
  createCanvas(400,400);
  
  myengine=Engine.create();
  myworld=myengine.world;

var option={

isStatic:true

}


ground= Bodies.rectangle(200,380,400,10,option);

World.add(myworld,ground);

var optionball={

   restitution:1.0

}


ball= Bodies.circle(200,100,50,optionball);

World.add(myworld,ball);



}

function draw() {

  Engine.update(myengine);

  background(0);  

console.log(ball);

rectMode(CENTER);

rect(ground.position.x,ground.position.y,400,10);

ellipseMode(RADIUS);

circle(ball.position.x,ball.position.y,50);

  drawSprites();
}
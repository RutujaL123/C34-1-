
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicop;
var bg;
var packedfood;
var rescuehelicopter;
var medicine;
var Thundering;



function preload() {
bg = loadImage("./Assets/flood.jpg");
packedfood = loadImage("./Assets/food.png");
rescuehelicopter = loadImage("./Assets/Helicopter.png");
medicine = loadImage("./Assets/MEDICINE.png");
Thundering = loadImage("./Assets/thundering.png");

}


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  helicop = new HELICOP(width-79, height-60, 170,170,-80);
  helicop.display()
 //  helicop = createSprite(width/2, 200, 10,10);
//  helicop.addImage(rescuehelicopter);
//  helicop.scale = 0.2;
  
  }



function draw() 
{
  
  background(51);
 
 image(bg, 0,0, width, height);
  push();
 imageMode(CENTER);
 pop();


 Engine.update(engine);
  drawSprite();
}

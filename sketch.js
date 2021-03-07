const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var ground1;
var bg;
function preload() {
bg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1520, 800);
  myEngine = Engine.create();
    myWorld = myEngine.world;
  
ground1 = new Ground(500,550,1000,10);
Hero1 = new Hero(200,200,50);
block1 = new Block(500,520,50,50);
block2 = new Block(500,470,50,50);
block3 = new Block(500,420,50,50);
block4 = new Block(500,370,50,50);
block5 = new Block(500,320,50,50);
block6 = new Block(500,270,50,50);
block7 = new Block(500,220,50,50);
block8 = new Block(500,170,50,50);
block9 = new Block(500,120,50,50);

block10 = new Block(570,520,50,50);
block11 = new Block(570,470,50,50);
block12 = new Block(570,420,50,50);
block13 = new Block(570,370,50,50);
block14 = new Block(570,320,50,50);
block15 = new Block(570,270,50,50);
block16 = new Block(570,220,50,50);
block17 = new Block(570,170,50,50);

block18 = new Block(640,520,50,50);
block19 = new Block(640,470,50,50);
block20 = new Block(640,420,50,50);
block21 = new Block(640,370,50,50);
block22 = new Block(640,320,50,50);
block23 = new Block(640,270,50,50);
block24 = new Block(640,220,50,50);
block25 = new Block(640,170,50,50);
block26 = new Block(640,120,50,50);
block27 = new Block(640,70,50,50);

block28 = new Block(710,520,50,50);
block29 = new Block(710,470,50,50);
block30 = new Block(710,420,50,50);
block31 = new Block(710,370,50,50);
block32 = new Block(710,320,50,50);
block33 = new Block(710,270,50,50);
block34 = new Block(710,220,50,50);
}
function draw() {
  background(bg);
ground1.show();
block1.show();
Hero1.show();    
block2.show();
block3.show();
block4.show();
block5.show();
block6.show();
block7.show();
block8.show();
block9.show();

block10.show();
block11.show();
block12.show();
block13.show();
block14.show();
block15.show();
block16.show();
block17.show();

block18.show();
block19.show();
block20.show();
block21.show();
block22.show();
block23.show();
block24.show();
block25.show();
block26.show();
block27.show();

block28.show();
block29.show();
block30.show();
block31.show();
block32.show();
block33.show();
block34.show();
}


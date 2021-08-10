var bg
var sleeping, sleep;
var brushing,brush;
var gyming, gym;
var eating, eat;
var drinking, drink;
var moving, move;
var instruction;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym21.png","images/gym22.png");
  eat = loadAnimation("images/apple.png");
  drink = loadAnimation("images/water_bottle.png"); 
  move = loadAnimation("images/move.png");
}


edgeSprites();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background("bg"); 
 Text("instruction: Up Arrow=Brushing, Down Arrow=Gyming, Left Arrow= Eating, Right Arrow=Bathing, m key= moving"+ instruction, 500, 50);

  astronaut.bounceoff(edges);
  
  if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }



  drawSprites();
}
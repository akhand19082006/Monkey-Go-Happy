 //Global Variables
var bananaImage , banana,obstcleImage, obstacleGroup,bananaGroup, backgroundImage ,backgrounds, score, monkey, monkeyImage, ground , obstacle , score, gameState = "PLAY",  collidedmonkey;


function preload(){
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  backgroundImage = loadImage("jungle-1.jpg");
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaImage = loadImage("banana.png");
  obstcleImage = loadImage("stone.png");
  collidedmonkey = loadImage("Monkey_01.png");
}


function setup() {
  
   
  createCanvas(600,600               )
backgrounds = createSprite(200,200,400,10);
  backgrounds .addImage("jungle",backgroundImage);
monkey = createSprite(80,430,40,40);
  monkey .addAnimation("walking",monkeyImage);
  monkey.scale=0.2;
  ground =createSprite(300,430,600,10)
  ground.visible = false;
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  score = 0;
}


function draw(){
  
  if(gameState==="PLAY"){
    if(bananaGroup.isTouching(monkey)){
  score = score+2
bananaGroup.destroyEach();     
 switch(score){
  
  case 10: monkey.scale = 0.22;
     break;
     case 20: monkey.scale = 0.24;
     break;
     case 30: monkey.scale = 0.26;
     break;
     case 40: monkey.scale = 0.28   ;
     break;
     default: break;
  
  }  }
    if (backgrounds.x<200) {
 backgrounds.x=backgrounds.width/2;
 }
  backgrounds.velocityX = -4;
if (keyDown("space")) {
    monkey.velocityY=-6;
  }
monkey.velocityY=monkey.velocityY+0.5;  
    
    if(obstaclesGroup.isTouching(monkey)){
    gameState="END";
    
    
    
    }
      
      
    
    food();
  stone(); 
    
    
  }
  else if(gameState==="END"){
    
    backgrounds.velocity=0;
   bananaGroup.setVelocityEach(0, 0);
    obstaclesGroup.setVelocityEach(0, 0);
    monkey. changeAnimation("walking", collidedmonkey        )
  bananaGroup.setLifetimeEach(-1);  
    obstaclesGroup.setLifetimeEach(-1); 
  }
  
  
  
  
  
  
  
  
  
  
  
  createEdgeSprites();
            monkey.collide(ground); 
 
  
    
   drawSprites();
 stroke("white");
  textSize(20);
  fill("white");
    text("Score: "+ score, 300,50);               
}
function food (){
  if (frameCount%80===0) {
     banana = createSprite(600,380,30,30 );

banana.velocityX=-4;
  banana.addImage("Banana",bananaImage);
    banana.scale=0.05;
      banana.y=random(220, 280);                                          
    
     banana.lifetime=150;
    bananaGroup.add(banana);
  }
}


function stone (){
   if (frameCount%300===0) {
    obstacle = createSprite(600,380,30,30 );

obstacle.velocityX=-4;
  obstacle.addImage("Stone",obstacleImage);
    obstacle.scale=0.15;
                                               
    
     obstacle.lifetime=150;
     
  obstaclesGroup.add(obstacle);
  }
 
 
}
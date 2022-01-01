var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var restart, restartImg
var gameState = play 

function preload(){
bgImg = loadImage("assets/bg.png")
restartImg = loadImage("assets/restart.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;

restart = createSprite(200,200,800,800);
restart.addImage(restartImg);
restart.scale = 1.5
restart.visible = false;
if(mousePressedOver(restart)){
  
  balloon.x = 200
  balloon.y = 200
  
}



      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          if(gameState == "play"){
            if(keyDown("space")) {
              balloon.velocityY = -6 ;
              
            }
  
            if(balloon.isTouching(bottomGround)){
              restart.visible = true;
            }
            
            balloon.velocityY = balloon.velocityY + 2;

            if(mousePressedOver(restart)){
              gameState = "end"
              
              
            }
          }

          if(gameState == "end"){
            balloon.x = 200
            balloon.y = 200
          }


          //making the hot air balloon jump
          

         

          //adding gravity
           
   
        drawSprites();
        
}
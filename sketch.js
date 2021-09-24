var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
       
       backgroundImage = loadImage("background0.png");
        arrowImage = loadImage("arrow0.png");
        bowImage = loadImage("bow0.png");
        red_balloonImage = loadImage("red_balloon0.png");
        green_balloonImage = loadImage("green_balloon0.png");
        pink_balloonImage = loadImage("pink_balloon0.png");
        blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(600, 600);
  
        
        background = createSprite(0,0,600,600);
        background.addImage(backgroundImage);
        background.scale = 2.5
  
        
        bow = createSprite(480,220,20,50);
        bow.addImage(bowImage); 
        bow.scale = 1;

   
      
        for(var i=60;i<390;i=i+60){
          red_balloon = createSprite(50, i, 1, 1);
          red_balloon.addImage(red_balloonImage);
          red_balloon.scale = 0.1
}
 
  

        
        for(var i=110;i<390;i=i+60){
          green_balloon = createSprite(100, i, 10, 10);
          green_balloon.addImage(green_balloonImage);
          green_balloon.scale = 0.1;
}

  
        
        for(var i=130;i<350;i=i+60){  
          blue_balloon = createSprite(140, i, 10, 10);
          blue_balloon.addImage(blue_balloonImage);
          blue_balloon.scale=0.1;
}
  
          
        for(var i=180;i<250;i=i+60){
          pink_balloon = createSprite(180, i, 10, 10);
          pink_balloon.addImage(pink_balloonImage);
          pink_balloon.scale = 1.2;
}
}

function draw() {
        
            background.velocityX = -3 

            if (background.x < 0){
              background.x = background.width/2;
            }


        
          bow.y = World.mouseY

          if (keyDown('space')) {     
           createarrow();
          }
          
  
  
  drawSprites();       
}
 

function createarrow() {
        // create aroow
          arrow = createSprite(360, 19, 10, 10);
          arrow.x =arrow.x-4;
          arrow.addImage(arrowImage);
          arrow.scale = 0.3;
          arrow.velocityX = -5;
          arrow.y=bow.y
}

function group(){

  redB= new group();
  greenB= new group();
  blueB= new group();
  pinkB= new group();
  arrowGroup= new group(); 

}

function destory() {
   if(arrowGroup.istouching(redB)) {
    redB.destoryeach();
    arrowGroup.destoryeach();
      score=score+1;

   if(arrowGroup.istouching(greenB)) 
    greenB.destoryEach();
    arrowGroup.destoryEach();
      score=score+1;

   if(arrowGroup.istouching(blueB)) 
    blueB.destoryEach();
    arrowGroup.destoryEach();
      score=score+1;

   if(arrowGroup.istouching(pinkB)) 
    pinkB.destoryEach();
    arrowGroup.destoryEach();
      score=score+1;


   }

  }

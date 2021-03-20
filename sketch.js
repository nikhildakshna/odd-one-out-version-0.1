var randanmIMG,randvehIMG,randhouIMG,randdraIMG;
var randoddsprIMGchooser,randoddsprchooser;

var apple,banana,strawberry,watermelon;
var brinjal,capsicum,carrot,potato;
var cow,dog,goat,monkey;
var planet_atmo,planet_earth,planet_mars,planet_mook;
var spr1,spr2,spr3,spr4;
var fruIMG;
var vegIMG;
var anmIMG;
var plaIMG;
var sprIMG;
var oddsprIMG;

function preload(){
apple = loadImage("apple.png");
banana = loadImage("banana.png");
strawberry = loadImage("strawberry.png");
watermelon = loadImage("watermelon.png");
brinjal = loadImage("brinjal.png");
capsicum = loadImage("capsicum.png");
carrot = loadImage("carrot.png");
potato = loadImage("potato.png");
cow = loadImage("cow.png");
dog = loadImage("dog.png");
goat = loadImage("goat.png");
monkey = loadImage("monkey.png");
planet_atmo = loadImage("planet_atmo.png");
planet_earth = loadImage("planet_earth.png");
planet_mars = loadImage("planet_mars.png");
planet_mook = loadImage("planet_mook.png");
console.log(planet_atmo);
}

function setup() {
  createCanvas(800,800);
randfruIMG = Math.round(random(1,4));
randvegIMG = Math.round(random(1,4));
randanmIMG = Math.round(random(1,4));
randplaIMG = Math.round(random(1,4));
randIMGchooser = Math.round(random(1,4));
randoddsprIMGchooser = Math.round(random(1,4));
randoddsprchooser = Math.round(random(1,4));

spr1 = createSprite(200,200,100,100);
spr2 = createSprite(600,200,100,100);
spr3 = createSprite(200,600,100,100);
spr4 = createSprite(600,600,100,100);

}

function draw() {
  background(255,255,255);  
  randomizeimage();
  
  switch(randoddsprchooser){
    case 1:if(mousePressedOver(spr1)){
              fill("green");
              strokeWeight(200);
              stroke("green");
              line(spr1.x,spr1.y,spr1.x,spr1.y);
            }
           spr1.addImage(oddsprIMG);
           spr2.addImage(sprIMG);
           spr3.addImage(sprIMG);
           spr4.addImage(sprIMG);
          /* spr1.scale = 0.2;
           spr2.scale = 0.2;
           spr3.scale = 0.2;
           spr4.scale = 0.2;*/
           if(mousePressedOver(spr4)){
             strokeWeight(200);
             stroke("red");
             line(spr4.x,spr4.y,spr4.x,spr4.y);
           }
            if(mousePressedOver(spr2)){
             strokeWeight(200);
             stroke("red");
             line(spr2.x,spr2.y,spr2.x,spr2.y);
           }
            if(mousePressedOver(spr3)){
             strokeWeight(200);
             stroke("red");
             line(spr3.x,spr3.y,spr3.x,spr3.y);
           }
           break;
          
    case 2:if(mousePressedOver(spr2)){
              fill("green");
              strokeWeight(200);
              stroke("green");
              line(spr2.x,spr2.y,spr2.x,spr2.y);
            }
           spr2.addImage(oddsprIMG);
           spr3.addImage(sprIMG);
           spr4.addImage(sprIMG);
           spr1.addImage(sprIMG); 
           spr1.scale = 0.2;
           spr2.scale = 0.2;
           spr3.scale = 0.2;
           spr4.scale = 0.2;
            if(mousePressedOver(spr1)){
             strokeWeight(200);
             stroke("red");
             line(spr1.x,spr1.y,spr1.x,spr1.y);
           }
            if(mousePressedOver(spr3)){
             strokeWeight(200);
             stroke("red");
             line(spr3.x,spr3.y,spr3.x,spr3.y);
           }
            if(mousePressedOver(spr4)){
             strokeWeight(200);
             stroke("red");
             line(spr4.x,spr4.y,spr4.x,spr4.y);
           }
           break; 
           
    case 3:     if(mousePressedOver(spr3)){
              fill("green");
              strokeWeight(200);
              stroke("green");
              line(spr3.x,spr3.y,spr3.x,spr3.y);
            }
           spr3.addImage(oddsprIMG);
           spr4.addImage(sprIMG);
           spr1.addImage(sprIMG);
           spr2.addImage(sprIMG);
           spr1.scale = 0.2;
           spr2.scale = 0.2;
           spr3.scale = 0.2;
           spr4.scale = 0.2; 
            if(mousePressedOver(spr1)){
             strokeWeight(200);
             stroke("red");
             line(spr1.x,spr1.y,spr1.x,spr1.y);
           }
            if(mousePressedOver(spr2)){
             strokeWeight(200);
             stroke("red");
             line(spr2.x,spr2.y,spr2.x,spr2.y);
           }
            if(mousePressedOver(spr4)){
             strokeWeight(200);
             stroke("red");
             line(spr4.x,spr4.y,spr4.x,spr4.y);
           }
           break;   
           
    case 4:if(mousePressedOver(spr4)){
              fill("green");
              strokeWeight(200);
              stroke("green");
              line(spr4.x,spr4.y,spr4.x,spr4.y);
            }
           spr4.addImage(oddsprIMG);
           spr1.addImage(sprIMG);
           spr2.addImage(sprIMG);
           spr3.addImage(sprIMG); 
           spr1.scale = 0.2;
           spr2.scale = 0.2;
           spr3.scale = 0.2;
           spr4.scale = 0.2;
           if(mousePressedOver(spr1)){
             strokeWeight(200);
             stroke("red");
             line(spr1.x,spr1.y,spr1.x,spr1.y);
           }
            if(mousePressedOver(spr2)){
             strokeWeight(200);
             stroke("red");
             line(spr2.x,spr2.y,spr2.x,spr2.y);
           }
            if(mousePressedOver(spr3)){
             strokeWeight(200);
             stroke("red");
             line(spr3.x,spr3.y,spr3.x,spr3.y);
           }
           break;   
             
    }

  drawSprites();
 
}
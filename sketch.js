function setup() {
  createCanvas(800,400);
 FIXEDRECT= createSprite(200, 200, 80, 50);
 FIXEDRECT.shapeColor="red";
 FIXEDRECT.debug=true;
 MOVINGRECT= createSprite(400, 200, 80, 50);
 MOVINGRECT.shapeColor="red";
 MOVINGRECT.debug=true;

 FIXEDRECT.velocityX=3;
 MOVINGRECT.velocityX=-3;

}

function draw() {
  background(255,255,255);  
  /*MOVINGRECT.x=mouseX;
  MOVINGRECT.y=mouseY;*/
console.log(FIXEDRECT.x);
console.log(MOVINGRECT.x);
console.log(MOVINGRECT.x-FIXEDRECT.x);
/*
if(MOVINGRECT.x-FIXEDRECT.x < MOVINGRECT.width/2 + FIXEDRECT.width/2 &&
  FIXEDRECT.x-MOVINGRECT.x <  MOVINGRECT.width/2 + FIXEDRECT.width/2 && 
  MOVINGRECT.y-FIXEDRECT.y < MOVINGRECT.width/2 + FIXEDRECT.width/2 &&
  FIXEDRECT.y-MOVINGRECT.y <  MOVINGRECT.width/2 + FIXEDRECT.width/2) { 
  MOVINGRECT.shapeColor="green";
  FIXEDRECT.shapeColor="green";
}
else{
  MOVINGRECT.shapeColor="red";
  FIXEDRECT.shapeColor="red";
}
*/
if(MOVINGRECT.x-FIXEDRECT.x < MOVINGRECT.width/2 + FIXEDRECT.width/2 &&
  FIXEDRECT.x-MOVINGRECT.x <  MOVINGRECT.width/2 + FIXEDRECT.width/2){
MOVINGRECT.velocityX=MOVINGRECT.velocityX*(-1);
FIXEDRECT.velocityX=FIXEDRECT.velocityX*(-1);
  }
else if(MOVINGRECT.y-FIXEDRECT.y < MOVINGRECT.width/2 + FIXEDRECT.width/2 &&
FIXEDRECT.y-MOVINGRECT.y <  MOVINGRECT.width/2 + FIXEDRECT.width/2){
  MOVINGRECT.velocityY=MOVINGRECT.velocityY*(-1);
  FIXEDRECT.velocityY=FIXEDRECT.velocityY*(-1);
}

  
  drawSprites();
}
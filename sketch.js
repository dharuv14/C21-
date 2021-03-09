var fixedRect, movingRect,rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100,150,50,50);
  rect1.shapeColor = "Blue";

  rect2 = createSprite(200,200,50,50);
  rect2.shapeColor = "Blue";

  rect3 = createSprite(300,250,50,50);
  rect3.shapeColor = "Blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  // if(isTouching(movingRect,rect2)){
  //   movingRect.shapeColor = "red";
  //   rect2.shapeColor = "red";
  // }

  // if(isTouching(movingRect,rect3)){
  //   movingRect.shapeColor = "red";
  //   rect3.shapeColor = "red";
  // }

  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  rect1.shapeColor = "Green";
  rect2.shapeColor = "Green";
  rect3.shapeColor = "Green";
  }

  
  drawSprites();
}

function isTouching(movingRect,fixedRect)
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
       return true;
    }
else {
  return false;
  
}
}
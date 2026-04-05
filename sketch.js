<<<<<<< HEAD
// ─── Sprite declarations ───────────────────────────────────────────────────
var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

// ─── setup() runs once on page load ────────────────────────────────────────
function setup() {
  createCanvas(1200, 800);

  // fixedRect: tall blue sprite that bounces vertically from the top
  fixedRect = createSprite(600, 20, 50, 80);
  fixedRect.shapeColor = color(80, 160, 255);
  fixedRect.debug = true;

  // movingRect: wide yellow sprite that follows the mouse cursor
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = color(255, 220, 50);
  movingRect.debug = true;

  // gameObject1–3: static green targets that isTouching() tests against movingRect
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);

  // gameObject4: moving green target that bounces off fixedRect via bounceOff()
  gameObject4 = createSprite(600, 780, 50, 50);

  gameObject1.shapeColor = color(60, 200, 100);
  gameObject2.shapeColor = color(60, 200, 100);
  gameObject3.shapeColor = color(60, 200, 100);
  gameObject4.shapeColor = color(60, 200, 100);

  // Give fixedRect a downward velocity and gameObject4 an upward velocity
  // so they travel toward each other and trigger bounceOff()
  fixedRect.velocityY  =  5;
  gameObject4.velocityY = -5;
}

// ─── draw() runs every frame (~60 fps) ─────────────────────────────────────
function draw() {
  background(20, 20, 30);

  // Snap movingRect to the mouse position each frame
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // Custom collision functions from myownlibrary.js:
  bounceOff(fixedRect, gameObject4);           // reverses velocities on collision
  isTouching(movingRect, gameObject1);          // turns sprites red when overlapping
  isTouching(movingRect, gameObject2);
  isTouching(movingRect, gameObject3);

  // Render all sprites
  drawSprites();
}
=======
var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 20, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  gameObject3=createSprite(300,100,50,50);
  gameObject4=createSprite(600,780,50,50);
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject3.shapeColor="green";
  gameObject4.shapeColor="green";
  fixedRect.velocityY=5;
  gameObject4.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff (fixedRect,gameObject4);
 isTouching (movingRect,gameObject1); 
  drawSprites();
}

>>>>>>> 236d9520db9a97b46cb73e95ed49afd3954c0274

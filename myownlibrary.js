<<<<<<< HEAD
// ═══════════════════════════════════════════════════════════════════════════
//  myownlibrary.js — Custom collision detection functions
//  Used by sketch.js alongside p5.play sprites.
//
//  Both functions use AABB (Axis-Aligned Bounding Box) collision detection:
//  two rectangles overlap only when they overlap on BOTH the X and Y axes.
// ═══════════════════════════════════════════════════════════════════════════


/**
 * isTouching(obj1, obj2)
 *
 * Checks whether two rectangular sprites are overlapping.
 * If they are, both sprites turn RED; otherwise they stay GREEN.
 *
 * How it works (AABB logic):
 *   Two rectangles do NOT overlap when the gap between their centres
 *   is greater than the sum of their half-widths (or half-heights).
 *   We flip this: they DO overlap when the gap is LESS than the sum.
 *
 *   X axis: |obj1.x - obj2.x|  <  (obj1.width/2 + obj2.width/2)
 *   Y axis: |obj1.y - obj2.y|  <  (obj1.height/2 + obj2.height/2)
 *
 *   Both conditions must be true for a collision.
 *
 * @param {p5.play Sprite} obj1
 * @param {p5.play Sprite} obj2
 */
function isTouching(obj1, obj2) {
  var halfWidths  = obj1.width  / 2 + obj2.width  / 2;
  var halfHeights = obj1.height / 2 + obj2.height / 2;

  var xOverlap = (obj1.x - obj2.x < halfWidths)  && (obj2.x - obj1.x < halfWidths);
  var yOverlap = (obj1.y - obj2.y < halfHeights) && (obj2.y - obj1.y < halfHeights);

  if (xOverlap && yOverlap) {
    obj1.shapeColor = color(220, 60, 60);   // red — colliding
    obj2.shapeColor = color(220, 60, 60);
  } else {
    obj1.shapeColor = color(60, 200, 100);  // green — clear
    obj2.shapeColor = color(60, 200, 100);
  }
}


/**
 * bounceOff(obj1, obj2)
 *
 * Makes two sprites bounce off each other by reversing their velocities
 * when they collide.
 *
 * How it works:
 *   Same AABB overlap test as isTouching().
 *   On X overlap → reverse both X velocities.
 *   On Y overlap → reverse both Y velocities.
 *
 *   Note: Because this reverses velocities every frame while overlapping,
 *   sprites should have enough speed to separate before the next frame,
 *   or you can add a cooldown / positional correction to prevent sticking.
 *
 * @param {p5.play Sprite} obj1
 * @param {p5.play Sprite} obj2
 */
function bounceOff(obj1, obj2) {
  var halfWidths  = obj1.width  / 2 + obj2.width  / 2;
  var halfHeights = obj1.height / 2 + obj2.height / 2;

  // X-axis overlap check
  if ((obj1.x - obj2.x < halfWidths) && (obj2.x - obj1.x < halfWidths)) {
    obj1.velocityX *= -1;
    obj2.velocityX *= -1;
  }

  // Y-axis overlap check
  if ((obj1.y - obj2.y < halfHeights) && (obj2.y - obj1.y < halfHeights)) {
    obj1.velocityY *= -1;
    obj2.velocityY *= -1;
  }
}
=======
function isTouching(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 +obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    obj1.shapeColor = "red";
    obj2.shapeColor = "red";
  }
  else {
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
  }
  }
  
  function bounceOff(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 +obj1.width/2){
  obj1.velocityX=obj1.velocityX*(-1);
  obj2.velocityX=obj2.velocityX*(-1);
  }
  if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 +obj1.height/2){
  obj1.velocityY=obj1.velocityY*(-1);
  obj2.velocityY=obj2.velocityY*(-1);
  }
  
  
  }
>>>>>>> 236d9520db9a97b46cb73e95ed49afd3954c0274

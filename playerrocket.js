var p;
var pos;
var fDirection;
var pVel;
var force;
var fireColor;
var touch;
var playerColor;

var forcePush;

function updatePlayer() {
    playerColor = color(0);
    fireColor = color(80,80, 200);
      
    forcePush = force.mult(0.3);  

    if( keyIsDown(LEFT_ARROW)){
    fDirection -= 6;
    }
    if( keyIsDown(RIGHT_ARROW)){
    fDirection+= 6;
    }
    if(keyIsDown(UP_ARROW)){
    force=p5.Vector.fromAngle(radians(fDirection));
    pVel.add(forcePush);
      fireColor = color(0, 255, 255);
    }

  if(p.x > 1990){
    p.x = 0;
  }
  if(p.x < 0){
    p.x = 1990;
  }
  if(p.y < 0){
    p.y = 948
  }
  if(p.y > 948){
    p.y = 0
  }

  pVel.mult(0.978);
  p.add(pVel);
  
  push();
  translate(p.x , p.y);
  rotate(radians(fDirection));

  fill(fireColor)
  noStroke();
  triangle(-pos+2,pos*.7,-pos*3.5,pos/7,pos*-.7,-pos*.7);

  fill(playerColor);
  
  beginShape();
  vertex(-pos + 1, -pos + 1);
  vertex(pos + 1, -pos + 1);
  vertex(pos*2, 0);
  vertex(pos + 1, pos + 1);
  vertex(-pos + 1, pos + 1);
  endShape();
  pop();
}

var bullet,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
thickness=random(22,83)

 bullet=createSprite(50, 200, 50, 5);
bullet.velocityX=speed;
bullet.shapeColor=color(255)

wall=createSprite(1200,200,thickness,height/2);

wall.shapecolor=color(230,230,230)
//wall.shapecolor=color(80,80,80)
}

function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
if(hascollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
wall.shapeColor=color(255,0,0);
}
if(damage<10)
 {
   wall.shapeColor=color(0,255,0)
 } 
}
  drawSprites();
}

function hascollided(lbullet,Iwall)
{
  bulletRightEdge=Ibullet.x+Ibullet.width;
  wallLeftEdge=Iwall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}

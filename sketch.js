var playerL, playerR
var background  
var RPimage, LPimage
var database;
var rightBullet;
var ground
var leftHP = 50
var rightHP = 50
var leftBullets=[];
var rightBullets=[];

function preload(){
  LPimage = loadImage('leftplayerimg.png')
  RPimage = loadImage("rightplayerimg.png");
  bg=loadImage("self_ground.jpg");
}
  createCanvas(1000,600);
   playerL = createSprite(90,300,50,50)
   playerL.addImage(LPimage)
   playerR = createSprite(910,300,50,50)
   playerR.addImage(RPimage)
 // playerR.scale=0.3ue;  //playerR.velocityY = 5
  ground = createSprite(500,470,1000,10);
  ground.visible=false;
  
  /*
  database=firebase.database();
  var databaseRef=database.ref("rightBullet");
  databaseRef.on("value",function(data){
    rightBullet=data.val();
    rightBullet.x=rightBullet.x;
    rightBullet.y=rightBullet.y;
  })
  */



function draw(){
  background(bg)
 
  if(keyDown("W")){
    playerL.velocityY=-4;
  }
  playerL.velocityY=playerL.velocityY+0.8;
  
  if(keyDown(UP_ARROW)){
    playerR.velocityY=-4
  }
  playerR.velocityY=playerR.velocityY + 0.8;
  if(keyWentDown("space")){
   
    setTimeout(() => {
      createrightBullet();
    }, 5000);
  }
  for(var i=0;i<leftBullets.length;i++){
    beginShape(POINTS)
    vertex(rightBullets[i].x,leftBullets[i].y)
    endShape();
  }
  for(var i=0;i<rightBullets.length;i++){
    if(rightBullets[i].isTouching(playerL)){
      rightBullets[i].destroy()
      leftHP--
    }
  }
  for(var i=0;i<leftBullets.length;i++){
    if(leftBullets[i].isTouching(playerR)){
      leftBullets[i].destroy()
      rightHP--
    }
  (30);
  if(rightHP === 0 ){
    text("LEFT WINS",500,300)
  }
  if(leftHP === 0 ){
    text("RIGHT WINS",500,300)
   }
    playerL.collide(ground);
  playerR.collide(ground);
  drawSprites();
  }
function createrightBullet(){
  
    rightBullet = createSprite(playerR.x,playerR.y,10,10)
    rightBullet.velocityX = -2
    if(rightBullet.x > 1000 && rightBullet.x < 0){
      rightBullet.destroy();
    }
    rightBullets.push(rightBullet);

}
function createleftBullet(){
  
  leftBullet = createSprite(playerR.x,playerR.y,10,10)
  leftBullet.velocityX = -2
  if(leftBullet.x > 1000 && leftBullet.x < 0){
    leftBullet.destroy();
  }
  leftBullets.push(leftBullet);

}

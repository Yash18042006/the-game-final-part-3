var PLAY = 1;
var END = 0;
var gameState = PLAY;

var p1, p1_running, p1_collided;
var ground, invisibleGround, groundImage;

var backgroundImg
var score = 0;
var jumpSound, collidedSound;

var gameOver, restart;


function preload() {

  wall1_img = loadImage("Jungle Map/Platformer/Brick_02.png")

  backgroundImg = loadImage("Jungle Map/Background/Background_01.png")
  

  p1_running = loadAnimation("Mage/Run/run1.png", "Mage/Run/run2.png", "Mage/Run/run3.png", "Mage/Run/run4.png", "Mage/Run/run5.png", "Mage/Run/run6.png", "Mage/Run/run7.png", "Mage/Run/run8.png");
  p1_collided = loadAnimation("Mage/Death/death1.png", "Mage/Death/death2.png", "Mage/Death/death3.png", "Mage/Death/death4.png", "Mage/Death/death5.png");

  p2_running = loadAnimation("Knight/Run/run1.png", "Knight/Run/run2.png", "Knight/Run/run3.png", "Knight/Run/run4.png", "Knight/Run/run5.png", "Knight/Run/run6.png", "Knight/Run/run7.png", "Knight/Run/run8.png" );
  p2_collided = loadAnimation("Knight/Death/death1.png","Knight/Death/death2.png","Knight/Death/death3.png","Knight/Death/death4.png","Knight/Death/death5.png");

  groundImage = loadImage("Jungle Map/Platformer/Bridge_02.png");

  gameOverImg = loadImage("Jungle Map/Game Over.png");
  restartImg = loadImage("Jungle Map/restart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  p1 = createSprite(50, 50, 20, 50);
  p1.addAnimation("running", p1_running);
  p1.addAnimation("collided", p1_collided);
  p1.setCollider('circle', -25, 0, 50)
  //p1.scale = 0.08
  //p1.debug=true

  p2 = createSprite(150, 50, 20, 50);
  p2.addAnimation("running", p2_running);
  p2.addAnimation("collided", p2_collided);
  p2.setCollider('circle', -25, 0, 50)
  //p2.scale = 0.08
  //p2.debug=true
  //for (var i = 70; i < 400; i = i + 100) {
    wall1 = createSprite(205, 245, 20, 20)
    wall1.addImage("wall1", wall1_img)
    wall1.scale=0.5
    
  //}
  invisibleGround = createSprite(width / 2, height - 10, width, 125);
  invisibleGround.shapeColor = "#f4cbaa";

  ground = createSprite(50,400,100,20);
  ground.addImage("ground", groundImage);
  
  //ground.velocityX = -(6 + 3*score/100);

  gameOver = createSprite(width / 2, height / 2 - 50);
  gameOver.addImage(gameOverImg);

  restart = createSprite(width / 2, height / 2);
  restart.addImage(restartImg);

  gameOver.scale = 0.5;
  restart.scale = 0.1;

  gameOver.visible = false;
  restart.visible = false;


  // invisibleGround.visible =false



  score = 0;
}

function draw() {
  //p1.debug = true;
  background(backgroundImg);
  textSize(20);
  fill("black")
  text("Score: " + score, 30, 50);


  if (gameState === PLAY) {
    //score = score + Math.round(getFrameRate()/60);
    //ground.velocityX = -(6 + 3*score/100);

    if (touches.length > 0 || keyDown("up")) {
      jumpSound.play()
      p1.velocityY = -10;
      touches = [];
    }
    if (touches.length > 0 || keyDown("w")) {
      jumpSound.play()
      p2.velocityY = -10;
      touches = [];
    }

    p1.velocityY = p1.velocityY + 0.8
    p2.velocityY = p2.velocityY + 0.8

  

    p1.collide(wall1);
    p2.collide(wall1);
    p1.collide(ground);
    p2.collide(ground);
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;

    //set velcity of each game object to 0
    
    p1.velocityY = 0;


    //change the p1 animation
    p1.changeAnimation("collided", p1_collided);

    //set lifetime of the game objects so that they are never destroyed


    if (touches.length > 0) {
      reset();
      touches = []
    }
  }


  drawSprites();
}



function reset() {
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;



  p1.changeAnimation("running", p1_running);

  score = 0;

}

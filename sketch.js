var database;
var gameState=0;
var playerCount;
var player1;
var form1;
var game1;
var allPlayers;
var rockets = [];
var p;
var pVel;
var force;
var pos;
var fDirection;
var fireColor;
var playerColor;
var touch;
var playerrocket1, playerrocket2;
var forcePush;

function setup() {

    createCanvas(1900, 938);
    
    p=createVector(width/2,height/2)
    pVel=createVector(0,0);
    force=createVector(0,0);
    pos = 10;
    fDirection = 0;

    database = firebase.database();

    game1 = new Game();
    game1.getGameState();
    game1.start();

    playerrocket1 = new rocket();
    playerrocket2 = new rocket();
}

  function draw() {
  background(80,80, 200);
   if(playerCount === 2){
     game1.updateGameState(1);   
   }
   if(gameState === 1){
    playerrocket1.display();
    playerrocket2.display();
    game1.play();
    console.log("games1");
   }
   if(gameState === 2){
    game1.end();
   }
  
} 
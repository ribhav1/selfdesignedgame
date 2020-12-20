class Game{
    constructor(){}

    getGameState(){
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data){
      gameState = data.val();
      });
  }

  updateGameState(gState){
      database.ref('/').update({
      gameState: gState
      });
  } 

  async start(){
    if(gameState === 0){
      player1 = new player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player1.getPlayerCount();
      }
      form1 = new form();
      form1.display();
    }
    
  }

  play(){
    // if(rockets[index-1]){
    //   rockets[index-1].display();
    //   rockets[index-1].movePlayer();
    // }
      
    if(allPlayers !== undefined){
        var x, y;
        var index = 0;

      for(var plr in allPlayers){
       x = x + 20;
       y = y + 20;
      
       index += 1;

       rockets[index-1].x = x;
       rockets[index-1].y = y;
        if(rockets[index-1]){
          if(index === player1.index){
            rockets[index-1].shapeColor = "blue";
            console.log("play");
          }
        } 
      }
    }
  }
  end(){
   console.log("Game ended");
  }
}
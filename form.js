class form{
    constructor(){
        this.input = createInput("Enter Username");
        this.button = createButton('Play Game');
        this.resetButton = createButton("Reset");
    }

    hide(){
        this.input.hide();
        this.button.hide();
    }

    display(){
        this.input.position(995, 500)
        this.button.position(995, 520);
        this.resetButton.position(displayWidth - 150, 50);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player1.name = this.input.value();
            playerCount += 1;
            this.index = playerCount;
            player1.update();
            player1.updatePlayerCount(playerCount);
        });
        this.resetButton.mousePressed(()=>{
        game.updateGameState(0);
        player1.updatePlayerCount(0);
        });
    }
}
const player1 = document.getElementById("game_player1");

const player2 = document.getElementById("game_player2");

const gameBall = document.getElementById("game_ball");

const gameContainer = document.getElementById("game_container");

const gameContainerBorderWidth = 1

const distanceChange = 50;

const playerHeight = player1.getBoundingClientRect().height;

const gameContainerHeight = gameContainer.getBoundingClientRect().height - 2*(gameContainerBorderWidth);

const bottomGameConstraint =  gameContainerHeight - playerHeight + distanceChange;





const playerMoveUp = ()=>{
    console.log("move up");
}

function playerMove(){
    
}

player1.addEventListener("keypress",(event)=>{
    player1.focus();
    if(event.key == "w" || event.key == "W"  ){

       

        gameBallHeight = gameBall.getBoundingClientRect().height
        
        console.log("before moving up: "+ player1.getBoundingClientRect().top);

        let cp = player1.getBoundingClientRect().top - gameBallHeight - gameContainerBorderWidth  - distanceChange;

        console.log("moving up: "+ cp);

        if(cp > - distanceChange){
            player1.style.top = cp + "px";
        }



        console.log("Player1 current top value: " + player1.style.top);

        console.log(gameContainerHeight);
        

    
    }else if(event.key == "s" || event.key == "S"){

        gameBallHeight = gameBall.getBoundingClientRect().height
        
        console.log("before moving down: "+ player1.getBoundingClientRect().top);

        let cp = player1.getBoundingClientRect().top - gameBallHeight - gameContainerBorderWidth  + distanceChange;

        console.log("moving down: "+ cp);

        if(cp < bottomGameConstraint){
            player1.style.top = cp + "px";
        }
       

        console.log("Player1 current top value: " + player1.style.top);
        
        console.log(bottomGameConstraint);
       
    }
});

player2.addEventListener("keydown",(event)=>{
    player2.focus();
    
    if(event.key == "ArrowUp"  ){
        gameBallHeight = gameBall.getBoundingClientRect().height
        
        console.log("before moving up: "+ player2.getBoundingClientRect().top);

        let cp = player2.getBoundingClientRect().top - gameBallHeight - gameContainerBorderWidth  - distanceChange;

        console.log("moving up: "+ cp);

        if(cp > - distanceChange){
            player2.style.top = cp + "px";
        }

        console.log("Player2 current top value: " + player2.style.top);

        console.log(gameContainerHeight);
        
    }else if(event.key == "ArrowDown" ){

        gameBallHeight = gameBall.getBoundingClientRect().height
        
        console.log("before moving down: "+ player2.getBoundingClientRect().top);

        let cp = player2.getBoundingClientRect().top - gameBallHeight - gameContainerBorderWidth  + distanceChange;

        console.log("moving down: "+ cp);

        if(cp < bottomGameConstraint){
            player2.style.top = cp + "px";
        }
       

        console.log("Player2 current top value: " + player2.style.top);
        
        console.log(bottomGameConstraint);
    }
});


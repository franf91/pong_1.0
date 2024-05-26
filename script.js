const player1 = document.getElementById("game_player1");

const player2 = document.getElementById("game_player2");

const gameBall = document.getElementById("game_ball");

const gameBallHeight = gameBall.getBoundingClientRect().height;

const gameContainer = document.getElementById("game_container");

const gameContainerBorderWidth = 1

const distanceChange = 50;

const playerHeight = player1.getBoundingClientRect().height;

const gameContainerHeight = gameContainer.getBoundingClientRect().height - 2*(gameContainerBorderWidth);

const bottomGameConstraint =  gameContainerHeight - playerHeight + distanceChange;

let keys = {};


function PlayerMovement(){
    let player1CurrentPosition = player1.getBoundingClientRect().top - gameBallHeight - gameContainerBorderWidth
    let player2CurrentPosition = player2.getBoundingClientRect().top - gameBallHeight - gameContainerBorderWidth 

    if(keys["w"]|| keys["W"]){
        player1CurrentPosition -= distanceChange;

        if(player1CurrentPosition > - distanceChange){
        
            player1.style.top = player1CurrentPosition + "px";
        }
    }

    if(keys["s"]|| keys["S"] ){

        player1CurrentPosition += distanceChange;

        if(player1CurrentPosition < bottomGameConstraint){
            player1.style.top = player1CurrentPosition + "px";
        }

    }

    if(keys["ArrowUp"]){
        player2CurrentPosition -= distanceChange;
        
        if( player2CurrentPosition > - distanceChange){
            player2.style.top = player2CurrentPosition + "px";
        }


    }

    if(keys["ArrowDown"]){
        player2CurrentPosition += distanceChange;
        
        if(player2CurrentPosition < bottomGameConstraint){
            player2.style.top = player2CurrentPosition + "px";
        }
       
    }
}



window.addEventListener("keydown",(event)=>{
        keys[event.key] = true;
        PlayerMovement();

})

window.addEventListener("keyup",(event)=>{
    keys[event.key] = false
})














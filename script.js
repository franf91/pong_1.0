let keys = {};  

const gameWinner = 11

let animationId;

const body = document.getElementById("body");

const gameMenu = document.getElementById("gameMenu");

const gameMenuOption = document.getElementById("option");

let bodyMarginTop = parseFloat(getComputedStyle(body).marginTop,10);

const gameContainer = document.getElementById("container");

let gameContainerHeight = gameContainer.getBoundingClientRect().height;

let gameContainerWidth = gameContainer.getBoundingClientRect().width;

let gameContainerMargin = parseFloat(getComputedStyle(gameContainer).marginLeft,10)

const player1 = document.getElementById("player1");

let player1Height = player1.getBoundingClientRect().height;

let player1Width = player1.getBoundingClientRect().width;

const player2 = document.getElementById("player2");

const ball = document.getElementById("ball");

const ballHeight = ball.getBoundingClientRect().height;

const distance = 4;

const distance2 = 4;

let move1 = 0;

let move2 = 0;

let moveBallX = 0;

let moveBallY = 0;

const bottomGameLimit = (bodyMarginTop + gameContainerHeight) - player1Height ;

const bottomGameLimitBall = (bodyMarginTop + gameContainerHeight) - ballHeight;

const topGameLimit = bodyMarginTop;

const leftGameLimit = gameContainerMargin + distance;

const rightGameLimit = gameContainerMargin + gameContainerWidth - 2*distance ;

let ballMovementRight = true;

let ballMovementUp = 0;

const score1 = document.getElementById("score1");

const score2 = document.getElementById("score2");

let playerScore1 = 0;

let playerScore2 = 0;




gameMenuOption.addEventListener("click",()=>{
    gameMenu.style.display = "none";

    gameContainer.style.visibility = "visible";

    
        player1.style.top = "192px";
        player1.style.left = "16px";
        player1.style.transform = `translateY(0px)`

        player2.style.top = "192px";
        player2.style.right = "16px";
        player2.style.transform = `translateY(0px)`
       
        moveBallX = 0;
        moveBallY = 0;
        ballMovementUp = 0

        ballMovementRight = true;

        ball.style.top = "50%";
        ball.style.left = "50%";

        ball.style.transform = `translate(${moveBallX}px,${moveBallY}px)`; 

        score1.textContent=`0`
        score2.textContent=`0`

        playerScore1 = 0;

        playerScore2 = 0;

        requestAnimationFrame(BallMovement);

})

// GAME LOGIC

function GameElementCenterX (gameElement){
    let gameElementStats = gameElement.getBoundingClientRect();
  
    return gameElementStats.x + gameElementStats.width/2;
  }
  
  function GameElementCenterY (gameElement){
      let gameElementStats = gameElement.getBoundingClientRect();
    
      return gameElementStats.y + gameElementStats.height/2;
    }


window.addEventListener("load",()=>{
    ball.style.top = "50%";
    ball.style.left = "50%";

    console.log(ball.getBoundingClientRect().left);
})


// PLAYER LOGIC

function Player1MovementUp(){
    
    let Player1TopPosition = player1.getBoundingClientRect().top ;

    if(Player1TopPosition > topGameLimit ){
        move1 -= distance;
        player1.style.transform = `translateY(${move1}px)`;
       
        
    }
    
}

function Player1MovementDown(){
    
    let Player1TopPosition = player1.getBoundingClientRect().top ;


    if(Player1TopPosition < bottomGameLimit){
        move1 += distance;
        player1.style.transform = `translateY(${move1}px)`;
    }
 
}

function Player2MovementUp(){
    
    
    let Player2TopPosition = player2.getBoundingClientRect().top;


    if(Player2TopPosition > topGameLimit){
        move2 -= distance;
        player2.style.transform = `translateY(${move2}px)`;
        
    }
}



function Player2MovementDown(){
    

    let Player2TopPosition = player2.getBoundingClientRect().top;


    if(Player2TopPosition < bottomGameLimit){
        move2 += distance;
        player2.style.transform = `translateY(${move2}px)`;
        
    }
}


function PlayerMovement(){

    if(keys["w"] || keys["W"]){
       
        Player1MovementUp();
    }

    if(keys["s"] || keys["S"]){
        Player1MovementDown();
    }

    if(keys["ArrowUp"]){
        Player2MovementUp();
    }

    if(keys["ArrowDown"]){
        Player2MovementDown();
    }

    requestAnimationFrame(PlayerMovement);
}




requestAnimationFrame(PlayerMovement);


window.addEventListener("keydown", (event)=>{
    keys[event.key] = true;
    
   
})


window.addEventListener("keyup", (event)=>{
    keys[event.key] = false;
})

// BALL LOGIC

function BallMoveRight(){

    let ballPositionLeft = ball.getBoundingClientRect().left;

    let ballPositionTop = ball.getBoundingClientRect().top;

    let ballCenterX = GameElementCenterX(ball);

    let ballCenterY = GameElementCenterY(ball);

    let player2CenterX = GameElementCenterX(player2);

    let player2CenterY = GameElementCenterY(player2);


    if(ballMovementRight){
        
        moveBallX += distance;

        moveBallY += ballMovementUp*distance2;
       
        ball.style.transform = `translate(${moveBallX}px,${moveBallY}px)`; 
    } 

    
   


    
    if(Math.abs(ballCenterX - player2CenterX) < player1Width && Math.abs(ballCenterY - player2CenterY) <= 32){
        ballMovementRight = false;

        if(ballCenterY - player2CenterY >= 0){
            ballMovementUp = 1;
        }else if (ballCenterY - player2CenterY < 0){
            ballMovementUp = -1;
        }

        
    }
    
    
    
    
    if(ballPositionLeft >= rightGameLimit){
        moveBallX = 0;
        moveBallY = 0;
        ball.style.top = "50%";
        ball.style.left = "304px";
        ball.style.transform = `translate(${moveBallX}px,${moveBallY}px)`; 
        ballMovementRight = false;  

        playerScore1++;

        score1.textContent=`${playerScore1}`;

        if( playerScore1 === gameWinner){
            gameMenu.style.display = "flex";
            gameContainer.style.visibility = "hidden";
            cancelAnimationFrame(BallMovement);
        }
        

        
    }
    

    if(ballPositionTop <= (topGameLimit) || ballPositionTop >= bottomGameLimitBall){
        ballMovementUp = -ballMovementUp;

        moveBallY += ballMovementUp*(2*distance2);
       
        ball.style.transform = `translate(${moveBallX}px,${moveBallY}px)`; 
    }

    
       

}


function BallMoveLeft(){

    let ballPositionLeft = ball.getBoundingClientRect().left;

    let ballPositionTop = ball.getBoundingClientRect().top;

    let ballCenterX = GameElementCenterX(ball);

    let ballCenterY = GameElementCenterY(ball);

    let player1CenterX = GameElementCenterX(player1);

    let player1CenterY = GameElementCenterY(player1);



    if(!ballMovementRight){
        
        moveBallX -= distance;
        
        moveBallY += ballMovementUp*distance2;
       
        ball.style.transform = `translate(${moveBallX}px,${moveBallY}px)`; 
    } 


    

   
    

    if(Math.abs(ballCenterX - player1CenterX) < player1Width  && Math.abs(ballCenterY - player1CenterY) <= 32){
        ballMovementRight = true;

        if(ballCenterY - player1CenterY >= 0){
            ballMovementUp = 1;
        }else if (ballCenterY - player1CenterY < 0){
            ballMovementUp = -1;
        }

        
    }
    
   
    
    if (ballPositionLeft <= leftGameLimit){
        moveBallX = 0;
        moveBallY = 0;

        ballMovementRight = true;

        ball.style.top = "50%";
        ball.style.left = "50%";

        ball.style.transform = `translate(${moveBallX}px,${moveBallY}px)`; 

        playerScore2++;

        score2.textContent=`${playerScore2}`;

        if( playerScore2 === gameWinner){
            gameMenu.style.display = "flex";
            gameContainer.style.visibility = "hidden";
            cancelAnimationFrame(BallMovement);
        }
   
    }
   

    if(ballPositionTop <= topGameLimit || ballPositionTop >= bottomGameLimitBall){
        ballMovementUp = -ballMovementUp;
        moveBallY += ballMovementUp*(2*distance2);
        ball.style.transform = `translate(${moveBallX}px,${moveBallY}px)`; 
    }




}


function BallMovement(){
    
  

    BallMoveRight();

    BallMoveLeft();

    if (playerScore1 === gameWinner ||playerScore2  === gameWinner  ) {
        
        cancelAnimationFrame(animationId); 
        return;
    }

    

    animationId = requestAnimationFrame(BallMovement);
}
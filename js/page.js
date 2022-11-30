//Plays the game
function game(x){
    sessionStorage.playerchoice=x

    var x=math.cell (math.random()*3)
    
    if (y == 1) {
        sessionStorage.opponentChoice = "rock";
    }
    else if (y == 2) {
        sessionStorage.opponentChoice = "paper";
    }
    else if (y == 3) {
        sessionStorage.opponentChoice = "scissors";
    }

    if ((sessionStorage.mychoice == "rock") && (sessionStorage.opponentChoice == "paper")) {
        sessionStorage.result = "lose"
    }
    else if ((sessionStorage.mychoice == "rock") && (sessionStorage.opponentChoice == "scissors")) {
        sessionStorage.result = "win"
    }
    else if ((sessionStorage.mychoice == "paper") && (sessionStorage.opponentChoice == "scissors")) {
        sessionStorage.result = "lose"
    }
    else if ((sessionStorage.mychoice == "paper") && (sessionStorage.opponentChoice == "rock")) {
        sessionStorage.result = "win"
    }
    else if ((sessionStorage.mychoice == "scissors") && (sessionStorage.opponentChoice == "rock")) {
        sessionStorage.result = "lose"
    }
    else if ((sessionStorage.mychoice == "scissors") && (sessionStorage.opponentChoice == "paper")) {
        sessionStorage.result = "win"
    }
    else if (sessionStorage.mychoice == sessionStorage.opponentChoice) {
        sessionStorage.result = "tie"
    }
    //Creates Notification
    if (sessionStorage.result == "tie") {
        document.getElementById ("result").innerHTML = "It's A Tie!";
    }
    else if (sessionStorage.result == "win") {
        document.getElementById ("result").innerHTML = "You Won!";
    }
    else if (sessionStorage.result == "lose") {
        document.getElementById ("result").innerHTML = "You Lose!";
    }
//Shows Opponets Img
document.getElementById





    }









function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "ROCK";
    } else if (choice == 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(computerSelection, userSelection) {
    let choice = userSelection.toUpperCase();
    let result = "";
    if (computerSelection == choice) {
        result = "It's a draw!";
    }

    if (computerSelection == "ROCK") {
        if (choice == "SCISSORS") {
            result = "You lose! Rock beats scissors";
        } else if (choice == "PAPER") {
            result = "You win! Paper beats rock";
        }
    } else if (computerSelection == "PAPER") {
        if (choice == "ROCK") {
            result = "You lose! Paper beats rock";
        } else if (choice == "SCISSORS") {
            result = "You win! Scissors beats paper";
        }
    } else if (computerSelection == "SCISSORS") {
        if (choice == "PAPER") {
            result = "You lose! Scissors beats paper";
        } else if (choice == "ROCK") {
            result = "You win! Rock beats scissors";
        }
    }

    console.log(result);
    document.getElementById('result').innerHTML = result;
    return result;
}

function game() {
    let userSelection = document.getElementById('entry').value;
    playRound(computerPlay(), userSelection);
}

document.getElementById('play').onclick = function() {
    game();
};
let turn = 1;

// Function to indicate player turn
function playerTurn(inputBox) {
    if (inputBox.value === "") {
        if (turn === 1) {
            inputBox.value = `✖`;
            console.log("X");
            turn = 0;
        } else {
            inputBox.value = `◯`;
            console.log("0");
            turn = 1;
        }
    }
}

// Functions to indicate winner
function whoWon() {
    
}

// Function to reset gameboard
function gameReset() {
    let allInputs = document.querySelectorAll('input[type="button"]')
    allInputs.value = "";
    turn = 1;
}
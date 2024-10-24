let turn = 1;

// Functions to indicate player turn
function playerTurn() {
    let inputBox = this;
    if (turn = 1) {
        inputBox.value = "X";
        turn = 0;
    } else {
        inputBox.value = "0";
        turn = 1;
    }
}


function gameReset() {
    allInputs.value = "";
    turn = 1;
}
let turn = 1;

// Functions to indicate player turn
function playerTurn(inputBox) {
    if (inputBox == " ") {
        if (turn == 1) {
            inputBox.innerHTML = <ion-icon name="close-outline"></ion-icon>;
            console.log("X");
            turn = 0;
        } else {
            inputBox.innerHTML = <ion-icon name="ellipse-outline"></ion-icon>;
            console.log("0");
            turn = 1;
        }
    }
    
}


function gameReset() {
    let allInputs = document.querySelectorAll('input[type="button"]')
    allInputs.value = "";
    turn = 1;
}
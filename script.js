let turn = 1;


// Functions to indicate player turn
function playerTurn(inputBox) {
    if (inputBox.value === "") {
        if (turn == 1) {
            inputBox.value = `X`;
            console.log("X");
            turn = 0;
        } else {
            inputBox.value = `O`;
            console.log("0");
            turn = 1;
        }
    }
    
}
///
resetbtn = document.getElementById("rst-btn");
resetbtn.addEventListener("click", gameReset)

function gameReset() {
    let allInputs = document.querySelectorAll('input[type="button"]')
    allInputs.forEach(input => {
        input.value = "";
    });
    turn = 1;
}
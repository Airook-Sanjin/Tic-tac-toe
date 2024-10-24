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

let a1, a2, a3;
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");


// Functions to indicate winner
p2score = 0;
function whoWonO() {
    let player2Score = document.getElementById("p2score");
    if (a1.value == "◯" && a2.value == "◯" && a3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        let winner = document.createElement("p");
        winner.textContent = "Player 2 Won!"
    } 
    else if (b1 == "◯" && b2 == "◯" && b3 == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
    }
    else if (c1 == "◯" && c2 == "◯" && c3 == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
    }
    else if (a1.value == "◯" && b1.value == "◯" && c1.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
    }
    else if (a2.value == "◯" && b2.value == "◯" && c2.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
    }
    else if (a3.value == "◯" && b3.value == "◯" && c3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;2
        player2Score.textContent = `Score: ${p2score}`;
    }
    else if (a1.value == "◯" && b2.value == "◯" && c3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
    }
    else if (a3.value == "◯" && b2.value == "◯" && c1.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
    }
}


// Function to reset gameboard
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
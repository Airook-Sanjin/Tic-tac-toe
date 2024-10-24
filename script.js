let turn = 1;
let p1Score = 0;
let p2score = 0;
let a1, a2, a3, c1, c2, c3, b1, b2, b3; 
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");
c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
let score = document.getElementById("p1score");
let player2Score=document.getElementById("p2score")

// Functions to indicate player turn

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

function whoWonX(){
    if(a1.value ==="✖" && a2.value==="✖" && a3.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
    else if(b1.value ==="✖" && b2.value==="✖" && b3.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
    else if(c1.value ==="✖" && c2.value==="✖" && c3.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
    else if(a1.value ==="✖" && b1.value==="✖" && c1.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
    else if(a2.value ==="✖" && b2.value==="✖" && c2.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
    else if(a3.value ==="✖" && b3.value==="✖" && c3.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
    else if(a1.value ==="✖" && b2.value==="✖" && c3.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
    else if(c1.value ==="✖" && b2.value==="✖" && a3.value==="✖"){ 
        p1Score++
    score.innerText = `Score: ${p1Score}`
    console.log(score.innerText)
    gameReset();
    }
}
function calculatePoints(){
whoWonX();
whoWonO();
}

// Functions to indicate winner
function whoWonO() {
    let player2Score = document.getElementById("p2score");
    if (a1.value == "◯" && a2.value == "◯" && a3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
    } 
    else if (b1.value == "◯" && b2.value == "◯" && b3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
    }
    else if (c1.value == "◯" && c2.value == "◯" && c3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
    }
    else if (a1.value == "◯" && b1.value == "◯" && c1.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
    }
    else if (a2.value == "◯" && b2.value == "◯" && c2.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
    }
    else if (a3.value == "◯" && b3.value == "◯" && c3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
    }
    else if (a1.value == "◯" && b2.value == "◯" && c3.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
    }
    else if (a3.value == "◯" && b2.value == "◯" && c1.value == "◯") {
        console.log("Player 2 Won!");
        p2score++;
        player2Score.textContent = `Score: ${p2score}`;
        gameReset();
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
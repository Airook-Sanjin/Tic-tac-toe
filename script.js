let turn = 1;
let p1Score = 0;
let p2Score = 0;
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
    calculatePoints()
}

function whoWonX(){
    if(a1.value ==="X" && a2.value==="X" && a3.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
    else if(b1.value ==="X" && b2.value==="X" && b3.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
    else if(c1.value ==="X" && c2.value==="X" && c3.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
    else if(a1.value ==="X" && b1.value==="X" && c1.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
    else if(a2.value ==="X" && b2.value==="X" && c2.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
    else if(a3.value ==="X" && b3.value==="X" && c3.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
    else if(a1.value ==="X" && b2.value==="X" && c3.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
    else if(c1.value ==="X" && b2.value==="X" && a3.value==="X"){ 
        p1Score++
    score.innerText = `score: ${p1Score}`
    console.log(Score.innerText)
    }
}
function calculatePoints(){
whoWonX();


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
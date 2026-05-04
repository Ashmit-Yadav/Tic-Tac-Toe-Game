let boxes = document.querySelectorAll(".box");
let stateWin = document.querySelector("#winner");
let contWin = document.querySelector(".win-statement");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let turn0 = true;
let cnt = 0;
let isWinner = false;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turn0){
            box.textContent = "O";
            box.style.color="blue";
            turn0 = !turn0;
        }else{
            box.textContent = "X";
            box.style.color="yellow";
            turn0 = !turn0;
        }
        box.disabled = true;
        cnt++;
        checkWinner();
        checkDraw();
    })
});

const resetGame = ()=>{
 enableBoxes();
 cnt = 0;
 contWin.classList.add("hide");
 isWinner = false;
}

const enableBoxes=()=>{
    for(let box of boxes){
      box.disabled = false;
      box.textContent="";}
    }

const disableBoxes=()=>{
    for(let box of boxes)
      box.disabled = true;
    }

const showWinner = (winner) =>{
    stateWin.textContent = "Congratulations ;) Winner is: " + winner;
   contWin.classList.remove("hide");
   console.log("Winner is: " + winner);
   isWinner = true;
   disableBoxes();
}

const checkWinner = () =>{
 for(let win of winPatterns){
    
    let val0 = boxes[win[0]].textContent;
    let val1 = boxes[win[1]].textContent;
    let val2 = boxes[win[2]].textContent;

    if(val0 != "" && val0 === val1 && val1 === val2)
      showWinner(val0);
        }
} 

const showDraw = () =>{
    stateWin.textContent = "MATCH  DRAW!!";
    contWin.classList.remove("hide");
    console.log("Match Drawn :)")
}

const checkDraw = () =>{
    if(cnt == 9 && !isWinner){
        showDraw();
    }
}


reset.addEventListener("click",()=>{
resetGame();
})
newGame.addEventListener("click",()=>{
resetGame();
})

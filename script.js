let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_game = document.querySelector("#new-game");
let msg_container = document.querySelector(".msg-container");
let winning_msg = document.querySelector("#winning-msg");


// for reset the game
const resetgame = ()=>{
    turnO = "true";
   enable_in_new_game();
   msg_container.classList.add("hide")
}
////////////////////////////
let turnO = "true";
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) { /// player o turn(because turno = "true")
            box.innerText = "O";
            turnO = false;
        }
        else { // player x turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpatterns) {

        let posi1val = boxes[pattern[0]].innerText;
        let posi2val = boxes[pattern[1]].innerText;
        let posi3val = boxes[pattern[2]].innerText;

        if (posi1val != "" && posi2val != "" && posi3val != "") {
            if (posi1val === posi2val && posi2val === posi3val) {
                showwinner(posi1val);
                return;
            }
        }
    }
    checkDraw();
};
const checkDraw = () => {
    const allBoxesFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allBoxesFilled) {
        winning_msg.innerText = "It's a draw! you can play once more";
        msg_container.classList.remove("hide");
        disable_allbutton_after_win();
    }
};
const showwinner = (winner) => {
    winning_msg.innerText = `Congratulation Winner is ${winner}`;
    msg_container.classList.remove("hide")
    disable_allbutton_after_win()
}
const disable_allbutton_after_win = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
// for start a new game
const enable_in_new_game =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
new_game.addEventListener("click",resetgame);
reset_btn.addEventListener("click",resetgame)


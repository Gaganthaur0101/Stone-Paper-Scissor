let userscore = 0;
let compscore = 0;

const container = document.querySelectorAll(".pic");
const msg = document.querySelector("#msg");
const score = document.querySelector("#user");
const cscore = document.querySelector("#computer");


const drawgame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "aqua";
}

const gencompchoice = () =>{
    const arr = ["rock","paper","scissor"];
    const rand = Math.floor(Math.random()*3);
    return arr[rand];
}
const showWinner = (userwin) => {
    if (userwin) {
        console.log("you win");
        msg.innerText = `You Win!`;
        msg.style.backgroundColor = "green";
        userscore++;
        score.innerText =   userscore;
    }
    else{
        console.log("you lose");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
        compscore++;
        cscore.innerHTML = compscore;
    }
}
const playgame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice = ",compchoice);
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
}

container.forEach((pic) => {
    pic.addEventListener("click" ,() => {
        const userchoice = pic.getAttribute("id");
        playgame(userchoice);
    });
});  
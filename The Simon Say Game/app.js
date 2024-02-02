let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if (started == false) {
        console.log('game is started');
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    //random btn choose

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randColor);
    console.log(randIdx);
    console.log(randBtn);
    gameFlash(randBtn);
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
} 
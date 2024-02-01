let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red","purple","green"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if (started == false) {
        console.log('game started');
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function levelUp(){
    level++;
    h2.innerText=`level ${level}`;

    //random btn choose

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btn[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    console.log(randColor);
    console.log(randIdx);
    console.log(randbtn);
    btnFlash();
}

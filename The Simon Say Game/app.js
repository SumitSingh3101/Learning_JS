let gameSeq=[];
let userSeq=[];

let starteed = false;
let level = 0;

docuument.addEventListener("keypress", function (){
    if (started == false) {
        console.log('game started');
        started = true;

        levelUp();
    }
});

function
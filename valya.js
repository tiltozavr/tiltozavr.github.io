const RAINBOWKITTY = {
    left: 84,
    top: 650,
    transitionduration: 0,
    element: document.getElementById("rainbowkitty"),
};

const HEART = {
    element: document.getElementById("heart"),
    width: 138,
    height: 138,
}

RAINBOWKITTY.element.style.top = RAINBOWKITTY.top + "px";
RAINBOWKITTY.element.style.left = RAINBOWKITTY.left + "px";

start();

function start() {
    setTimeout(() => {
        move();
        beat();
    }, 0);
    setInterval(() => {
        move();
        
    }, 8000);
    setInterval (() => {
        beat();
    }, 2000); 
}    

function move() {
    const recoveryTime = 4000;
    const targetLeft = 1200;
    const targetTop = 650; 
    const moveTime = 4000;
    const reverse = recoveryTime + moveTime; 
    RAINBOWKITTY.element.style.transitionDuration = moveTime + "ms";
    RAINBOWKITTY.element.style.transitionProperty = "left";
    RAINBOWKITTY.element.style.top = targetTop + "px";
    RAINBOWKITTY.element.style.left = targetLeft + "px";
    
    setTimeout(() => {
        RAINBOWKITTY.element.style.top = RAINBOWKITTY.top;
        RAINBOWKITTY.element.style.left = RAINBOWKITTY.left;
        RAINBOWKITTY.element.style.transform = "scale(-1,1)";
    }, recoveryTime)

    setTimeout (() => {
        RAINBOWKITTY.element.style.transform = "";
    }, reverse)
}

function beat() {
    const heartWidth = 200;
    const heartHeight = 200;
    const heartMoveTime = 300;
    const heartRecoveryTime = 300;
    HEART.element.style.transitionDuration = heartMoveTime + "ms";
    HEART.element.style.transitionProperty = "all";
    HEART.element.style.width = heartWidth + "px";
    HEART.element.style.height = heartHeight + "px"; 
    setTimeout(() => {
        HEART.element.style.width = HEART.width;
        HEART.element.style.height = HEART.height;
    }, heartRecoveryTime)
}
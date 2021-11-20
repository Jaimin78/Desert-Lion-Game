score  = 0;
cross = true;
document.onkeydown = function(e) {
    console.log("key code is:", e.keyCode)
    if(e.keyCode==32)
    {
        camel = document.querySelector('.Camel');
        camel.classList.add('animateCamel');
        setTimeout(() => {
            camel.classList.remove('animateCamel')
        }, 700);
    }

    if(e.keyCode==39)
    {
        camel = document.querySelector('.Camel');
        camelX = parseInt(window.getComputedStyle(camel, null).getPropertyValue('left'));
        camel.style.left = camelX + 112 + "px";
    }

    if(e.keyCode==37)
    {
        camel = document.querySelector('.Camel');
        camelX = parseInt(window.getComputedStyle(camel, null).getPropertyValue('left'));
        camel.style.left = (camelX - 112) + "px";
    }
}

setInterval(() => {
    camel = document.querySelector('.Camel');
    Gameover = document.querySelector('.Gameover');
    Obstacle = document.querySelector('.Obstacle');

    cx = parseInt(window.getComputedStyle(camel, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(camel, null).getPropertyValue('top'));   
    ox = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(cx-ox);
    offsetY = Math.abs(cy-oy);
    console.log(offsetX, offsetY);
    if(offsetX < 70 && offsetY < 95){
        Gameover.style.visibility = 'visible';
        Obstacle.classList.remove('Obstacleani');
    }
    else if(offsetX<144 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 100);

function updatescore(score) {
    ScoreCont = document.querySelector('.ScoreCont');
    ScoreCont.innerHTML = "Your Score:" +score;
}
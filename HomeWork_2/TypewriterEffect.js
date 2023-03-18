const textDisplay = document.getElementById('textEffect');
const phrases = ['There are too many people using it now, please wait. If waiting too long you can try to F5'];
const audio = new Audio('sound.mp3');
audio.muted = true;
let i =0;
let j =0;
let currentPhrases = [];
let delay = 0;
function loop(){ //the loop for type effect

    textDisplay.innerHTML = currentPhrases.join(''); //put in space
    audio.muted = false;
    audio.play();//play sound effects
    if (i < phrases.length){

        if (j < phrases[i].length){
            currentPhrases.push(phrases[i][j]);

            j++;
        }

        if (j == phrases[i].length){
            currentPhrases.push(' ');
            i++;
            j=0;
        }
    }
    delay = random(100, 500);
    setTimeout(loop, delay);
}
function random(min, max){ //random number for delay time
    return Math.floor(Math.random()* (max- min+ 1)) + min;
}

loop();

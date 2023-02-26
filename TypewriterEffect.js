const textDisplay = document.getElementById('textEffect');
const phrases = ['There are too many people using it now, please wait. If waiting too long you can try to F5'];
let i =0;
let j =0;
let currentPhrases = [];
function loop(){

    textDisplay.innerHTML = currentPhrases.join('');
    if (i < phrases.length){

        if (j < phrases[i].length){

            currentPhrases.push(phrases[i][j]);
            playAudio();
            j++;
        }

        if (j == phrases[i].length){
            currentPhrases.push(' ');
            i++;
            j=0;
        }
    }
    setTimeout(loop, random(100, 500));

}
function random(min, max){
    return Math.floor(Math.random()* (max- min+ 1)) + min;
}
function playAudio(){
    const audio = new Audio('sound.mp3');
    audio.play();
}
loop();
console.log ("James is here");
const jamesEat = document.querySelector("#jamesEat")
const jamesSleep = document.querySelector("#jamesSleep")
const jamesHug = document.querySelector("#jamesHug")
const jamesBad = document.querySelector("#jamesBad")
const progress = document.querySelector("#progress")

let score = 0;
function updateScore(){
    if (score == 0) {
        progress.src = "progressbar1.png"
    }
    if (score == 1) {
        progress.src = "progressbar2.png";
    }
    if (score == 2) {
        progress.src = "progressbar3.png";
    }
    if (score == 3) {
        progress.src = "progressbar4.png";
    }
    if (score == 4) {
        neutral.src = "jamessuperhappy.jpg"
        var heading = document.getElementById("header1");
        heading.innerHTML = 'James is super happy!'
    }
    }

function imagechanger() {
    document.getElementById("neutral").src = "jameseat.jpeg";
    score ++;
    console.log(score);
    updateScore();
}
// Ik ben voor mijn eerste function geholpen door Mees Groeneveld

function imagechanger2() {
    document.getElementById("neutral").src = "jamessleep.jpg";
    score ++;
    console.log(score);
    updateScore();
}

function imagechanger3() {
    document.getElementById("neutral").src = "jameshug.jpeg";
    score ++;
    console.log(score);
    updateScore();
}

function imagechanger4() {
    document.getElementById("neutral").src = "jamesbad.jpeg";
    score --;
    console.log(score);
    updateScore();
}

function changeheadingbad() {
    var heading = document.getElementById("header1");
    heading.innerHTML = 'James is angry, he does not like kisses!'
}

function changeheadinggood() {
    var heading = document.getElementById("header1");
    heading.innerHTML = 'James is happy!'
}

jamesEat.addEventListener('click', imagechanger)
jamesSleep.addEventListener('click', imagechanger2)
jamesHug.addEventListener('click', imagechanger3)
jamesBad.addEventListener('click', imagechanger4)
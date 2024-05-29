console.log ("James is here");
const jamesEat = document.querySelector("#jamesEat")
const jamesSleep = document.querySelector("#jamesSleep")
const jamesHug = document.querySelector("#jamesHug")
const jamesBad = document.querySelector("#jamesBad")
const progress = document.querySelector("#progress")

let score = 0;
function updateScore(){
    if (score == -1) {
        progress.src = "progressbar0.png"
    }
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
        neutral.src = "jamessuperhappy.jpeg"
        var heading = document.getElementById("header1");
        heading.innerHTML = 'James is super happy!'
    }
    }

//Image changer function met behulp van Mees Groeneveld
// function imagechanger() {
//     document.getElementById("neutral").src = "jameseat.jpeg";
//     score ++;
//     console.log(score);
//     updateScore();
// }

// function imagechanger2() {
//     document.getElementById("neutral").src = "jamessleep.jpeg";
//     score ++;
//     console.log(score);
//     updateScore();
// }

// function imagechanger3() {
//     document.getElementById("neutral").src = "jameshug.jpeg";
//     score ++;
//     console.log(score);
//     updateScore();
// }

function verandernaarBad() {
    document.getElementById("neutral").src = "jamesbad.jpeg";
    score --;
    console.log(score);
    updateScore();
}

function veranderNeed(need) {
    document.getElementById("neutral").src = "james"+ need +".jpeg";
    score ++;
    console.log(score);
    updateScore();
}
jamesHug.addEventListener('click', function(){
    veranderNeed("hug")
})
jamesEat.addEventListener('click', function(){
    veranderNeed("eat")
})
jamesSleep.addEventListener('click', function(){
    veranderNeed("sleep")
})

function changeheadingbad() {
    let heading = document.getElementById("header1");
    heading.innerHTML = 'James is angry, he does not like kisses!'
}

function changeheadinggood() {
    let heading = document.getElementById("header1");
    heading.innerHTML = 'James is happy!'
}

// jamesEat.addEventListener('click', imagechanger)
// jamesSleep.addEventListener('click', imagechanger2)
// jamesHug.addEventListener('click', imagechanger3)
jamesBad.addEventListener('click', verandernaarBad)
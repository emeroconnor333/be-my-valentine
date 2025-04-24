const gifEl = document.getElementById("gif");
const yesBtnEl = document.getElementById("yes-btn");
const noBtnEl = document.getElementById("no-btn");
let noStage = 1;

function yesClick() {
    // Remove buttons
    yesBtnEl.style.display = "none";
    noBtnEl.style.display = "none";
    // Change gif
    gifEl.src = "gifs/happy-jigglypuff.gif";
}

function noClick() {
    gifEl.src = `gifs/jigglypuff-sad-${noStage}.gif`;

    let yesSize = parseFloat(getComputedStyle(yesBtnEl).fontSize);
    yesBtnEl.style.fontSize = (yesSize * 1.4) + "px";

    let noSize = parseFloat(getComputedStyle(noBtnEl).fontSize);
    noBtnEl.style.fontSize = (noSize * 0.8) + "px";
    
    noStage = (noStage % 4) + 1;
}
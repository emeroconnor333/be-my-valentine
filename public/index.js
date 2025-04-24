const gifEl = document.getElementById("gif");
const yesBtnEl = document.getElementById("yes-btn");
const noBtnEl = document.getElementById("no-btn");
let stage = 1;

function yesClick() {
    // Remove buttons
    yesBtnEl.style.display = "none";
    noBtnEl.style.display = "none";
    // Change gif
    gifEl.src = "gifs/happy-jigglypuff.gif";
}

function noClick() {
    console.log("no");
}
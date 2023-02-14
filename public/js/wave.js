let waveEmoji = document.getElementById("wave-emoji");
let rotation = 15;
let loc = 0;

function waveLeft() {
    rotation += -1;
    waveEmoji.style.transform = "rotate(" + rotation + "deg)";
    if(rotation >= 0) {
        requestAnimationFrame(waveLeft);
    }
    else {
        requestAnimationFrame(waveRight);
    }
}

function waveRight() {
    rotation += 1;
    waveEmoji.style.transform = "rotate(" + rotation + "deg)";
    if(rotation <= 30) {
        requestAnimationFrame(waveRight);
    }
    else {
        requestAnimationFrame(waveLeft);
    }
}

requestAnimationFrame(waveLeft);
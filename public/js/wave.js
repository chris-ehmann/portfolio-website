let waveEmoji = document.getElementById("wave-emoji");
let rotation = 15;
let count = 0;

function waveLeft() {
    count++;
    rotation += -1.15;
    waveEmoji.style.transform = "rotate(" + rotation + "deg)";
    if(rotation >= 0) {
        requestAnimationFrame(waveLeft);
    }
    else {
        if(count >= 400) {
            count = 0;
            setTimeout(waveRight, 5000);
        }
        else {
            requestAnimationFrame(waveRight);
        }
    }
}

function waveRight() {
    rotation += 1.15;
    count++;
    waveEmoji.style.transform = "rotate(" + rotation + "deg)";
    if(rotation <= 30) {
        requestAnimationFrame(waveRight);
    }
    else {
        requestAnimationFrame(waveLeft);
    }
}

requestAnimationFrame(waveLeft);
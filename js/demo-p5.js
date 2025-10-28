function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    //background(100, 100, 100, 100);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
const red = Math.abs(Math.sin(frameCount * 0.01)) * 255;
const green = Math.abs(Math.sin(frameCount * 0.01 + 1)) * 255;
const blue = Math.abs(Math.sin(frameCount * 0.01 + 2)) * 255;
    fill(red, green, blue);
    ellipse (mouseX, mouseY, 100, 100);
}

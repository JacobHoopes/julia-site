let img;
let oldX = mouseX+1;
let oldY = mouseY+1;
var angle;
var newAngle;
var settledAngle = 0;

function preload() {
    // img = loadImage('./image.png');
}

function setup() {
    noCursor()
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("body")
    canvas.position(0,0)

    let div = homeNavBar()
    div.position(0,0)
    div.style("background-color:red")
    frameRate(60)

    // angle = 90
}


function draw() {
    background(1,50,32,40)
    let side = 30;
    // noFill()
    fill(255,192,203)
    stroke(255,192,203)
    // strokeWeight(abs(Math.cos(frameCount/21)*4))
    // rectMode(CENTER)
    // background(1,50,32,14)
    // rect(mouseX, mouseY, abs(Math.sin(frameCount/21)*30))
    // if (mouseX !== pmouseX) {
    //     oldX = pmouseX
    // }
    // if (mouseY !== pmouseY) {
    //     oldY = pmouseY
    // }
    // let v = createVector(mouseX - pmouseX, mouseY - pmouseY)
    // v.normalize();
    // if (true) {
    //     angle = atan2(mouseY - pmouseY, mouseX - pmouseX)
    // }

    let newAngle = atan2(mouseY - pmouseY, mouseX - pmouseX)
    if (newAngle === 0) {
        angle = settledAngle
    } else {
        angle = newAngle
        settledAngle = newAngle
    }

    let x1 = mouseX + cos(angle - 3*HALF_PI/2) * side;
    let y1 = mouseY + sin(angle - 3*HALF_PI/2) * side;
    let x2 = x1 + cos(angle + 3*HALF_PI/2) * side;
    let y2 = y1 + sin(angle + 3*HALF_PI/2) * side;
    let x3 = mouseX + cos(angle + 3*HALF_PI/2) * side;
    let y3 = mouseY + sin(angle + 3*HALF_PI/2) * side;
    
    quad(mouseX, mouseY, x1, y1, x2, y2, x3, y3)
    circle(mouseX, mouseY, 2*side)
}


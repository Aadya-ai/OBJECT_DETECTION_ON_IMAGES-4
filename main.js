img = "";
status = "";

function preload() {
    img = loadImage('room.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#00008B");
    text("Table", 60, 75);
    noFill();
    stroke("#00008B");
    rect(50, 60, 550, 350);

    fill("#00008B");
    text("Computer", 210, 145);
    noFill();
    stroke("#00008B");
    rect(200, 130, 240, 220);
}

function Kchat() {
    window.location.href = "";
}
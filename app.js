Status = "";

function preload()
{

}

function setup()
{
    canvas = createCanvas(350, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objectes";
    document.getElementById("object_name").value;
}

function modalLoaded()
{
    console.log("Modal Loaded!");
    Status = true;
}

function draw()
{
    image(video, 0, 0, 350, 250);
}
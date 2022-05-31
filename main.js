noseX=0;
noseY=0;

function preload() {
  moustache = loadImage("https://www.pngitem.com/pimgs/m/43-436630_mustache-french-moustache-transparent-background-hd-png-download.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(350, 350);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 350, 350);
    image(moustache, noseX, noseY, 80, 35);
  }
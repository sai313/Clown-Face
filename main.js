noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("PoseNet has started");
}

function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x-20;
        noseY = result[0].pose.nose.y-15;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 40, 40);
}

function take_snapshot() {
    save("clown.png");
}
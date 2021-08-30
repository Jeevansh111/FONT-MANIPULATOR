difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas =createCanvas(550, 500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!!');
}
function draw() {
    background('red');
    fill('#F90093');
    text('Jeevansh', 50,400);
}
function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(result);
    }
    leftWristX = results[0].pose.leftWrist.x;
    leftWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWrist);
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550 , 550);

    canvas=createCanvas(550 , 510);
    canvas.position(550 , 150);
    poseNet=ml5.poseNet("video" , modelLoaded);
    poseNet.on("poses" ,gotPoses);


}

function modelLoaded(){
    console.log("model is initialzed");
}


function draw(){
    background("#ADD8E6");
}

function gotPoses(results){
    if(results.lenght>0)
    {
        console.log(results);
    }
}


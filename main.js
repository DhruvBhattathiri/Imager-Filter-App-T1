lipstickX=0;
lipstickY=0;
moustacheX=0;
moustacheY=0;

function preload(){
    moustache = loadImage("moustache.jpg") ;
    lipstick = loadImage("lipstick.jpg")
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function setup(){
    createcanvas(640,480);
    canvas.background("bgi.jpg")
    canvas.center();
    tint_color = "";
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);;
        lipstickY = results[0].pose.lip.y-15;
        lipstickX = results[0].pose.lip.x-15;

        moustacheX = results[0].pose.lip.x-20;
        moustacheY = results[0].pose.lip.y-20;
    }
}

function draw(){   
 tint(tint_color);
 image(video, 0, 0, 300, 300);
 image(lipstick, lipstickX, lipstickY, 30, 30);
}

function snap(){
    save('myfilterImage');
}

function filter(){
    tint_color  = document.getElementById("filter").value;
}
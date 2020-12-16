noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/mkYcV4Y5/Ppppppppppp.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on('pose',gotpose);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,100,100);
}
function take_snapshot(){
    save('get_scammed.png');
}
function model_loaded(){
    console.log("pose net has scammed you");
}
function gotpose(results){
    if(results.length>0){
       console.log(results);
        noseX= results[0].pose.nose.x-40;
        noseY= results[0].pose.nose.y-30;
    }
}
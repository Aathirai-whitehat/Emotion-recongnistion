Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(pic){
        document.getElementById("snap").innerHTML=`<img id="captured pic" src=${pic}>`
    });
}

console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qrVw1vt4_/model.json',modelloaded);

function modelloaded(){
    console.log("Model loaded");
}
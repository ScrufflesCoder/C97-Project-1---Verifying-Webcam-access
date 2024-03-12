//https://teachablemachine.withgoogle.com/models/5nfjdAlRz/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture_face()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5nfjdAlRz/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded");
}

function verify()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("result_face_name").innerHTML = results[0].label;
        document.getElementById("result_face_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
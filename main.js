

function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2dQsAXssC/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}
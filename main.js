function startClassification(){
      navigator.mediaDevices.getUserMedia({audio:true});
      classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_P3q_6lo3/model.json',modelLoaded);
      

}
function modelLoaded(){
   classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    red=Math.floor(Math.random()*255)+1;
    green=Math.floor(Math.random()*255)+1;
    blue=Math.floor(Math.random()*255)+1;
document.getElementById("label").innerHTML="I can hear:"+results[0].label;
document.getElementById("accuracy").innerHTML="Accuracy : "+ (results[0].confidence*100).toFixed(1)+'%';
document.getElementById("label").style.color='rgb('+red+','+blue+','+green+')';
document.getElementById("accuracy").style.color='rgb('+red+','+blue+','+green+')';
 alien_1=document.getElementById("alien_1");
 alien_2=document.getElementById("alien_2");
 alien_3=document.getElementById("alien_3");
 alien_4=document.getElementById("alien_4");
 if(results[0].label=="Clap"){
     alien_1.src="aliens-01.gif";
     alien_2.src="aliens-02.png";
     alien_3.src="aliens-03.png";
     alien_4.src="aliens-04.png";
 }
 else if(results[0].label=="Snap"){
    alien_1.src="aliens-01.png";
    alien_2.src="aliens-02.gif";
    alien_3.src="aliens-03.png";
    alien_4.src="aliens-04.png";
}
else if(results[0].label=="Bell"){
    alien_1.src="aliens-01.png";
    alien_2.src="aliens-02.png";
    alien_3.src="aliens-03.gif";
    alien_4.src="aliens-04.png";
}
else if(results[0].label=="Background Noise"){
    alien_1.src="aliens-01.png";
    alien_2.src="aliens-02.png";
    alien_3.src="aliens-03.png";
    alien_4.src="aliens-04.gif";
}
}

}
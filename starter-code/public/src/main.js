var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

document.getElementById("frenchie").addEventListener("mouseover", playAudio);
document.getElementById("frenchie").addEventListener("mouseout", pauseAudio);

document.getElementById("yorkie").addEventListener("mouseover", playAudio);
document.getElementById("yorkie").addEventListener("mouseout", pauseAudio);

document.getElementById("pitbull").addEventListener("mouseover", playAudio);
document.getElementById("pitbull").addEventListener("mouseout", pauseAudio);



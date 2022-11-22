function toggleAudio(){
    var audio = document.getElementById("ambient");
    if (audio.paused) audio.play();
    else audio.pause();
 }
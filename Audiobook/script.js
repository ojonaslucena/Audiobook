const cap =document.getElementById('chapter');
const audioCap = document.getElementById('audio-chapter');
const buttonPP = document.getElementById('play');
const buttonForward =document.getElementById('forward');
const buttonBackward =document.getElementById('backward');


const chapters = 10;
let playing = 0;
let capAt = 1;

function playAudio(){
    buttonPP.classList.remove("bi-play-circle-fill");
    buttonPP.classList.add("bi-pause-circle-fill");
    audioCap.play();
    playing=1;
}

function pauseAudio(){
    buttonPP.classList.add('bi-play-circle-fill');
    buttonPP.classList.remove('bi-pause-circle-fill');
    audioCap.pause();
    playing=0;
    
}

function playOrPause(){
    if (playing===0){
        playAudio();
        playing=1
    } else{
        pauseAudio();
        playing=0;
    }
}

function forwardCap(){
    if (capAt === chapters){
        capAt = 1
    } else{
        capAt = capAt + 1;
    }
    audioCap.src = 'dom-casmurro/'+ capAt +'.mp3';
    cap.innerText='Capítulo '+ capAt;
    playAudio();
    playing=1;   
}

function backwardCap(){
    if (capAt === 1){
        capAt = chapters;
    } else{
        capAt = capAt - 1;
    }
    audioCap.src = 'dom-casmurro/'+ capAt +'.mp3';
    cap.innerText='Capítulo '+ capAt;
    playAudio();
    playing=1;
    
}


buttonPP.addEventListener('click', playOrPause);
buttonForward.addEventListener('click', forwardCap);
buttonBackward.addEventListener('click', backwardCap);

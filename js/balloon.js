const endScreen = document.getElementById('end_screen');
const help = document.getElementById('help');
const quoteCard = document.getElementById('quote');

var balloon = document.getElementById('balloon');
var cStyle = getComputedStyle(balloon);
var counter = 0;
var size = 200;
var muted;

// for starting the confetti
const start = () => {
    setTimeout(function() {
        confetti.start()
    },500); // 500 is time that after 0.5 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti 
const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 3000); // 3000 is time that after 3 second stop the confetti ( 5000 = 5 sec)
};

// play inflate sound 
function playInflate(){
    if(!muted){
        var audio = document.getElementById('inflate');
        audio.currentTime = 0;
        audio.play();
    }
}

// stop inflate sound 
function stopInflate(){
    var audio = document.getElementById('inflate');
    audio.pause();
}

// play pop sound
function playPop(){
    if(!muted){
        var audio = document.getElementById('pop');
        audio.play();
    }
}

// stop pop sound 
function stopPop(){
    if(!muted){
        var audio = document.getElementById('pop');
        audio.pause();
    }
}

// mute sound 
function muteSound(){
    if(!muted){
        muted = true;
        document.getElementById('pop').mute = true;
        document.getElementById('inflate').mute = true;;
        document.getElementById('mute').src = "./img/game_screen/mute.png"
    }
    else{
        muted = false;
        document.getElementById('mute').src = "./img/game_screen/sound.png"
    }
}

//// card block show 
//function on() {
//    document.getElementById("cards").classList.remove("hidden")
//}

////card block hide 
//function off() {
//    document.getElementById("cards").style.display = "none";
//}
//off();

//// card thing appear 
//function cardappear(){
//    setTimeout(function(){
//        var top = document.getElementById('instruc');
//        top.parentNode.removeChild(top);
//        on();
//    },500);
//};

document.getElementById("inflate").preload = "auto";

// increase size of balloon
balloon.addEventListener("touchstart", () => {
    if(!muted){
        var audio = document.getElementById('inflate');
        audio.currentTime = 0;
        audio.playbackRate = 1.5;
        audio.play();
    }
    if (counter == 30){
        console.log('hello');
        playPop()
        document.getElementById('inflate').mute = true;
        stopInflate();
        const element = document.getElementById('ball')
        //element.classList.add('animate__animated', 'animate__bounceOut');
        element.classList.add('bubble-pop');
        //start();
        createBubble();
        setTimeout(()=>{
            endScreen.classList.remove("hide")
            gameScreen.classList.add("hide")
        },1000)
        stop();        
    }else{
        counter ++;
        help.classList.add("hide")
        size = size + 5; 
        document.getElementById("ball").style.width = size + 'px';
        //playInflate();
    }
})
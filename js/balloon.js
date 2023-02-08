const endScreen = document.getElementById('end_screen');
const gamePage = document.getElementById('game_screen');
const help = document.getElementById('help');
const quoteCard = document.getElementById('quote');

var d = document.getElementById('balloon');
var cStyle = getComputedStyle(d);
var counter = 0;
var size = 250;

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
    var audio = document.getElementById('inflate');
    audio.play();
}

// stop inflate sound 
function stopInflate(){
    var audio = document.getElementById('inflate');
    audio.pause();
}

// play pop sound
function playPop(){
    var audio = document.getElementById('pop');
    audio.play();
}

// stop pop sound 
function stopPop(){
    var audio = document.getElementById('pop');
    audio.pause();
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

// increase size of balloon
function increaseSize(){ 

    if (counter == 20){
        console.log('hello');
        playPop()
        document.getElementById('inflate').mute = true;
        stopInflate();
        const element = document.getElementById('ball')
        element.classList.add('animate__animated', 'animate__bounceOut');
        start();
        setTimeout(()=>{
            endScreen.classList.remove("hide")
            gamePage.classList.add("hide")
        },1000)
        stop();        
    }else{
        counter ++;
        help.classList.add("hide")
        document.getElementById("ball").style.width = size + 'px';
        size = size + 5; 
        playInflate();
    }
}
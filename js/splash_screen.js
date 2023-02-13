const splashScreen = document.getElementById("splash_screen");

const instructionScreen = document.getElementById("instruction_screen");

const backgroundImage = document.querySelector(".backgroundImage");

document.body.style.overflow = "hidden";
document.documentElement.style.overflow = "hidden";

setTimeout(function() {
    //your code to be executed after 1 second

    //show the splash screen
    document.body.style.display = "block"




    document.getElementById("splash_screen").classList.add("splash_screen_loaded")
    
    onLoadSplash();


}, 500);

function onLoadSplash()
{
 
    
    console.log("Hi")
    var delayInMilliseconds = 2000;

    setTimeout(function() {
        //your code to be executed after 1 second

        console.log("test")

        splashScreen.classList.add("fade");
  

        var delayInMilliseconds = 2100;

        setTimeout(function() {
            //your code to be executed after 1 second

            splashScreen.remove()

            instructionScreen.classList.add("visible");

            document.documentElement.style.background = "#EAF6F8";

            document.body.style.background = "#EAF6F8";
            
            backgroundImage.style.backgroundImage = 'url("../img/rotate/startScreen.png")'
       
    

        }, delayInMilliseconds);

    }, delayInMilliseconds);
}

checkDevice()

function checkDevice(){
    if (navigator.userAgent.match(/android|iphone|kindle|ipad/i)) {
            a = true ;
         } else {
            location.assign('https://gimme.sg/activations/ClickableQR/gimmemain.html');
         }
}

document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });
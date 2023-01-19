const shareButton = document.getElementById('share')

const a = navigator.mediaDevices.getDisplayMedia;

const takeScreenshot = async() => {

    videoMediaStream = mediaStream;
            
            
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {

    video.play();
    shareButton.classList.add("hidden");

             
    video.onplay = function () {
        mediaInstance = this;

        const canvas = document.getElementById('screenshot')
        
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        const context = canvas.getContext('2d');

        (function loop ()
                    {




            

                        

                        ctx.drawImage(mediaInstance, 0, 0, window.innerWidth, window.innerHeight);
                        
                        ctx.setTransform(-1,0,0,1,canvas.width,0)
                  
                 
                        timeout = setTimeout(loop, 1000 / 60);
                    
                           

                        /*ctx.fillRect(25, 25, 100, 100);
                        ctx.clearRect(45, 45, 60, 60);
                        ctx.strokeRect(50, 50, 50, 50);*/

                        ctx.drawImage(image, -(x - 50), y - 50, imageWidth, imageHeight);

                  
                    })();
    }

    var myCanvas = canvas.cloneNode();
    var ctx = myCanvas.getContext('2d');

    var image = new Image();
    
    image.src = canvas.toDataURL('image/jpeg', 0.8);
    
    console.log(canvas.toDataURL('image/jpeg', 0.8))

    shareCanvasAsImage(img, "test");
}

async function shareCanvasAsImage(base64) {


    fetch(base64)
        .then(function(response) {
            return response.blob()
        })
        .then(function(blob) {



            var file = new File([blob], "new_picture.png", {type: blob.type});
            var filesArray = [file];
            var shareData = { files: filesArray};

            console.log(URL.createObjectURL(blob))

            if (navigator.canShare && navigator.canShare(shareData)) {

                // Adding title afterwards as navigator.canShare just
                // takes files as input


                navigator.share(shareData)
                    .then(() => {
                        
                        
                        console.log('Share was successful.')
                    }
                    
                    
                    
                    
                    )
                    .catch((error) => console.log('Sharing failed', error));

            } else {
                console.log("Your system doesn't support sharing files.");
            }

        });
}


function share() {
	takeScreenshot()
}
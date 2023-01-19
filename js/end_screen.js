const shareButton = document.getElementById('share')

const canvas = document.getElementById('screenshot')

const quote = document.getElementById('quote')

let quotes = ['./img/end_screen/quote.png',
            './img/end_screen/quote1.png',
            './img/end_screen/quote2.png',]

randomiseQuote()

function randomiseQuote(){

    randomQutoIndex = Math.floor(Math.random() * quotes.length)

    quote.src = quotes[randomQutoIndex]
}

var constraints = {

    video: {     width: 1280, height: 720,
    }
};

const takeScreenshot = async () => {

    try{
        //asking permission to use a media input to record current tab
        const stream = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab:true});
        const video = document.createElement("video");

        video.addEventListener("loadedmetadata", () =>{
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d")

            //passing video width & height as canvas width & height
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight

            //playing the video so the drawn image won't be black or blank
            video.play()

            //drawing an image from captured video stream
            ctx.drawImage(video,0,0,canvas.width, canvas.height)
            
            //terminating first video track of the stream
            stream.getVideoTracks()[0].stop();
        })
        //passing capture stream data as video source object
        video.srcObject = stream;
        console.log(stream)
    } catch{
        console.log("error")
    }
    
    url = canvas.toDataURL('image/jpeg', 0.8);
    console.log(canvas.toDataURL('image/jpeg', 0.8))

    shareCanvasAsImage(url, "test");
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
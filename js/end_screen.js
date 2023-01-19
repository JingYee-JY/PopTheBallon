const shareButton = document.getElementById('share')

const a = navigator.mediaDevices.getDisplayMedia;

const takeScreenshot = async() => {

    shareButton.classList.add("hidden");

    const stream = await navigator.mediaDevices.getDisplayMedia({
        video : {mediaDevices:'screen'}
    });

   

    const track = stream.getVideoTracks()[0];

    const image = new ImageCapture(track);

    const bitmap = await image.grabFrame();

    track.stop();

    const canvas = document.getElementById('screenshot')

    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const context = canvas.getContext('2d');

    shareButton.classList.remove("hidden");

    context.drawImage(bitmap,0,0,790,bitmap.height/2)

    const img = canvas.toDataURL('image/jpeg', 0.8);
    
    console.log(img)

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
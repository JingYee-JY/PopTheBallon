const shareButton = document.getElementById('share')

const a = navigator.mediaDevices.getDisplayMedia;

const takeScreenshot = async() => {

    shareButton.classList.add("hidden");

    const stream = await navigator.mediaDevices.getDisplayMedia({
        video : {mediaDevices:'scree'}
    });

   

    const track = stream.getVideoTracks()[0];

    const image = new ImageCapture(track);

    const bitmap = await image.grabFrame();

    track.stop();

    const canvas = document.getElementById('screenshot')

    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const context = canvas.getContext('2d');

    context.drawImage(bitmap,0,0,790,bitmap.height/2)

    shareButton.classList.remove("hidden");

    const img = canvas.toDataURL();
    
    console.log(canvas.toDataURL())

    const res = await fetch(img);
    const buff = await res.arrayBuffer();

    const file = [
        new file([buff, 'photo_${new Date()}.jpg'], {
            tpye:'image/jpeg'
        })
    ];

    return file;
}


function share() {
	takeScreenshot()
}
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
generateScreenshot()

function generateScreenshot()
{

    
    const myCanvas = document.createElement("canvas");

    let image = new Image();

    image.src = './img/instruction_screen/background.png';

    image.onload = function () {
        
        const ctx =  myCanvas.getContext("2d");
        myCanvas.width = 1500;
        myCanvas.height = 1492;


        ctx.drawImage(image, 0, 0);

        base64 = myCanvas.toDataURL('image/jpeg', 0.8);

        var image2 = new Image();
        image2.src = "./img/splash_screen/client.svg";

        var image3 = new Image();
        image3.src = quotes[randomQutoIndex];

        image2.onload = function ()
        {
            myCanvas.style.height =
                (myCanvas.height / 1.3) + "px";

            myCanvas.style.width =
                (myCanvas.width / 1.3) + "px";

                console.log(myCanvas.style.height  + " WIEHEDTH")

            //console.log(canvas.offsetHeight)
            ctx.drawImage(image2,parseInt(ctx.canvas.style.width.replace("px", "")) /2 + 70, 30
            , window.innerWidth /2,
            window.innerHeight / 5);
        }

        image3.onload = function ()
        {

            myCanvas.style.height =
                (myCanvas.height / 1.3) + "px";

            myCanvas.style.width =
                (myCanvas.width / 1.3) + "px";

            console.log(myCanvas.style.height  + " WIEHEDTH")

            //console.log(canvas.offsetHeight)
            ctx.drawImage(image3, parseInt(ctx.canvas.style.width.replace("px", "")) /4, 
            parseInt(ctx.canvas.style.width.replace("px", "")) /2.5
                , window.innerWidth * 2.5 ,
                window.innerHeight);
            // Convert canvas data to url



            base64 = myCanvas.toDataURL('image/jpeg', 0.8);

        }

        //document.body.append(myCanvas);
        console.log(myCanvas.toDataURL('image/jpeg', 0.8));

        //shareCanvasAsImage(myCanvas.toDataURL('image/jpeg', 0.8));

        setTimeout(() =>{
            base64 = myCanvas.toDataURL('image/jpeg', 0.8);
        },1000)

        console.log("loaded")

        shareCanvasAsImage(base64);

    }
    
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
	shareCanvasAsImage(base64, 0.8);
}
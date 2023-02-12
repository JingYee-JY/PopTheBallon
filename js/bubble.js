let spawnbubble;
let startingBubble = 0
let numberOfBubble = 30;

function createBubble(){
    console.log(startingBubble, numberOfBubble)
    startingBubble++;
    if(startingBubble < numberOfBubble){
        const createElement = document.createElement('div')
        var size = Math.random() * 30
    
        createElement.classList.add("bubble")
        createElement.style.width = 20 + size + "px"
        createElement.style.height = 20 + size + "px"
        createElement.style.left = Math.random() * innerWidth + "px"
        console.log(endScreen)
        endScreen.appendChild(createElement);
    
        setTimeout(() =>{
            createElement.remove()
        },6000)

        spawnbubble = setInterval(createBubble, 50)
    }
    else{
        clearInterval(spawnbubble)
    }
}
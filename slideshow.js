
let currentIndex = 0;

const images = ["xpadsix.jpg", "package.jpg", "fanitemimg.jpg"];
const imageElement = document.getElementById("image");

function switchImage(){

    currentIndex++

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    imageElement.src = images[currentIndex];

}

setInterval(switchImage, 4333);


// Why can you use javascript with out an JDK but need one for actual Java? //
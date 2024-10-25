
let currentIndex = 0;

const images = ["xpadsix.jpg", "mobilepackage.jpg", "macbookpro.jpg"];
const imageElement = document.getElementById("image");

function switchImage(){

    currentIndex++

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    imageElement.src = images[currentIndex];

}

setInterval(switchImage, 5000);

function minusImage(){

    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    imageElement.src = images[currentIndex];
    
  }




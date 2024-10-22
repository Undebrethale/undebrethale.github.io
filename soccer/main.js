
// Javascript learned by libraries online and the "// contants //" in them. //

// Not Xuanhan, he's not that smart. //

let currentIndex = 0;

const images = ["starcloth.jpg", "worldcupball.jpg", "offshoes.jpg", "bestshoe.jpg"];
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
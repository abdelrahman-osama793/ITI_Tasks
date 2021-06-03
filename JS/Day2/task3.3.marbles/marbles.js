var allImages = document.images;
var index = 0;
var interval;

function moveImages() {
    if (index === 5) {
        allImages[index - 1].src = "marble1.jpg";
        index = 0;
    }
    if (index < allImages.length) {
        allImages[index].src = "marble3.jpg";
        if (index !== 0) allImages[index - 1].src = "marble1.jpg";
    }
    index++;
    interval = setTimeout(moveImages, 300);
}

function stopMovement() {
    clearTimeout(interval);
}
var imagePosition = 0;
const images = document.getElementsByClassName('slideshow-item');
const totalImagesNum = images.length;
var interval;


document.getElementById('nextBtn').addEventListener('click', () => {
    moveToNextImage();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    moveToPrevImage();
});

document.getElementById('slideBtn').addEventListener('click', () => {
    startImageSlideShow();
});

document.getElementById('stopBtn').addEventListener('click', () => {
    stopImageSlideShow();
});

function updateImagePosition() {
    for (var image of images) {
        image.classList.remove('slideshow-item--visible');
        image.classList.add('slideshow-item--hidden');
    }
    images[imagePosition].classList.add('slideshow-item--visible');
}

function moveToNextImage() {
    if (imagePosition == totalImagesNum - 1) {
        return;
    } else {
        imagePosition++;
    }
    updateImagePosition();
}

function moveToPrevImage() {
    if (imagePosition == 0) {
        return;
    } else {
        imagePosition--;
    }
    updateImagePosition();
}

function startImageSlideShow() {
    interval = setInterval(() => {
        if (imagePosition == totalImagesNum - 1) {
            imagePosition = 0;
        } else {
            imagePosition++;
        }
        updateImagePosition();
    }, 1000);

}

function stopImageSlideShow() {
    clearInterval(interval);
    win.focus();
}
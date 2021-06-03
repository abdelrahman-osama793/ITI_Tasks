var redRange = document.querySelector('#redRange');
var greenRange = document.querySelector('#greenRange');
var blueRange = document.querySelector('#blueRange');
// var mousedown = false;


function changeTextColor() {
    var color = `rgb(${redRange.value},${greenRange.value},${blueRange.value})`;
    var colorOutput = document.querySelector('#colorOutput');
    colorOutput.style.color = color;
}

redRange.addEventListener('input', changeTextColor);
greenRange.addEventListener('input', changeTextColor);
blueRange.addEventListener('input', changeTextColor);
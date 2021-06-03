var button = document.getElementById("startStopButton");

var leftImage = document.getElementById("i1");
leftImage.style.position = "absolute";
leftImage.style.left = "0";
leftImage.style.top = "40%";

var rightImage = document.getElementById("i2");
rightImage.style.position = "absolute";
rightImage.style.right = "0";
rightImage.style.top = "40%";

var bottomImage = document.getElementById("i3");
bottomImage.style.position = "absolute";
bottomImage.style.bottom = "0";
bottomImage.style.right = "45%";

var step = 5;
var toggle = false;

function startOrStop() {
    if (button.value === "go") {
        moveBottomImage();
        moveLeftImage();
        moveRightImage();
        button.value = "stop";
        return;
    }
    if (button.value === "stop") {
        clearInterval(leftImageInterval);
        clearInterval(rightImageInterval);
        clearInterval(bottomImageInterval);
        button.value = "go";
        return;
    }
}

function resetI() {

    clearInterval(leftImageInterval);
    clearInterval(rightImageInterval);
    clearInterval(bottomImageInterval);
    button.value = "go";
    rightImage.style.left = "315px";
    rightImage.style.right = "0px";

    leftImage.style.left = "0px";

    bottomImage.style.top = "315px";
    bottomImage.style.bottom = "0px";

    startOrStop();
}

function moveRightImage() {
    rightImageInterval = setInterval(moveRightImageToLeft, 100);
    function moveRightImageToLeft() {
        var y = rightImage.offsetLeft - step;
        rightImage.style.left = y + "px";
        if (y <= 0) {
            clearInterval(rightImageInterval);
            rightImageInterval = setInterval(moveRightImageToRight, 100);
        }
        document.getElementById("msg1").innerText = `<img src='icon-1.gif' style=left ${y} px>`;
    }
    function moveRightImageToRight() {
        var y = rightImage.offsetLeft + step;
        rightImage.style.left = y + "px";
        if (y >= 315) {
            clearInterval(rightImageInterval);
            rightImageInterval = setInterval(moveRightImageToLeft, 100);
        }
        document.getElementById("msg1").innerText = `<img src='icon-1.gif' style=left ${y} px>`;
    }
}

function moveLeftImage() {
    leftImageInterval = setInterval(moveLeftImageToRight, 100);
    function moveLeftImageToRight() {
        var y = leftImage.offsetLeft + step;
        leftImage.style.left = y + "px";
        if (y >= 315) {
            clearInterval(leftImageInterval);
            leftImageInterval = setInterval(moveLeftImageToLeft, 100);
        }
        document.getElementById("msg2").innerText = `<img src='icon-2.gif' style=left ${y} px>`;
    }
    function moveLeftImageToLeft() {
        var y = leftImage.offsetLeft - step;
        leftImage.style.left = y + "px";
        if (y <= 0) {
            clearInterval(leftImageInterval);
            leftImageInterval = setInterval(moveLeftImageToRight, 100);
        }
        document.getElementById("msg2").innerText = `<img src='icon-2.gif' style=left ${y} px>`;
    }
}

function moveBottomImage() {
    bottomImageInterval = setInterval(moveBottomImageUp, 100);
    function moveBottomImageUp() {
        var y = bottomImage.offsetTop - step;
        bottomImage.style.top = y + "px";
        if (y <= 0) {
            clearInterval(bottomImageInterval);
            bottomImageInterval = setInterval(moveBottomImageDown, 100);
        }
        document.getElementById("msg3").innerText = `<img src='icon-3.gif' style=left ${y} px>`;
    }
    function moveBottomImageDown() {
        var y = bottomImage.offsetTop + step;
        bottomImage.style.top = y + "px";
        if (y >= 315) {
            clearInterval(bottomImageInterval);
            bottomImageInterval = setInterval(moveBottomImageUp, 100);
        }
        document.getElementById("msg3").innerText = `<img src='icon-3.gif' style=left ${y} px>`;
    }
}
var win;
var timeoutInterval;
var interval;
var message = "Hello this is animated text.\n this window will close after finishing.";
var start = 0;

function openWindow() {
    win = open("second_window.html", "", "width = 400 height = 200");
}

function showMessage() {
    if (start <= message.length - 1) {
        document.getElementById("head4").innerHTML += message[start];
        start++;
        setTimeout(showMessage, 100);
    } else if (start === message.length) {
        closeWindow();
    }
}

function closeWindow() {
    timeoutInterval = setTimeout(() => {
        window.close();
    }, 2000);
}


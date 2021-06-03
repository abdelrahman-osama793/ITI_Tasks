var win;
var interval;

function openFlyWindow() {
    win = open("flying_window.html", "", "width = 250, height = 200");
    flyDown();
}

function flyDown() {
    interval = setInterval(() => {
        if ((win.screenY + win.innerHeight) > window.outerHeight - 100) {
            stopFlying();
            flyUp();
        } else {
            win.moveBy(5, 5);
            win.focus();
        }
    }, 50);
}

function flyUp() {
    interval = setInterval(() => {
        if ((win.screenY == 0)) {
            stopFlying();
            flyDown();
        } else {
            win.moveBy(-5, -5);
            win.focus();
        }
    }, 50);
}

function stopFlying() {
    clearInterval(interval);
    win.focus();
}
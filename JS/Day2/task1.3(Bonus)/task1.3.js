var win;

function openAds() {
    win = open('adWindow.html', 'popUpWindow', 'height=500,width=400');
}

function scrollBody() {
    setInterval(() => {
        window.scrollBy(10, 10)
    }, 100);
}

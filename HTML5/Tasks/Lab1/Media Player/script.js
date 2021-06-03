var player = document.querySelector('.player');
var video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const timeDiv = player.querySelector('#time__div');
const toggle = player.querySelector('.toggle');
const toggleMuteBtn = player.querySelector('.toggleMuteBtn');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.innerHTML = 'Pause';
    } else {
        video.pause();
        toggle.innerHTML = 'Play';
    }
}

function toggleMute() {
    if (video.muted) {
        video.muted = false;
        toggleMuteBtn.innerHTML = 'Mute';
    } else {
        video.muted = true;
        toggleMuteBtn.innerHTML = 'Unmute';
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value;
}

function progressIndicator() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function progressBarSkip(e) {
    const skipPercent = (e.offsetX / progress.offsetWidth) * video.duration;
    video[this.name] = skipPercent;
    video.currentTime = skipPercent;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
toggleMuteBtn.addEventListener('click', toggleMute);
video.addEventListener('timeupdate', progressIndicator);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));
progress.addEventListener('click', progressBarSkip);
progressBar.addEventListener('click', progressBarSkip);
// timeDiv.innerHTML = `${video.currentTime}/${(video.duration/60)}`;
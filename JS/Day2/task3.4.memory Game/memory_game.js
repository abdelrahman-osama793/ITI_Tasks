const cards = document.querySelectorAll('.memory-card');

var isFlipped = false;
var stopFlipping = false; // to stop the user from flipping more then one pair
var firstCard, secondCard;

function showCard() {
    if (stopFlipping) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
        return;
    }
    isFlipped = false;
    secondCard = this;
    checkForMatching();

}

function checkForMatching() {
    (firstCard.dataset.shape === secondCard.dataset.shape) ?
    ifMatchesDisable(): ifNotMatchingFlip();
}

function ifMatchingDisable() {
    firstCard.removeEventListener('click', showCard);
    secondCard.removeEventListener('click', showCard);
    resetGame();
}

function ifNotMatchingFlip() {
    stopFlipping = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetGame();
    }, 800);
}

function resetGame() {
    [isFlipped, stopFlipping] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
    cards.forEach((card) => {
        var randomGeneratedPosition = Math.floor(Math.random() * 12);
        card.style.order = randomGeneratedPosition;
    });
})();



cards.forEach(card => card.addEventListener('click', showCard));
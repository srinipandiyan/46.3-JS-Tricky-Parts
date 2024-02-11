function guessingGame() {
    const secretNum = Math.floor(Math.random() * 100);
    let count = 0;
    let isWinner = false;

    return function handleGuess(num){
        if (isWinner == false){
            if (num === secretNum){
                count++;
                isWinner = true;
                return `You win! You found ${secretNum} in ${count} guesses.`
            } else if (num < secretNum) {
                count++;
                return `${num} is too low!`;
            } else if (num > secretNum) {
                count++;
                return `${num} is too high!`;
            }
        }
        return "The game is over, you already won!"
    }
}

module.exports = { guessingGame };
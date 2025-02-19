document.addEventListener('DOMContentLoaded', () => {
    createSquares();

    let guessedWords = [[]];
    let availableSpace = 1;

    let word = 'hello';

    const keys = document.querySelectorAll('.keyboard-row button');

function getCurrentWordArr(){
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
}
    function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr();

    if (currentWordArr && currentWordArr.length < 5) {
        currentWordArr.push(letter);

        const availableSpaceEl = document.getElementById(availableSpace.toString());
        availableSpace = availableSpace + 1;

        availableSpaceEl.textContent = letter;
}
    }
function handleSubmitWord() {
    currentWordArr = getCurrentWordArr();

    if (currentWordArr.length !== 5) {
        window.alert('Please enter a 5 letter word');

} 
}

    
        function createSquares() {
        const gameBoard = document.getElementById('board')
        for (let index = 0; index < 30; index++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', index + 1);
            gameBoard.appendChild(square);
            };
    }

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute('data-key');

            if (letter === 'enter') {
                handleSubmitWord()
                return;
            }
               
            
            updateGuessedWords(letter);
        }
    }
});
const mainScreen = document.querySelector('#screen');
const gameScreen = document.querySelector('#game-display');
const userInterface = document.querySelector('#user-interface');
const gameData = document.querySelector('#game-data')

const buttonUp = document.querySelector('#button-up');
const buttonRight = document.querySelector('#button-right');
const buttonLeft = document.querySelector('#button-left');
const buttonDown = document.querySelector('#button-down');

buttonUp.addEventListener('click', moveUp);
buttonRight.addEventListener('click', moveRight);
buttonLeft.addEventListener('click', moveLeft);
buttonDown.addEventListener('click', moveDown);

window.addEventListener('load', setGameSize);
window.addEventListener('resize', setGameSize);
window.addEventListener('keyup', moveWithKeys);
window.addEventListener('orientationchange', setGameSize);

function setGameSize () {
    if (window.innerHeight > window.innerWidth) {
        if (mainScreen.classList.contains('main--vertical')) {
        } else {
            mainScreen.classList.add('main--vertical');
            gameScreen.classList.add('game-display--vertical');
            gameScreen.classList.remove('game-display--full');
            userInterface.classList.add('user-interface--vertical');
            gameData.classList.add('game-data--vertical');
        }
        canvasSize = gameScreen.clientWidth - 2;
    } else {
        if(!mainScreen.classList.contains('main--vertical')) {
        } else {
            mainScreen.classList.remove('main--vertical');
            gameScreen.classList.remove('game-display--vertical');
            userInterface.classList.remove('user-interface--vertical');
            gameData.classList.remove('game-data--vertical');
        }
        if (window.innerWidth > (window.innerHeight * 1.5)) {
            gameScreen.classList.add('game-display--full');
        } else {
            gameScreen.classList.remove('game-display--full');
        }
        canvasSize = gameScreen.clientHeight;
    }

    elementSize = canvasSize / 10;

    canvas.setAttribute('width', canvasSize + 'px');
    canvas.setAttribute('height', canvasSize + 'px');

    game.font = elementSize + 'px helvetica';
    game.textAlign = 'right';

    startGame();
}

function movePlayer () {
    let map = convertMapToArray(maps[level]);
    if (giftPosition.x == playerPosition.x && giftPosition.y == playerPosition.y) {
        levelWon();
    } else if (map[playerPosition.y - 1][playerPosition.x - 1] === 'X') {
        levelLost()
    } else {
        const x = getX('PLAYER', playerPosition.x);
        const y = getY('PLAYER', playerPosition.y);
    
        game.fillText(emojis['PLAYER'], x, y);
    }
}

function moveWithKeys (event) {
    if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowDown') moveDown();
}

function moveUp () {
    if (playerPosition.y === 1) {
    } else {
        playerPosition.y -= 1;
        startGame()
    }
}
function moveRight () {
    if (playerPosition.x === 10) {
    } else {
        playerPosition.x += 1;
        startGame()
    }
}
function moveLeft () {
    if (playerPosition.x === 1) {
    } else {
        playerPosition.x -= 1;
        startGame()
    }
}
function moveDown () {
    if (playerPosition.y === 10) {
    } else {
        playerPosition.y += 1;
        startGame()
    }
}

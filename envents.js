const buttonUp = document.querySelector('#button-up');
const buttonRight = document.querySelector('#button-right');
const buttonLeft = document.querySelector('#button-left');
const buttonDown = document.querySelector('#button-down');

buttonUp.addEventListener('click', moveUp);
buttonRight.addEventListener('click', moveRight);
buttonLeft.addEventListener('click', moveLeft);
buttonDown.addEventListener('click', moveDown);


window.addEventListener('keyup', moveWithKeys);

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

const keyCodes = {
    'up': 38,
    'right': 39,
    'left': 37,
    'down': 40,
}

function moveWithKeys (event) {
    const keyPressed = event.keyCode;

    if (keyPressed == keyCodes.up) moveUp();
    else if (keyPressed == keyCodes.right) moveRight();
    else if (keyPressed == keyCodes.left) moveLeft();
    else if (keyPressed == keyCodes.down) moveDown();
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

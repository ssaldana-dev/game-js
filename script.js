const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementSize;
let level = 0;

const playerPosition = {
    x: undefined,
    y: undefined,
}
const giftPosition = {
    x: undefined,
    y: undefined,
}

function startGame () {
    clearMap();
    let map = convertMapToArray(maps[level]);
    map.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const x = getX(col, colI + 1);
            const y = getY(col, rowI + 1);

            if (col === 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = colI + 1;
                    playerPosition.y = rowI + 1;
                }
            } else if (col === 'I') {
                giftPosition.x = colI + 1;
                giftPosition.y = rowI + 1;
            }
            game.fillText(emoji, x, y);
        });
    });
    movePlayer();
}

function getX (character, position) {
    if (character === 'X') {
        return (elementSize * position) + (elementSize * 0.25);
    } else if (character === 'I') {
        return (elementSize * position) + (elementSize * 0.1);
    } else if (character === 'O') {
        return (elementSize * position) + (elementSize * 0.05);
    } else if (character === 'PLAYER') {
        return (elementSize * position) + (elementSize * 0.15);
    }
}

function getY (character, position) {
    if (character === 'X') {
        return (elementSize * position) - (elementSize * 0.2);
    } else if (character === 'I') {
        return (elementSize * position) - (elementSize * 0.2);
    } else if (character === 'O') {
        return (elementSize * position) - (elementSize * 0.2);
    } else if (character === 'PLAYER') {
        return (elementSize * position) - (elementSize * 0.15);
    }
}

function setCanvasSize () {
    if (window.innerWidth > (window.innerHeight)) {
        canvasSize = window.innerHeight * 0.8;
    } else {
        canvasSize = window.innerWidth * 0.8;
    }
    elementSize = canvasSize / 10;

    canvas.setAttribute('width', canvasSize + 'px');
    canvas.setAttribute('height', canvasSize + 'px');

    game.font = elementSize + 'px helvetica';
    game.textAlign = 'right';

    startGame();
}

function convertMapToArray (array) {
    const rows = array.trim().split('\n');
    return rows.map((row) => row.trim().split(''));
}

function clearMap () {
    game.clearRect(0, 0, canvasSize, canvasSize);
}

function gridCanvas () {
    for (let i = 1; i <= 9; i++) {
        drawLine(0, i * elementSize, canvasSize, i * elementSize);
        drawLine(i * elementSize, 0, i * elementSize, canvasSize);
    }
}

function drawLine (xinicial, yinicial, xfinal, yfinal) {
    game.lineWidth = 1;
    game.beginPath()
    game.moveTo(xinicial, yinicial);
    game.lineTo(xfinal, yfinal);
    game.closePath();
    game.stroke();
}
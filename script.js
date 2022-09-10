const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementSize;

function startGame () {
    let map = convertMapToArray(maps[0]);
    map.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const x = getX(col, colI + 1);
            const y = getY(col, rowI + 1);

            game.fillText(emoji, x, y);
        });
    });

    // gridCanvas();
}

function getX (character, position) {
    if (character === 'X') {
        return (elementSize * position) + (elementSize * 0.25);
    } else if (character === 'I') {
        return (elementSize * position) + (elementSize * 0.1);
    } else if (character === 'O') {
        return (elementSize * position) + (elementSize * 0.0333333333333333);
    }
}

function getY (character, position) {
    if (character === 'X') {
        return (elementSize * position) - (elementSize * 0.2);
    } else if (character === 'I') {
        return (elementSize * position) - (elementSize * 0.2);
    } else if (character === 'O') {
        return (elementSize * position) - (elementSize * 0.2);
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

convertMapToArray(maps[0]);

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
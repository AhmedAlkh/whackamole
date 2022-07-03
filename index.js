const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelectorAll('.score');
const moles = document.querySelectorAll('.mole');

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if (hole === lastHole) {
        console.log('Thats the same number');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}
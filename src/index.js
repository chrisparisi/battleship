import Gameboard from './factories/gameboard';
import { playerShips, computerShips } from './modules/createShips';
import Player from './factories/player';

//Create Boards

const gridUser = document.querySelector('.grid-user');
const gridComputer = document.querySelector('.grid-computer');
const rotateButton = document.querySelector('#rotate');
const shipDisplay = document.querySelector('.ship-display');
const setupButtons = document.querySelector('.setup-buttons');
const gameMessage = document.querySelector('.game-message');

//Refactor

let playerSquares = [];
let computerSquares = [];

const playerBoard = Gameboard();
playerBoard.generateBoard( gridUser, playerSquares );

const computerBoard = Gameboard();
computerBoard.generateBoard( gridComputer, computerSquares );

//Rotate Player Ships

const carrierContainer = document.getElementById('carrier');
const cruiserContainer = document.getElementById('cruiser');
const destroyerContainer = document.getElementById('destroyer');
const submarineContainer = document.getElementById('submarine');
const corvetteContainer = document.getElementById('corvette');
let isHorizontal = true;

function rotateVertical(shipContainer) {
    for (let i=0; i<shipContainer.children.length; i++) {
        shipContainer.children[i].classList.add('vertical');
        shipContainer.children[i].classList.remove('horizontal');
    }
}

function rotateHorizontal(shipContainer) {
    for (let i=0; i<shipContainer.children.length; i++) {
        shipContainer.children[i].classList.add('horizontal');
        shipContainer.children[i].classList.remove('vertical');
    }
}

function rotate() {
    if (isHorizontal) {
        carrierContainer.classList.add('carrier-vertical', 'vertical');
        carrierContainer.classList.remove('carrier-horizontal', 'horizontal');
        rotateVertical(carrierContainer);

        cruiserContainer.classList.add('cruiser-vertical', 'vertical');
        cruiserContainer.classList.remove('cruiser-horizontal', 'horizontal');
        rotateVertical(cruiserContainer);

        destroyerContainer.classList.add('destroyer-vertical', 'vertical');
        destroyerContainer.classList.remove('destroyer-horizontal', 'horizontal');
        rotateVertical(destroyerContainer);

        submarineContainer.classList.add('submarine-vertical', 'vertical');
        submarineContainer.classList.remove('submarine-horizontal', 'horizontal');
        rotateVertical(submarineContainer);

        corvetteContainer.classList.add('corvette-vertical', 'vertical');
        corvetteContainer.classList.remove('corvette-horizontal', 'horizontal');
        rotateVertical(corvetteContainer);
        isHorizontal = false;
        return;
    }
    if (!isHorizontal) {
        carrierContainer.classList.add('carrier-horizontal', 'horizontal');
        carrierContainer.classList.remove('carrier-vertical', 'vertical');
        rotateHorizontal(carrierContainer);

        cruiserContainer.classList.add('cruiser-horizontal', 'horizontal');
        cruiserContainer.classList.remove('cruiser-vertical', 'vertical');
        rotateHorizontal(cruiserContainer);

        destroyerContainer.classList.add('destroyer-horizontal', 'horizontal');
        destroyerContainer.classList.remove('destroyer-vertical', 'vertical');
        rotateHorizontal(destroyerContainer);

        submarineContainer.classList.add('submarine-horizontal', 'horizontal');
        submarineContainer.classList.remove('submarine-vertical', 'vertical');
        rotateHorizontal(submarineContainer);

        corvetteContainer.classList.add('corvette-horizontal', 'horizontal');
        corvetteContainer.classList.remove('corvette-vertical', 'vertical');
        rotateHorizontal(corvetteContainer);

        isHorizontal = true;
        return;
    }      
}
rotateButton.addEventListener('click', rotate);

//Place Ships for Computer
//Refactor

computerBoard.placeShips(computerShips.computerCarrier, computerSquares);
computerBoard.placeShips(computerShips.computerCruiser, computerSquares);
computerBoard.placeShips(computerShips.computerDestroyer, computerSquares);
computerBoard.placeShips(computerShips.computerSubmarine, computerSquares);
computerBoard.placeShips(computerShips.computerCorvette, computerSquares);


//Place Player Ships

const ships = document.querySelectorAll('.ship');

ships.forEach(ship => ship.addEventListener('dragstart', dragStart));
playerSquares.forEach(square => square.addEventListener('dragstart', dragStart));
playerSquares.forEach(square => square.addEventListener('dragover', dragOver));
playerSquares.forEach(square => square.addEventListener('dragenter', dragEnter));
playerSquares.forEach(square => square.addEventListener('dragleave', dragLeave));
playerSquares.forEach(square => square.addEventListener('drop', dragDrop));
playerSquares.forEach(square => square.addEventListener('dragend', dragEnd));

let shipWithIndex;
let draggedShip;
let draggedShipLength;

ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
    shipWithIndex = e.target.id;
    console.log(shipWithIndex);
}));

function dragStart(e) {
    draggedShip = this;
    draggedShipLength = this.children.length;
    console.log(draggedShip);
    console.log(draggedShipLength);
};

function dragOver(e) {
    e.preventDefault();
};

function dragEnter(e) {
    e.preventDefault();
};

function dragLeave() {
    
};

function dragDrop() {
    let shipWithLastIndex = draggedShip.lastElementChild.id;
    let shipClass = draggedShip.id;
    console.log(shipClass)
    let shipLastIndexNumber = parseInt(draggedShipLength - 1);
    let shipLastId = shipWithLastIndex + parseInt(this.dataset.id);
    let squareTaken = playerSquares[parseInt(this.dataset.id)].classList.contains('taken');

    const notAllowedHorizontal = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 2, 22, 32, 42, 52, 62, 72, 82, 92, 3, 23, 33, 43, 53, 63, 73, 83, 93]
    const notAllowedVertical = [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]

    let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * shipLastIndexNumber);
    let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * shipLastIndexNumber);

    let selectedShipIndex = parseInt(shipWithIndex.slice(-1));

    shipLastId = shipLastId - selectedShipIndex;

    if (isHorizontal && !newNotAllowedHorizontal.includes(shipLastId) && !squareTaken) {
        for (let i = 0; i < draggedShipLength; i++) {
            let directionClass
            if (i === 0) directionClass = 'start';
            if (i === draggedShipLength -1) directionClass = 'end';
            playerSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', `${shipClass}-horizontal`, directionClass, 'horizontal', `${shipClass}`);
        }
    } else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId) && !squareTaken) {
        for (let i = 0; i < draggedShipLength; i++) {
            let directionClass
            if (i === 0) directionClass = 'start';
            if (i === draggedShipLength -1) directionClass = 'end';
            playerSquares[parseInt(this.dataset.id) - selectedShipIndex + 10 * i].classList.add('taken', `${shipClass}-vertical`, directionClass, 'vertical', `${shipClass}`);
        }
    } else return;

    shipDisplay.removeChild(draggedShip);

    if (shipDisplay.children.length == 0) {
        startGame();
    }
}

function dragEnd() {
    console.log('dragend')
};

function startGame() {
    setupButtons.removeChild(rotateButton);
    const startButton = document.createElement('button');
    startButton.classList.add('btn');
    startButton.innerText = 'Start Game';
    setupButtons.appendChild(startButton);
    startButton.addEventListener('click', startMatch)
}

const realPlayer = Player('Human');
const computerPlayer = Player('Computer');

function checkWin() {
    if (realPlayer.fleet.length === 5) {
        gameMessage.innerText = "Computer wins!";    
    }
    if (computerPlayer.fleet.length === 5) {
        gameMessage.innerText = "You win!";    
    }
}

function startMatch() {
    computerSquares.forEach(square => square.addEventListener('click', function(e) {
        computerBoard.recieveAttack(square, computerPlayer);
        checkWin();
        computerPlayer.move(playerSquares, realPlayer);
        checkWin();
    }));
    setupButtons.style.display = 'none';
    gameMessage.innerText = "Click on the enemy's board to bombard their ships!";
}

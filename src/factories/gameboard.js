import Ship from './ship'

const Gameboard = () => {
    const recieveAttack = () => {

    }

    const placeShips = ( ship, squares ) => {
        let randomDirection = Math.floor(Math.random() * 2);
        let direction;
        if (randomDirection === 0) direction = 1
        if (randomDirection === 1) direction = 10
        let randomStart = Math.floor(Math.abs(Math.random() * squares.length - ship.shipArray[randomDirection].length * direction));

        const isTaken = ship.shipArray[randomDirection].some(index => squares[randomStart + index].classList.contains('taken'));
        const isAtRightEdge = ship.shipArray[randomDirection].some(index => (randomStart + index) % 10 === 9);
        const isAtLeftEdge = ship.shipArray[randomDirection].some(index => (randomStart + index) % 10 === 0);

        if (!isTaken && !isAtRightEdge && !isAtLeftEdge) ship.shipArray[randomDirection].forEach(index => squares[randomStart + index].classList.add('taken', ship.getName()));
        else placeShips(ship, squares);
    }

    const generateBoard = ( grid, squares ) => {
        for (let i=0; i<100; i++) {
            const square = document.createElement('div');
            square.dataset.id = i;
            grid.appendChild(square);
            squares.push(square);            
        }
    }

    return { generateBoard, placeShips }

}

export default Gameboard;
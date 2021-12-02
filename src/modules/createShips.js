import Ship from "../factories/ship";

//Playuer Ships

const playerCarrier = Ship(5, 'carrier');
const playerCruiser = Ship(4, 'cruiser');
const playerDestroyer = Ship(4, 'destroyer');
const playerSubmarine = Ship(3, 'submarine');
const playerCorvette = Ship(2, 'corvette');

playerCarrier.generateHitBox();
playerCarrier.createShip();

playerCruiser.generateHitBox();
playerCruiser.createShip();

playerDestroyer.generateHitBox();
playerDestroyer.createShip();

playerSubmarine.generateHitBox();
playerSubmarine.createShip();

playerCorvette.generateHitBox();
playerCorvette.createShip();

//Computer Ships

const computerCarrier = Ship(5, 'carrier');
const computerCruiser = Ship(4, 'cruiser');
const computerDestroyer = Ship(4, 'destroyer');
const computerSubmarine = Ship(3, 'submarine');
const computerCorvette = Ship(2, 'corvette');

computerCarrier.generateHitBox();
computerCruiser.generateHitBox();
computerDestroyer.generateHitBox();
computerSubmarine.generateHitBox();
computerCorvette.generateHitBox();

//Ship objects

const playerShips = {
    playerCarrier,
    playerCruiser,
    playerDestroyer,
    playerSubmarine,
    playerCorvette
}

const computerShips = {
    computerCarrier,
    computerCruiser,
    computerDestroyer,
    computerSubmarine,
    computerCorvette
}

export {
    playerShips,
    computerShips
}
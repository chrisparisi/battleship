import _ from 'lodash';

const Ship = (length, name) => {

  const shipDisplay = document.querySelector('.ship-display');

  const shipArray = [[],[]];
  const hitArray = [];
  const sunkArray = [];
  let direction = 'horizontal';

    const getName = () => name;

    const getLength = () => length;

    const generateHitBox = () => {
      for ( let i = 0; i < length; i++ ) {
        sunkArray.push(0);
      };
      for ( let i = 0; i < length; i++ ) {
        shipArray[0].push(i);
      };
      for ( let i = 0; i < length; i++ ) {
        shipArray[1].push(i * 10);
      };
    }

    const shipDirection = () => {
      if (direction === 'horizontal') {
        this.classList.add(`${getName()}-vertical`);
        this.classList.remove(`${getName()}-horizontal`);
        direction = 'vertical';
      }
      if (direction === 'vertical') {
        this.classList.add(`${getName()}-horizontal`);
        this.classList.remove(`${getName()}-vertical`);
        direction = 'horizontal'
      }
   }

    const hit = (player) => {
      hitArray.push(0);
      if ( _.isEqual(hitArray, sunkArray) ) {
        isSunk(player);
      };
      return hitArray;
    };

    const isSunk = (player) => {
      player.fleet.push(0);
      console.log(player.fleet.length);
      console.log(`${getName()} sank`);
    };

    const createShip = () => {
      const shipContainer = document.createElement('div');
      shipContainer.id = `${getName()}`;
      shipContainer.classList.add(`${getName()}-horizontal`, 'ship');
      shipContainer.setAttribute('draggable', true);
      for (let i=0; i<sunkArray.length; i++) {
          const shipDiv = document.createElement('div');
          if (i === 0) shipDiv.classList.add('start');
          if (i === length -1) shipDiv.classList.add('end');
          shipDiv.classList.add('horizontal', 'taken', `${getName()}`);
          shipDiv.id = `${getName()}-`+ i;
          shipContainer.appendChild(shipDiv);
      }
      shipDisplay.appendChild(shipContainer);
  }

    return { getName, getLength, generateHitBox, hit, createShip, shipDirection, shipArray };
  };


export default Ship;
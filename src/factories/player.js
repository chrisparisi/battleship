import { playerShips, computerShips } from "../modules/createShips";

const Player = (name) => {

    let fleet = [];

    const playerName = () => name

    const move = (playerSquares, realPlayer) => {
        let randomMove = Math.floor(Math.random() * 100);
        if (!playerSquares[randomMove].classList.contains('boom') && !playerSquares[randomMove].classList.contains('miss')) {

            const hit = playerSquares[randomMove].classList.contains('taken');
            playerSquares[randomMove].classList.add(hit ? 'boom' : 'miss');

            if (playerSquares[randomMove].classList.contains('carrier')) playerShips.playerCarrier.hit(realPlayer);
            if (playerSquares[randomMove].classList.contains('cruiser')) playerShips.playerCruiser.hit(realPlayer);
            if (playerSquares[randomMove].classList.contains('destroyer')) playerShips.playerDestroyer.hit(realPlayer);
            if (playerSquares[randomMove].classList.contains('submarine')) playerShips.playerSubmarine.hit(realPlayer);
            if (playerSquares[randomMove].classList.contains('corvette')) playerShips.playerCorvette.hit(realPlayer);

        } else {
            move(playerSquares, realPlayer);
        }
    }

    const win = () => {
        if (fleet.length === 5) {
            console.log(`${turn} won!`)
        }
    }

    return { move, win, playerName, fleet }

};

export default Player;
const Player = () => {
    const move = () => {
        let randomMove = Math.floor(Math.random() * 100);
        if (!playerSquares[randomMove].classList.contains('boom')) {

            const hit = playerSquares[random].classList.contains('taken');
            playerSquares[randomMove].classList.add(hit ? 'boom' : 'miss');

            //playerSquares[randomMove].classList.add('boom');
            if (playerSquares[randomMove].classList.contains('carrier')) carrier.hit();
            if (playerSquares[randomMove].classList.contains('cruiser')) cruiser.hit();
            if (playerSquares[randomMove].classList.contains('destroyer')) destroyer.hit();
            if (playerSquares[randomMove].classList.contains('submarine')) submarine.hit();
            if (playerSquares[randomMove].classList.contains('corvette')) corvette.hit();
        } else move();
    }
}
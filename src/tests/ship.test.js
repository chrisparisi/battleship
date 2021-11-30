import Ship from "../factories/ship";

test('create carrier', () => {
    const carrier = Ship(5);

    expect(carrier.getLength()).toEqual( 5 )
});

test('ship records hit correctly', () => {
    const destroyer = Ship(4);
    destroyer.generateHitBox();

    expect(destroyer.hit(3)).toStrictEqual([ 1, 1, 1, 0]);
});
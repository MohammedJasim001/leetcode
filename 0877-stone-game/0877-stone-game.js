/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    let alice = 0;
    let bob = 0;
    let turn = 0;

    while (piles.length > 0) {
        let left = piles[0];
        let right = piles[piles.length - 1];

        let pick;
        if (left > right) {
            pick = piles.shift();
        } else {
            pick = piles.pop();
        }

        if (turn === 0) {
            alice += pick;
        } else {
            bob += pick;
        }

        turn = 1 - turn;
    }

    return  true
};
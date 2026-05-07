/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
    const m = boxGrid.length;
    const n = boxGrid[0].length;
    for (let row = 0; row < m; row++) {
        let empty = n - 1;
        for (let col = n - 1; col >= 0; col--) {
            if (boxGrid[row][col] === '*') {
                empty = col - 1;
            }
            else if (boxGrid[row][col] === '#') {
                boxGrid[row][col] = '.';
                boxGrid[row][empty] = '#';
                empty--;
            }
        }
    }
    const result = Array.from(
        { length: n },
        () => Array(m).fill('.')
    );
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            result[col][m - 1 - row] = boxGrid[row][col];
        }
    }
    return result
};
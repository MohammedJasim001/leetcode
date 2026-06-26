/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
    const grid = Array.from({ length: m }, () => Array(n).fill("#"));
    let row = 0;
    let col = 0;

    grid[row][col] = ".";

    while (col < n - 1) {
        col++;
        grid[row][col] = ".";

        if (row < m - 1) {
            row++;
            grid[row][col] = ".";
        }
    }

    while (row < m - 1) {
        row++;
        grid[row][col] = ".";
    }

    return grid.map(row => row.join(""));
};
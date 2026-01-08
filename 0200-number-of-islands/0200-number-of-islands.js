/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    function refresh(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== `1`) {
            return
        }
        grid[i][j] = "0"

        refresh(i - 1, j);
        refresh(i + 1, j);
        refresh(i, j - 1);
        refresh(i, j + 1);
    }

    islands = 0
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                refresh(i, j)
                islands++
            }
        }
    }
    return islands
};
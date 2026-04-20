/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    c = []
    for (i = 0; i < colors.length; i++) {
        for (j = colors.length - 1; j >= 0; j--) {
            if (colors[i] !== colors[j]) {
                c.push(j - i)
            }
        }
    }
    return Math.max(...c)
};
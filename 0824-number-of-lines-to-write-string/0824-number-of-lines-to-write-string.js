/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let lines = 1;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let width = widths[s.charCodeAt(i) - 97];
        if (count + width > 100) {
            lines++;
            count = width;
        } else {
            count += width;
        }
    }

    return [lines, count];
};
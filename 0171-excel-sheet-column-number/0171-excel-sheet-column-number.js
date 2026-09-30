/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    result = 0
    for (i = 0; i < columnTitle.length; i++) {
        if (i > 0) {
            result *= 26
        }
        result += columnTitle.charCodeAt(i) - 64
    }
    return result
};
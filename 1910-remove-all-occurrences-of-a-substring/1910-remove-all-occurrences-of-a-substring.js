/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    const partLength = part.length
    for (i = 0; i < s.length; i++) {
        let sliced = s.substr(i, partLength)
        if (sliced === part) {
            s = s.replace(sliced, "")
            i = -1
        }

    }
    return s
};
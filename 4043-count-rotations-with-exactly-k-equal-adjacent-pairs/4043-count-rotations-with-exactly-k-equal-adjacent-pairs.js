/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function (s, k) {
    let answer = 0;

    for (let r = 0; r < s.length; r++) {

        let rotated = s.slice(r) + s.slice(0, r);

        let pairs = 0;

        for (let i = 0; i < rotated.length - 1; i++) {
            if (rotated[i] === rotated[i + 1]) {
                pairs++;
            }
        }

        if (pairs === k) {
            answer++;
        }
    }

    return answer;
};
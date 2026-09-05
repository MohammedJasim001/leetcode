/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function (n, requests) {
    let floor = 0
    let seconds = 0
    for (let i = 0; i < requests.length; i++) {
        seconds += Math.abs(floor - requests[i])
        floor = requests[i]
    }
    return seconds
};
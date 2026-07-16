/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function (startTime, endTime) {
    const startSplit = startTime.split(":")
    const endSplit = endTime.split(":")

    let startSec = 0
    let endSec = 0

    for (i = 0; i < startSplit.length; i++) {
        if (i == 0) {
            startSec += Number(startSplit[i]) * 60 * 60
            endSec += Number(endSplit[i]) * 60 * 60
        }
        if (i == 1) {
            startSec += Number(startSplit[i]) * 60
            endSec += Number(endSplit[i]) * 60
        }
        if (i == 2) {
            startSec += Number(startSplit[i])
            endSec += Number(endSplit[i])
        }
    }

    return endSec - startSec
};
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let minTime = Infinity
    for (i = 0; i < tasks.length; i++) {
        const totalTime = tasks[i][0] + tasks[i][1]
        if (totalTime < minTime) {
            minTime = totalTime
        }
    }
    return minTime
};
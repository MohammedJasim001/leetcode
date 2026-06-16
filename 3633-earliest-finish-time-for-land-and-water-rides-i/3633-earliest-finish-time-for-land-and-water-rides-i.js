/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {

    let ans = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {

            const p1 =
                Math.max(
                    landStartTime[i] + landDuration[i],
                    waterStartTime[j]
                ) + waterDuration[j];

            const p2 =
                Math.max(
                    waterStartTime[j] + waterDuration[j],
                    landStartTime[i]
                ) + landDuration[i];

            ans = Math.min(ans, p1, p2);
        }
    }

    return ans;
};
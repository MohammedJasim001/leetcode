/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    const aliceTotal = aliceSizes.reduce((acc, ele) => acc + ele, 0)
    const bobTotal = bobSizes.reduce((acc, ele) => acc + ele, 0)
    const y = (aliceTotal + bobTotal) / 2

    for (i = 0; i < aliceSizes.length; i++) {
        for (j = 0; j < bobSizes.length; j++) {
            const check = aliceTotal - aliceSizes[i] + bobSizes[j]

            if (check == y) {
                return [aliceSizes[i], bobSizes[j]]
            }
        }
    }
};
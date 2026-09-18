/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for (i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        todayProfit = prices[i] - minPrice
        if (todayProfit > maxProfit) {
            maxProfit = todayProfit
        }
    }
    return maxProfit
};
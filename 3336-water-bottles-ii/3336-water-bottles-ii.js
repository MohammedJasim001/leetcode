/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
       emptyBottles = numBottles;
    while(emptyBottles >= numExchange) {
        emptyBottles -= numExchange;
        numExchange++;
        numBottles++;
        emptyBottles++;
    }
    
    return numBottles;
};
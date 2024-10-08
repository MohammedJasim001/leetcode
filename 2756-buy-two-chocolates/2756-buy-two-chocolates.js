/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
     c=[]
    for(i=0;i<prices.length;i++){
        for(j=i+1;j<prices.length;j++){
            c.push(money-(prices[i]+prices[j]))
        
        }
    }
    max=c[0]
    for(i=0;i<c.length;i++){
        if(c[i]>max){
            max=c[i]
        }
    }
    if(max<0){
        return money
    }
    return max
};
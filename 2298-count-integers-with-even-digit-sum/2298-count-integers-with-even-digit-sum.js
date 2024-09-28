/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
      f = 0;
    for (i=1;i<=num;i++) {
        k=i;
        sum=0;
        while (k>0){
            sum+=k%10;
            k =Math.floor(k/10);
        }
        if(sum%2===0){
            f++;
        }
    }
    return f;
};
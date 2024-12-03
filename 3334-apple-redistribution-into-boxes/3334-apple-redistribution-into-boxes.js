/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
        a = capacity.sort((a,b)=>b-a)
    b = apple.reduce((acc,ele)=>acc+ele,0)
    c=0
    count=0
    for(i=0;i<a.length;i++){
        c+=a[i]
        count++
        if(c>=b){
            break
        }
    }
    return count 
};
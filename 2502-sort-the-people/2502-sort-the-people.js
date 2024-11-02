/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
       a=''
    b=''
    for(i=0;i<names.length;i++){
        for(j=i+1;j<names.length;j++){
            if(heights[i]<heights[j]){
                a=heights[i]
                b=names[i]
                heights[i]=heights[j]
                names[i]=names[j]
                heights[j]=a
                names[j]=b
            }
        }
    }
    return names
};
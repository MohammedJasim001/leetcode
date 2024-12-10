/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
     b=[]
    for(i=0;i<matrix.length;i++){
    a=[]
        for(j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==-1){
                
            max=matrix[i][j]
            k=i
            for(k=0;k<matrix.length;k++){
                if(matrix[k][j]>max){
                    max= matrix[k][j]
                }
            }
             a.push(max)
             
            }
            else{
                a.push(matrix[i][j])
                
            }
        }
        b.push(a)
    }
    return b
};
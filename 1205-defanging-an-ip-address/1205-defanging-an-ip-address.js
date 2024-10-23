/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
        c=''
    for(x of address){
        if(x === '.'){
            c+="[.]"
        }
        else{
        c+=x
        }
    }
    return c
};
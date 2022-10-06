const removeFromArray = function(array, ...list) {
    let i = 0; 
    while (i < list.length) {
    let valid = 1;
    if ((array.indexOf(list[i]))<0) {
        valid = 0;
    }
    array.splice(array.indexOf(list[i]), valid);
    i++
    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;

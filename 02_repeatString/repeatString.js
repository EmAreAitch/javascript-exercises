const repeatString = function(string,num) {
    let word = '';
    let i = 0;
    if (num < 0) {
        return 'ERROR';
    }
    while (i<=num-1) {
        word += string;
        i++;
    }
    return word;
};


// Do not edit below this line
module.exports = repeatString;

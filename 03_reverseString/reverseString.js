const reverseString = function(string) {
    let i = 0;
    let response = '';
    while (i<=string.length) {
    response += string.charAt(string.length-(1+i))
    i++;
    }

    return response;
};

// Do not edit below this line
module.exports = reverseString;

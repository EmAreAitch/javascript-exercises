const palindromes = function (word) {
    filter = word.replace(/[\W]/g, '').toLowerCase();
    reversed = [...filter].reverse().join('');
    return reversed == filter;
};

// Do not edit below this line
module.exports = palindromes;

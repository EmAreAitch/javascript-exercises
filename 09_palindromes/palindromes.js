const palindromes = function (word) {
    filter = word.replace(/[\W]/g, '').toLowerCase();
    reversed = [...filter].reverse().join('');
    if (reversed == filter) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;

const sumAll = function(n1,n2) {
    if (typeof n1 === "number" && typeof n2 === "number" && n1 > 0 && n2 > 0) {
        largeNum = Math.max(n1,n2);
        smallNum = Math.min(n1,n2);
        let sum = 0;
        for (let i = smallNum; i <= largeNum; i++) {
            sum += i;
        }
        return sum;
    }

    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

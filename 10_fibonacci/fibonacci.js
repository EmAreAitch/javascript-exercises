const fibonacci = function(num) {
    x = parseInt(num)
    if (!(x<0)) {
	let fibonacciList = [1,1];
	    for (i = 1; i <=x-2; i++) {
	        fibonacciList.push(parseInt(fibonacciList.slice(-1))+parseInt(fibonacciList.slice(-2,-1)))
	    }
	    return fibonacciList[num-1];
	
    }
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;

const fibonacci = function(num) {
	if (num>0) {
		a = 0;
		b = 1;
		for(i = 1; i < num; i++) {
			c = b;
			b = a + b;
			a = c;
		}
		return b;
	}

	else if (num===0) return 0;
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;

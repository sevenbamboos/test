function sumPrimes(num) {
	var arr = primeArray(num);
	console.log(arr);
  return arr.reduce(function(pre, cur){
		return pre + cur;
	});
}

function primeArray(n) {
	var arr = [];
	if (n < 2) return arr;
	for (var i = 2; i <= n; i++) {
		if (isPrime(i)) {
			arr.push(i);
		}
	}
	return arr;
}

function isPrime(n) {
	if (n === 2) {
		return true;
	}
	for (var i = 2; i <= Math.floor(n/2); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

var ret = sumPrimes(10);

console.log(ret);

$(document).ready(function() {
	$("#title").html(ret);
});



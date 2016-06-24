function addTogether() {
	var i = 0;
	while (i < arguments.length) {
		if (typeof arguments[i] !== 'number') {
			return undefined;
		}
		i++;
	}

	var sum = 0;
	if (arguments.length > 1) {
		for (var j = 0; j < arguments.length; j++) {
			sum += arguments[j];
		}
		return sum;

	} else {
		return addTogether.bind(null, arguments[0]);
	}
}

var ret = addTogether(2)(3);

console.log(ret);

$("#answer").html(ret);


function fizzBuzz(){
	var getValue = prompt('Enter a number.');
	var newValue = +getValue;

	if (isNaN(newValue)) {
		alert('Not a number. Please refresh page and enter a number.');
	}

	else if (newValue % 1 !== 0) {
		alert('Do not use decimals. Please refresh page and enter a whole number.');
	}

	else for (var i = 1; i <= newValue; i++) {
		if (i%3===0 && i%5===0) {
			$("body").append("fizzbuzz" + "<br>");
		}
		else if (i%3===0) {
			$("body").append("fizz" + "<br>");
		}
		else if (i%5===0) {
			$("body").append("buzz" + "<br>");
		}
		else {
			$("body").append(i + "<br>");
		}
	}
}

$(document).ready(function() {
fizzBuzz();
});
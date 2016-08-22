function getValue () {
	var x = prompt('Enter a number between 1 and 100');
	var numberGiven = +'x';
	console.log(numberGiven);
}

function fizzBuzz () {
	for (var i = 1; i < numberGiven; i++) {
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
	getValue ();
});



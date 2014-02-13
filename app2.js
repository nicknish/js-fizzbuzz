$(document).ready(function () {

// (function stringToNumber () {

// 	if(number!=NaN) {
// 		parseInt(number);
// 		return number;
// 	}
// } ();
// var number = prompt("Give me a number, #1-100");
// count(stringToNumber);

count(+prompt("Give me a number, #1-100"));

});

var count = function (number) {
	for (var i = 1; i <= number; i++) { // So long as i is smaller than given number
		// $('body').append('i');
		var body = $('body');
		if (i%3 === 0 && i%5 === 0) {  	
			body.append('fizz buzz ');
		}
		else if (i%5 === 0) {
			body.append('buzz ');
		}
		else if (i%3 === 0) {
			body.append('fizz ');
		}
		else {
			body.append(i + ' ');
		}
	}
};


// function intro() {
//   var phaseInterval = 2500,
//       phaseDelay = 2000,
//       currentPhaseClass = 'current-phase',
//       phase = 0,
//       phases = [
//         '#streetfighter',
//         '#credits',
//         '#jquery',
//         '#instructions'
//       ];

//   (function phaser() {
//     var elem = document.querySelectorAll(phases[phase])[0];
//     setTimeout(function() {
//       elem.classList.add(currentPhaseClass);
//       phase++;
//       setTimeout(function() {
//         if(phase < phases.length) {
//           elem.classList.remove(currentPhaseClass);
//           phaser();
//         }
//       }, phaseInterval)
//     }, phaseDelay);
//   })();
// }


/* Questions

1) How do I convert strings to number?
2) How do I return the prompt value?
3) 


*/
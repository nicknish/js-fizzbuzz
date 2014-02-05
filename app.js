$(document).ready(function () {

count();

function count() {
    for (counter = 1; counter <= 100; counter++) {
    	// $('body').append(counter); // Test
        if (counter%3 === 0 && counter%5 === 0) {
            $('body').append("fizz buzz ");
        } else if (counter%3 === 0) {
            $('body').append("fizz ");
        } else if (counter%5 === 0) {
            $('body').append("buzz ");
        } else {
            $('body').append(counter + " ");
        }
    }
}

});
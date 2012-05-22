// Mark Johnson
// SDI 1205 Project 4 
// My javascript library

// My revelaing Module Pattern  
var myLibrary = function () {
	// Function to check phone number match 
	var checkNumber = function () {
		var numPatt = /^[2-9]\d{2}-\d{3}-\d{4}$/; // regular exp check the pattern of a phone number
	}





	return {
		"checkNumber": checkNumber,
	}
}
// condition to check if the phone number format is correct 
if (checkNumber("250-555-4542")) {
	console.log("That looks like a phone number to me")
} else {
	console.log("This is not a number!")
}
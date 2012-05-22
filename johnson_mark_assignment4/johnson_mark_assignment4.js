// Mark Johnson
// SDI 1205 Project 4 
// My javascript library

// My revelaing Module Pattern  
var myLibrary = function () {
	// Function to check phone number match 
	var checkNumber = function (n) {
		var numPatt = /^[2-9]\d{2}-\d{3}-\d{4}$/; // regular exp check the pattern of a phone number
	}

	// Function to check email match 
	var checkEmail = function (e) {
		var emailPatt = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/; // regular exp check the pattern of a email address
	}

	// Function to check url match 
	var checkUrl = function (u) {
		var urlPatt = new Regexp ("^(http[s]?://|ftp://)?(www\.)?[a-zA-Z0-9-\.]+\.(com|org|net|mil|edu|ca|co.uk|com.au|gov)$"); // regular exp check the pattern of a url. I used the reg exp built in contructor method 
	}

	return {
		"number": checkNumber,
		"numpatt": numpatt.test(n), // reg exp test method. This will search the string for a specified value, and return true or false 
		"email": checkEmail,
		"emailPatt": emailPatt.test(e), // reg exp test method. This will search the string for a specified value, and return true or false 
		"url": checkUrl,
		"urlPatt": urlPatt.test(u) // reg exp test method. This will search the string for a specified value, and return true or false 
	}
}


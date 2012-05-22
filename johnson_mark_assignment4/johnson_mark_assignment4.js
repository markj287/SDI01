// Mark Johnson
// SDI 1205 Project 4 
// My javascript library

// My revelaing Module Pattern  
var myLibrary = function () {
	// Function to check phone number match 
	var checkNumber = function (n) {
		var numPatt = /^[2-9]\d{2}-\d{3}-\d{4}$/; // regular exp check the pattern of a phone number
	} // end check number function 

	// Function to check email match 
	var checkEmail = function (e) {
		var emailPatt = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/; // regular exp check the pattern of a email address
	} // end check email function 

	// Function to check url match 
	var checkUrl = function (u) {
		var urlPatt = new Regexp ("^(http[s]?://|ftp://)?(www\.)?[a-zA-Z0-9-\.]+\.(com|org|net|mil|edu|ca|co.uk|com.au|gov)$"); // regular exp check the pattern of a url. I used the reg exp built in contructor method 
	} // end check url function 

	// Function to get smallest number in an array
	var smallestValue = function() {
	// this is an array constructor that will get the min value in my array 
		Array.prototype.minGreaterThan = function(a){
			var number = [100,37,103,23,54,31,26,78,109,34],givenNumber = 20; // private array with given number set at 20
			var t = this,r = Number.POSITIVE_INFINITY,i; // this is the positive infinity property. This will allow us to find the samllest value less than the given number
				for (i = 0; i<t.length; i++) 
					if (a<t[i] && t[i] < r) r = t[i];
		}	
	} // end samllest value function 

	// Function to get sum of all numbers 
	var sumOfNumbers = function () {
		var sum = [67,45,34,37,156,22,7,8,3,"b"]; // private array 
		var result = 0;

		for (var i = 0; i< sum.length; i++) {
			result += sum[i];
		}

	} // end sum of all numbers function 

	return {
		"number": checkNumber,
		"numpatt": numpatt.test(n), // reg exp test method. This will search the string for a specified value, and return true or false 
		"email": checkEmail,
		"emailPatt": emailPatt.test(e), // reg exp test method. This will search the string for a specified value, and return true or false 
		"url": checkUrl,
		"urlPatt": urlPatt.test(u), // reg exp test method. This will search the string for a specified value, and return true or false 
		"small": smallestValue,
		"r": r,  // this is the number that is given in the array 





	}
}


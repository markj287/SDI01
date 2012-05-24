// Mark Johnson
// SDI 1205 Project 4 
// My javascript library

// My revelaing Module Pattern  
var myLibrary = function () {


	// Function to check phone number match 
	var checkNumber = function () {
		var numPatt = /^[2-9]\d{2}-\d{3}-\d{4}$/.test("250-345-7586"); // regular exp check the pattern of a phone number
		console.log(numPatt)
	} // end check number function

	// Notes about this function.
	// I use the test method to search the regular exp to make sure it matches my phone number criteria 
	// Console.log numPatt so we can see the results of the test method 




	// Function to check email match 
	var checkEmail = function () {
		var emailPatt = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/.test("markj287@fullsail.com"); // regular exp check the pattern of a email address
		console.log(emailPatt)
	} // end check email function 

	// Notes about this function.
	// I use the test method to search the regular exp to make sure it matches my email criteria 
	// Console.log emailPatt so we can see the results of the test method




	// Function to check url match 
	var checkUrl = function () {
		var urlPatt = new RegExp ("^(http[s]?://|ftp://)?(www\.)?[a-zA-Z0-9-\.]+\.(com|org|net|edu|gov)$").test("http://fullsail.edu"); // regular exp check the pattern of a url. I used the reg exp built in contructor method 
		console.log(urlPatt)
	} // end check url function 

	// Notes about this function.
	// I use the test method to search the regular exp to make sure it matches my url criteria 
	// Console.log urlPatt so we can see the results of the test method




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





	// Function to convert a string to a number 
	var stringConversion = function() {
		console.log(parseInt("42"));  // used parseInt function to convert it to an actual number 
	}





	return {
		"checkNumber": checkNumber,  
		"checkEmail": checkEmail,
		"checkUrl": checkUrl,
		"smallestValue": smallestValue,
		"sumOfNumbers": sumOfNumbers,
		"stringConversion": stringConversion
	}
}


// create a library vairable 
var lib = myLibrary()


// checks to make sure the regular expressions are working 
lib.checkNumber()
lib.checkEmail()
lib.checkUrl()
lib.smallestValue()
lib.sumOfNumbers()
lib.stringConversion()













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
			var t = this,r = Number.POSITIVE_INFINITY,i; // this is the positive infinity property. This will allow us to find the samllest value less than the given number
				for (i = 0; i<t.length; i++) 
					if (a<t[i] && t[i] < r) r = t[i];

		return r
		}	

		var number = [100,37,103,23,54,31,26,78,109,34],givenNumber = 24; // array with given number set at 24, can be changes to any number 
		console.log("The smallest number in the array is " + number.minGreaterThan(givenNumber)); // explains the number with concatenation

	} // end samllest value function 

	// Notes on this function.
	// Used Array.prototype.minGreaterThan which finds the minimum number greater than our given number
	// The this keyword refers to the function i am executing which is anonymous 



	// Function to get sum of all numbers 
	var sumOfNumbers = function () {
		var sum = [67,"JavaScript is awesome",45,34,37,"SDI",156,22,7,8,3,"b"]; // private array 
		var result = 0;
		// use function isNaN to find numbers different from strings in the array
		for (var i = 0; i< sum.length; i++) {
			if (!isNaN(parseInt(sum[i]))) {
				result += sum[i];
			} // end if statment
		} // end for loop 

		console.log(result)
	} // end sum of all numbers function 

	// Notes about this function.
	// Used isNanN function to parse out my number from strings in my private array. NaN means Not a Number 
	// looped through the length of the array then parse it with parseInt, then console.log the result




	// Function to convert a string to a number 
	var stringConversion = function() {
		console.log(parseInt("42"));  // used parseInt function to convert it to an actual number 
	}

	// Notes on this function.
	// Used parseInt to convert the string to a number 
	// This one was pretty simple 



	// retrun the an object with all my methods making them public and accessible outside of myLibrary function 
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


// calls the methods 
lib.checkNumber()
lib.checkEmail()
lib.checkUrl()
lib.smallestValue()
lib.sumOfNumbers()
lib.stringConversion()













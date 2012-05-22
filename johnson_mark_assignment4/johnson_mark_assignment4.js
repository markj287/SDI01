// Mark Johnson
// SDI 1205 Project 4 


// My javascript library 
myLibray = {
 	// Sting method to check if its a phone number format 
 	checkNumber: function (n) {
 		var numPatt = /(^-*\d+$)|(^-*\d+\.\d+$)/;  // regular expression to check for a phone number 

 		return numPatt.test(n)  // this is a regular expression test method that searches the string for a specified value
 	}  // end checkNumber function  

 	checkEmail: function (e) {
 		var emailPatt = /^[a-zA-Z0-9][a-zA-Z0-9-_\s]+@[a-zA-Z0-9-\s].+\.[a-zA-Z]{2,5}$/; // regular expression to check email format 

 		return emailPatt.test(e) // this is a regular expression test method that searches the string for a specified value
 	} // end 


}

// Condition to check if its a phone number



console.log(myLibray.checkNumber)
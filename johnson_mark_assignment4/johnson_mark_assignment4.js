// Mark Johnson
// SDI 1205 Project 4 


// My javascript library 
myLibray = {
 	// method to check if its a phone number format 
 	checkNumber: function (n) {
 		var numPatt = /(^-*\d+$)|(^-*\d+\.\d+$)/;  // regular expression to check for a phone number 

 		return numPatt.test(n)  // this is a regular expression test method that searches the string for a specified value
 	},  // end checkNumber method 

 	// method to check if its a email format
 	checkEmail: function (e) {
 		var emailPatt = /^[a-zA-Z0-9][a-zA-Z0-9-_\s]+@[a-zA-Z0-9-\s].+\.[a-zA-Z]{2,5}$/; // regular expression to check email format 

 		return emailPatt.test(e) // this is a regular expression test method that searches the string for a specified value
 	}, // end checkEmail method

 	// method to if its an url
 	checkUrl: function (u) {
 		var urlPatt = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/ // regular expression to check url format 

		return urlPatt.test(u) // this is a regular expression test method that searches the string for a specified value
 	}, // end checkUrl method 

 	// method to get the smallest value in an array
 	getValue: function () {
 		Array.prototype.MinGreaterThan = function (a) {
 			var t = this,r = Number.POSITIVE_INFINITY,i;

 			for (i = 0; i<t.length; i++) 
				if (a<t[i] && t[i] < r) r = t[i];
		return r;
 		} 	
 		
 	}, // ends getValue method 

} // end my library method 

// Condition to check if its a phone number



console.log(myLibray.checkNumber)
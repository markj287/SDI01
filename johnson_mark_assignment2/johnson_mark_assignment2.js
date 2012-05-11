// Mark Johnson
// Project 2
// SDI 1205


var charName = "Mark",
	numberOfCousins = 3,
	numberOfBrothers = 2,
	cousinsName = ["Mike","Drer"]
;

// start string function
var goSwimming = function(currentTemp){
	var currentTemp;
	if(currentTemp <= 63){
		console.log(charName + " says it's too cold. We have to wait til later");
	} else {
		console.log(charName + " says yah, it's nice and hot. Let's go swimming");
	}
	return currentTemp;
}; // end string function

goSwimming(64) // calls the string function


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

// start number function
var playVideoGames = function(numberOfCousins,numberOfBrothers){
	var familyMemmbers = numberOfCousins + numberOfBrothers;
	while(familyMemmbers >=5){
		console.log(charName + " says, let's go play some video gmaes!");
		familyMemmbers--;
	}

	return familyMemmbers;
} // end number function 

console.log("It is " + playVideoGames(3,4) + " of them here");

// boolean functiomn
var sleepOver = function(answer) {
	var momWorking = true;
	if (momWorking == true){
		console.log(charName + " says mom is working overnight, so i'll sleep at my grandma house");
	} else {
		console.log(charName + " says mom is home tonight");
	}
	return momWorking;

}; // end boolean function

sleepOver(false) // calls boolean function
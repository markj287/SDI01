// Mark Johnson
// Project 2
// SDI 1205


var charName = "Mark",
	numberOfCousins = 3,
	numberOfBrothers = 2,
	cousinsName = ["Mike","Dre"]
;

// start string function
var goSwimming = function(currentTemp){
	var currentTemp;
	if(currentTemp <= 55){
		console.log(charName + " says " + currentTemp + " degrees." + "That's a little cold. Let's wait til later");
	} else {
		console.log(charName + " says yah, it's nice and hot. Let's go swimming");
	}
	return currentTemp;
}; // end string function
goSwimming(40) // calls the string function

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
		console.log(answer +  " mom is working overnight. I'll sleep at my grandma house");
	} else {
		console.log(charName + " says mom is home tonight");
	}
	return momWorking;

}; // end boolean function
sleepOver("Yes,") // calls boolean function


// array function
var bestFood = function(grandmaName){
	var grandMaName;
	for(var i=0, j=cousinsName.length; i<j; i++){
		console.log(charName + " loves his grandma " + grandmaName + " food so do " + cousinsName[i] + " but " + cousinsName[i] + " dont.")
	}
	return grandMaName;
} // ends array function
bestFood("sandra") // calls array function



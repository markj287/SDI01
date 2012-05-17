// Mark Johnson
// Project 3

// funtion for json data
var handleData = function (bradleyFamily) {
	for (i = 0; i < jonesFamily.members.length; i++){
		var member = jonesFamily.members[i];
		console.log('Family member name: ' + member.name + ', Age: ' + member.age + ', Occupation: ' + member.occupation);
	};   // console log info about family 
};
// calls json function
handleData(jonesFamily) 

var charName = "Mark",
	numberOfCousins = 3,
	numberOfBrothers = 2,
	cousinsName = ["Mike","Dre"]
;

// object with string prperty, number property, boolean property, array property and object property
var charDescription = {
	name: "Mark",
	weight: 77,
	goodKid: true,
	interests: [
		"basketball",
		"video games",
		"cartoons"
	],
	sayHi: function () {
		console.log("Playing with my cousins and brothers is fun")
	},
	address: {
		street: " 54 Copin Drive",
		city: "Miami",
		state: "Florida"
	}
}

console.log(charDescription["sayHi"]) // output the method in the object 

charDescription.sayHi = function () {
	console.log("But sometines they make me annoyed")
} // changes to method sayHi

//charDescription["sayHi"]() // output the change made 

// object with accessor method 
var house = {
	street: "256 6th st",
	city: "Miami",
	state: "Florida",
	goTo: function (address) {
		return address
	}
}

house["goTo"]() // output accesor method 
 

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



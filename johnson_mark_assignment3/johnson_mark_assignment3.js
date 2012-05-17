// Mark Johnson
// Project 3

// funtion for json data
var handleData = function (bradleyFamily) {
	for (i = 0; i < bradleyFamily.members.length; i++){
		var member = bradleyFamily.members[i];
		console.log('Family member name: ' + member.name + ', Age: ' + member.age + ', Occupation: ' + member.occupation);
	};   // console log info about family 
};
// calls json function
handleData(bradleyFamily) 

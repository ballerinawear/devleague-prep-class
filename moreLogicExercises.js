// Presidents - Accessing values in an Array

// Declare a variable named presidents which contains the first 5 presidents' last names: 
//Washington, Adams, Jefferson, Madison, Monroe.
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
var presidentList = function(){
	for (var i=0; i<presidents.length; i++){
		console.log("Value of i is: " + [i]);
		console.log("Value at Index is: " + presidents[i]);
	}
};
presidentList(presidents);

// Now write a FOR loop which iterates through this Array.
// Within the FOR loop, use console.log to:
// Log the value of i. Use a message like Value of i is: and append the value of i to this 
//String
// Log what is at index i in the array. Use a message like Value at Index is: and append 
//the value stored within the Array at that index.
// console.log is a great tool to give you feed back about your loops and the data that you're
//working with. When all else fails use console.log to inspect and debug your code.

// bonus: could you take the code inside of this FOR loop and encapsulate it inside of a 
//function called printContent and still achieve the same result? This new function should 
//accept two parameters.


// The String of Numbers
// Declare a variable named stringOfNumbers and set it's value to '' (an empty String).
var stringOfNumbers = '';
// Then write a FOR loop that appends a Number value to that string starting from 10 all the
// way up to and including 20.

var count = function(){
	for (var i=10; i<21; i++){
		stringOfNumbers += i;
	}
};
count(stringOfNumbers);
console.log(stringOfNumbers);
// After the FOR loop, use console.log to inspect your variable. In the end your String should 
//look like this 1011121314151617181920
// bonus: could you take the code inside of this FOR loop and encapsulate it inside of a 
//function called appendToString and still achieve the same result?

// Add only even numbrs to an array
// Declare a variable named evenNumberArray.
var evenNumberArray = [];
// Use a FOR loop to add only even numbers to an Array. Add 50 even numbers to the 
//evenNumberArray starting with the value 0.
for (var i=0; i < 100; i++){  
	if ((i % 2) === 0){   
		evenNumberArray += i;
	}
}
console.log(evenNumberArray);

// Accessing only the odd indexes of an Array - 'Not Even Brah'
// Someone forgot to fill out this array! Oh noes...
// Declare a new variable named oopsArray set it's value to be: [ 'turn' , , 'down' , , 'for' ,
// 'what' ]
// using a FOR loop, add the string 'nope' to every odd index.
// Example result should look like:
// `[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
//var oopsArray = ['turn', ,'down', , ]
var oopsArray = ['turn', ,'down', ,'for', ,'what'];
for (var i=0; i<oopsArray.length; i++){
	if (i %2 === 1){    //why =1?
		oopsArray[i] = 'nope'; //need to review this one
	}
}
console.log(oopsArray);

// Going backwards?!

// Using a FOR loop, iterate through the Array stored at oopsArray backwards. console.log each 
//value in the Array.

for (var i=oopsArray.length-1; i>=0; i-=1){  //don't understand this one
	console.log(oopsArray[i]);
}
// example output:

// what
// nope
// for
// nope
// down
// nope
// turn


// isNapTime
// Declare a variable named isNapTime. Set it to false
var isNapTime = false;
// Declare a variable named napSchedule. Set it's value to be an Array with the values 
//[false, false, true, false, true, true]
var napSchedule = [false, false, true, false, true, true];
// Declare a function named nap. This function takes in a single parameter called schedule

// If schedule is true then use console.log to display the message ZzZzZzZz
// otherwise if schedule is false use console.log to display the message Gotta get to work! 
//and then change the value of isNapTime to true  ***?
// Now, Write a FOR loop that iterates through the napSchedule array and runs the function 
//nap while passing in the value at the current position of napSchedule into the nap function.

var nap = function(schedule){
	if (schedule === true){
		console.log("ZzZzZzZz");
	}else{
		console.log("Gotta get to work!");
	} 
};

for (var i=0; i<napSchedule.length; i++){
	(nap(napSchedule[i]));
}

// example-2
// CopyArray - clone array values
// Declare a variable named copyOfValuesArray and set it's value to be an empty array, [].
// Declare a variable named valuesArray and set it's value to be an array, [99, 66, 829, 1941, 
//, 76].
var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 76];
// Declare a function named copyArray which takes two arguments: originArray and 
//destinationArray. Inside of this function you will loop through the contents of originArray 
//and push each value into destinationArray.
var copyArray = function(originArray, destinationArray){
	for (var i=0; i<originArray.length; i++){
		destinationArray.push(originArray[i]);
	}
};
// To get started, below your function declaration, call your function and pass in the two
// variables, valuesArray and copyOfValuesArray. After that, use console.log to to inspect the
//values of valuesArray and copyOfValuesArray to make sure they have the same values 
//(which means your function worked!).
copyArray(valuesArray, copyOfValuesArray);
console.log(valuesArray);
console.log(copyOfValuesArray);

// Final Boss
// Stage 1 - Only String Values
// Declare a variable named miscStorage set it's value to be: [ [], 'Carrots', 9, 'Beets', {},
//{name: "Todd B."}, 'Mush' ]
var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush'];
// Declare a function named generateArrayOfStrings which takes a single argument storage. 
//This function returns a new Array with only String values inside of it.
var generateArrayOfStrings = function(storage){
	var storedValue = [];
	for (var i=0; i< miscStorage.length; i++){
		var tempStorage = storage[i];
		if (typeof(tempStorage) === 'string'){
			storedValue.push(tempStorage);
		}
	}return storedValue;
};
console.log(generateArrayOfStrings(miscStorage));

// Final Form - Change values of objects stored within an Array
// It's that time again, we need to graduate the current class of students and start enrollment 
//for the next class.
// Declare a variable named currentClass and set it's value to be this array found here.
var currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];
// Declare a function named graduateAndSetNewClass, it takes a single argument called class.
var graduateAndSetNewClass = function(myClass){ //don't get this one
	for (var i=0; i<myClass.length; i++){
		if (myClass.enrolled[i]===true){
			return myClass.graduated===true;
		}else{
			return myClass.graduated===false;
		}
	}

};
// Your function will iterate through the class argument and check each student's enrolled 
//property.

// If the enrolled property is set to true then change that student's graduated property to 
//true. Otherwise, if enrolled is set to false then change enrolled to true leaving graduated 
//alone and unchanged.






// Declare Two Variables
// a random Number value
// b random Number value
// We will be using both of these variables to pass as parameters to the following 
//functions that we will write. Pay close attention to the other variable names you 
//will create as they will become input to other functions.

var a = 2;
var b = 10;

// Function - add
// This function returns the result of adding a and b together. Store this value in a 
//variable named sum.

var sum = a + b;
console.log(sum);

// Function - subtract
// This function returns the result of subtracting b from a Store this value in a variable 
//named difference

var difference = b - a;
console.log(difference);

// Function - multiply
// This function returns the result of multiplying b by a. Store this value in a variable 
//named product

var product = a * b;
console.log(product);

// Function - checkDifference
// This function accesses the value stored in the difference variable and uses this number 
//to return the string "My football team lost X times this week", where X is the value
//stored in difference.

console.log("My football team lost " + difference + " times this week");

// Function - checkSum
// This function checks the value stored at sum and uses that number to print to the screen 
//the phrase "I CAN ADDZ X NUMBERS" where X is the value stored in the variable sum .

console.log("I CAN ADDZ " + sum + " NUMBERS");

// Function - checkProduct
// This function checks the value stored at product and multiplies it by the number stored 
//at difference and then prints the result to the console.

var checkProduct = function(a, b){
	return product * difference;
};

console.log(checkProduct());

// Function - addThenSubtract
// This function takes three Number arguments named by you, then adds the first two arguments 
//together. Then with the sum of that operation, subtract the value at the third argument. 
//This function should make use of your previous functions.

// example: addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2

var c = 7;
var addThenSubtract = function(a, b, c){
	return a + b - c;
};

console.log(addThenSubtract(a, b, c));

// Function - addThenMultiply
// This function takes three Number arguments named by you, then adds the first two arguments 
//together. Then with the sum of that operation multiply it by the third argument. 
//This function also should make use of your previous functions.

// Store the return of this function to a variable named howMany

var howMany = function(a, b, c){
	return (a + b) * c;
};

console.log(howMany(a, b, difference));

// Function - createFullName
// @param Datatype: String firstName
// @param Datatype: String lastName 
// @return Datatype: String
// This function takes two String arguments firstName and lastName. This function returns 
//back a string which represents someone's full name.

// Call this function and pass your first and last name into it. Store the return value to a variable named myFullName

var createFullName = function(first, last){
	return first + " " + last;
};

console.log(createFullName("Gayle", "Takanishi"));

// Function - verifyDrinkingAge
// @param Datatype: Number age
// @return Datatype: Boolean
// This function takes one Number argument age. This function returns the Boolean value true 
//or false if age is lower than the legal drinking age in the state of Hawaii.

// Call this function and pass in a number value. Store the return value to a variable 
//named canDrinkBeer

var age = 21;
var verifyDrinkingAge = function(age){
	if (age>20){
		return true;
	}else{
		return false;
	}
};

console.log(verifyDrinkingAge(age));

// Function - throwParty
// This function checks the value stored at the canDrinkBeer variable and if the value is 
//false it should print to a message to the screen, "The Party will have tons of Cake!" 
//otherwise this message should be "This Party will have an open bar".

var canDrinkBeer = verifyDrinkingAge(age);
var throwParty = function(){
	if (canDrinkBeer === false){
		console.log("The Party will have tons of Cake!");
	}else{
		console.log("The Party will have an open bar");
	}
};
throwParty(canDrinkBeer);


// Function - eatFood
// This function takes 3 arguments firstName, lastName, food and prints out a message to your 
//screen. Internally this function will make use of the createFullName function you 
//created earlier.
// exmaple input: if someone called your program like this eatFood( "John", "Papa", "Pizza" )
// example output: "John Papa loves to eat Pizza"
// exmaple input: if someone called your program like this eatFood( "Peter", "Bojangles", "California Burritos" )
// example output: "Peter Bojanglesloves loves to eat California Burritos"

var food = "pizza";
var eatFood = function(first, last, food){
	console.log(createFullName(first, last) + " loves to eat " + food);
};

eatFood("John", "Papa", "pizza");
// Function - repeater
// This function will print to the screen X amount of times. Where X is the value stored at 
//howMany. Inside of this function it will check if the value of canDrinkBeer, 
//if the value is true the message will be "Bacon Pancakes, makin' Bacon Pancakes..." 
//othewise the message will be "Let it go.... LET IT GOOOOOOoOoOoOo..."

var canDrinkBeer = true;
var howMany = 3;

var repeater = function(){
  for (var i=0; i<howMany; i++){
  if (canDrinkBeer === true){
    console.log("Bacon Pancakes, makin' Bacon Pancakes...");
  }else{
    console.log("Let it go.... LET IT GOOOOOOoOoOoOo...");
  }
  }
};
(repeater(howMany));
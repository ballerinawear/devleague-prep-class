//function youGetTaco


function youGetTaco(action){
	if (action === 'eat'){
		return 'Eat Tacos';
	}
}
var myAction = 'eat';
console.log(youGetTaco('eat'));


//greater than

var firstNumber = 3;
var secondNumber = 4;
function isNumberGreaterThan(a, b){
	if (a > b) {
		console.log("true");
	} else {
		console.log("false");
	}
}
isNumberGreaterThan(firstNumber, secondNumber);

//is true

//Write a function that takes in a Boolean value named val and have the function return 
//whether the value is true

function isItTrue(val){
	if (val === true){
		return true;
	}else {
		return false;
	}
}

console.log(isItTrue(false));


//Write a function that takes in a Boolean value named val and have the function return whether the value is false.


function isItFalse(val){
if (val === 2){
	console.log("false");

}else {
	console.log("true");
}
}
var val = 2;
isItFalse(val);

//Write a function that takes two variables of type String called firstWord and secondWordrespectively. 
//Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'


var firstWord = "hello";
var secondWord = "goodbye";
function doWordsMatch(firstWord, secondWord){
	if (firstWord === secondWord){
		console.log("AWWWRIGHT");
	} else {
		console.log("Y U NO MATCH!");
	}
}
doWordsMatch(firstWord, secondWord);

//Write a function that takes two variables of type Boolean called first and secondrespectively. 
//Return true if both values are true otherwise return false.

var first = true;
var second = true;

function doubleEquals(first, second){
	if (first === true && second === true);
	console.log("true");
}

doubleEquals(first, second);

//Write a function that takes three variables of type Number called first and second and third respectively. 
//Return true if the sum of all values are greater than 30 otherwise return false.

var firstNo = 5;
var secondNo = 10;
var thirdNo = 7;

function totalOver30(firstNo, secondNo, thirdNo){
 if ((firstNo + secondNo + thirdNo) > 30){
 console.log("true");

} else {
	console.log("false");
}
}
totalOver30(firstNo, secondNo, thirdNo);

//Write a function that takes four variables of type Number called first and second and third and fourth 
//respectively. Return true if the sum of first, second and third are less than fourth otherwise return false.

var fourthNo = 20;

function totalUnderWhat(firstNo, secondNo, thirdNo, fourthNo){
	if ((firstNo + secondNo + thirdNo) < fourthNo){
		console.log("true");
	} else {
		console.log("false");
	}
}
totalUnderWhat(firstNo, secondNo, thirdNo,	fourthNo);

//Write a function that takes in a Number value named limit and have the function write a for loop that 
//loops the number of times of limit and console.log each number as the loop executes.

var limit = 10;

for (var i = 0; i < limit; i++){
console.log(i);
}

//Write a function that takes in a Array value named characters that has a sequence of single character 
//String values and have the function write a for loop that loops for each number of elements in the Array 
//and console.log each character as the loop executes.

var myLetters = ["H", "e", "l", "p"];
function printCharacters(characters){

for (var i = 0; i < characters.length; i++) {
	console.log(characters[i]);
}
}
printCharacters(myLetters);

//var showEachValue


//Write a function that takes a single variable of type String called word and write a for loop that 
//creates an Array made up of each character in word except for A. We don't want no stinking A in our Array. 
//Note: You will need to use the Array.push() method to complete this function.

//var createAnArrayFromString
 var word = "Aloha";
 var arr = [];
 function createWord(word){
	 for (var i = 0; i < word.length; i++){
	 	if (word[i]  !== "A" && word[i] !== 'a') {
		 	arr.push(word[i]);
		 	console.log(arr);
	 	}
	 }
}
createWord(word);

//Write a function that takes an Array with any number of type Number and write a for loop to add all numbers 
//in the Array and return the sum.

//greatSummator

var arrNumbers = [2,5,8,12];
var totalNumber = 0;
function addIt(total){

for (var i = 0; i < arrNumbers.length; i++){
	totalNumber += arrNumbers[i];
		console.log(totalNumber);
	}
}
addIt(totalNumber);

//Write a function that takes an Array with any number of type Number and second variable called total. 
//Return true if the sum of all values in the Array are less than total otherwise return false.

//totalUnderWhatFor

var myNumbers =[1, 3, 4, 6];
var sumTotal = 0;
var total = 14;

function totalUnderWhatFor(isItTheTotal){
	for (var i=0; i < myNumbers.length; i++){
		sumTotal += myNumbers[i];}

			if (sumTotal < total){
				console.log("true");
			}else {
			console.log('false');
		
	}
}

totalUnderWhatFor(sumTotal);

//Write a function that takes an Array with any number of type Boolean values and write a for loop to call
// our isTrue function with each value as input and return true if all values return true from our isTrue function.

//Need function takes an array

//var trueFalse = 
function boolValue(arrayNumbers){
	for (var i=0; i < arrayNumbers.length; i++){
		
	if (isItTrue(arrayNumbers[i]) === true){
		console.log(true);
	} else {
		console.log(false);  //still repeating answers
		return;
	}
}
}

var arrayNumbers = [true, false, true, true]; 
//var arrayNumbersT = [true, true, true, true];
//for loop to call isItTrue function with each value as input
//return true if all values are true

boolValue(arrayNumbers);


//example 2

function isTrue(bool) {
	return bool === true;
	}
	
	var someArr = [true, false, true];

function checkTrueValue(arr){
	var isArrTrue = true;
	for (var i=0; i<arr.length; i++){
		if (!isTrue(arr[i])){
			isArrTrue = true;
		}

	}	
		console.log(isArrTrue);
			return isArrTrue;
}

checkTrueValue(someArr);

//example 3

function isTrue (bool){
	return bool ===true;
}
var someArr = [true, false,true];
var someArr2 = [true, true, true];

function checkTrueValue(arr){
	for (var i = 0; i < arr.length; i++){
		if (!isitTrue(arr[i])){
			return false;
	
		}
	}
return true;
}

console.log(checkTrueValue(sommArr));
console.log(checkTrueValue(sommArr2));













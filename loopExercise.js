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

function isItTrue(bool){
	if (bool ===5){
		console.log("true");
	}else {
		console.log("false");
	}
}
var myNumber = 5;
isItTrue(myNumber);


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















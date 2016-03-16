// Function - youGetTaco
// Write a function that takes a single String parameter called action. If the value passed 
//into our function is eat, have the function return the String value EAT TACOS.

var youGetTaco = function(action){
	if (action === "eat"){
		console.log("EAT TACOS");
	}
};
youGetTaco("eat");

// Function - isNumberGreaterThan
// Write a function that takes two variables of type Number called first and secondrespectively.
//return true if the first number is greater than the second.

var isNumberGreaterThan = function(first, second){
	if (first > second){
		return true;
	}
};
console.log(isNumberGreaterThan(3,1));

// Function - isTrue
// Write a function that takes in a Boolean value named val and have the function return 
//whether the value is true.

var isTrue = function(val){
	if (val === 5){
		return true;
	}else {
		return false;
	}
};
console.log(isTrue(6));

// Function - isFalse
// Write a function that takes in a Boolean value named val and have the function return 
//whether the value is false.

var isFalse = function(val){
	if (val !== 5){
		return false;
	}
};
console.log(isFalse(7));

// Function - isEqual
// Write a function that takes two variables of type String called firstWord and 
//secondWordrespectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 
//'Y U NO MATCH!'.

var isEqual = function(firstWord, secondWord){
	if (firstWord === secondWord){
		console.log('AWWWWRIGHT');
	}else{
		console.log('Y U NO MATCH!');
	}
};
isEqual("right", "right");

// Function - isNotEqual
// Write a function that takes two variables of type String called firstWord and 
//secondWordrespectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 
//'Y U MATCH!'.

var isNotEqual = function(firstWord, secondWord){
	if (firstWord !== secondWord){
		console.log("AWWWRIGTH");
	}else{
		console.log("Y U MATCH!");
	}
};
isNotEqual("right", "right");

// Function - doubleEquals
// Write a function that takes two variables of type Boolean called first and 
//secondrespectively. Return true if both values are true otherwise return false.

var doubleEquals = function(first, second){
	if (first === true && second === true){
		return true;
	}else{
		return false;
	}
};

console.log(doubleEquals(true, false));

// Function - totalOver30
// Write a function that takes three variables of type Number called first and second and 
//third respectively. Return true if the sum of all values are greater than 30 otherwise 
//return false.

var totalOver30 = function(first, second, third){
	if ((first + second + third) > 30){
		return true;
	}else{
		return false;
	}
};
console.log(totalOver30(10, 15, 21));

// Function - totalUnderWhat
// Write a function that takes four variables of type Number called first and second and third 
//and fourth respectively. Return true if the sum of first, second and third are less than 
//fourth otherwise return false.

var totalUnderWhat = function(first, second, third, fourth){
	if ((first + second + third) < fourth){
		return true;
	}else{
		return false;
	}
};

console.log(totalUnderWhat(2, 5, 7, 20));

// Function - looptoNumber
// Write a function that takes in a Number value named limit and have the function write a for
//loop that loops the number of times of limit and console.log each number as the loop executes.

var looptoNumber = function(limit){
	for (var i=0; i<limit; i++){
		console.log(i);
	}
};
looptoNumber(10);

// Function - showEachValue
// Write a function that takes in a Array value named characters that has a sequence of single
//character String values and have the function write a for loop that loops for each number 
//of elements in the Array and console.log each character as the loop executes.

var showEachValue = function(characters){
	for (var i=0; i<characters.length; i++){
		console.log(characters[i]);
	}
};
showEachValue("hello");

// Function - createArrayFromString
// Write a function that takes a single variable of type String called word and write a for 
//loop that creates an Array made up of each character in word except for A. We don't want no
// stinking A in our Array. Note: You will need to use the Array.push() method to complete this 
//function.

var createArrayFromString = function(word){
	for (var i=0; i<word.length; i++){
		if (word[i] !== 'A'){
			console.log(word[i]);
		}
	}
};
createArrayFromString("Aloha");  //need to use push method

//can do this
var word = "Aloha";
var word2 = [];
function noAs(a, b){
  for (var i=0; i<a.length; i++){
    if (a[i] !== 'A'){
      b.push(a[i]);
    }
  }console.log(b);
}

noAs(word, word2);

/*var word = "aloha";
var string = [];
var createArray = function(word){
  for (var i=0; i<word.length; i++){
    if (word[i] !== 'a'){
      string.push(word[i]);
      console.log(string);
    }
  }
};
createArray(word);*/


// Function - greatSummator
// Write a function that takes an Array with any number of type Number and write a for loop 
//to add all numbers in the Array and return the sum.

var arrNumbers = [2,4,6,8];
var totalNumber = 0;
var greatSummator = function(total){
	for (var i = 0; i < arrNumbers.length; i++){
		totalNumber += arrNumbers[i];
	}
		console.log(totalNumber);
};
greatSummator(arrNumbers);

// Function - totalUnderWhatFor
// Write a function that takes an Array with any number of type Number and second variable 
//called total. Return true if the sum of all values in the Array are less than total otherwise 
//return false.

var myNumbers = [1,3,5];
var sumTotal = 0;
var total = 25;

var totalUnderWhatFor = function(){
	for(var i = 0; i<myNumbers.length; i++){
		sumTotal += myNumbers[i];
		}if (sumTotal < total){
			console.log("true");
		}else{
			console.log("false");
		}
};
totalUnderWhatFor(sumTotal);

// Function - checkTrueValues
// Write a function that takes an Array with any number of type Boolean values and write a for 
//loop to call our isTrue function with each value as input and return true if all values return 
//true from our isTrue function.

function isTrue (bool){
	return bool ===true;
}
var someArr = [true, false,true];
var someArr2 = [true, true, true];

function checkTrueValue(arr){
	for (var i = 0; i < arr.length; i++){
		if (!isTrue(arr[i])){
			return false;
	
		}
	}
return true;
}

console.log(checkTrueValue(someArr));
console.log(checkTrueValue(someArr2));

//example 2
function isTrue (bool){
	return bool ===true;
}
var someArr = [true, false,true];
var someArr2 = [true, true, true];

function checkTrueValue(arr){
	for (var i = 0; i < arr.length; i++){
		if (isTrue(arr[i])===false){
			return false;
	
		}
	}
return true;
}

console.log(checkTrueValue(someArr));
console.log(checkTrueValue(someArr2));






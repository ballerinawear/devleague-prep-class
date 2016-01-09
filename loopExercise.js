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

window.onload = function(){

//Example
var createElement = document.createElement('h1'); //creating a "h1" element (h1 heading)
createElement.id = "headline"; //creating an identifier for the 'h1' element
createElement.innerHTML = "Welcome to Tacocat's internet page."; //adding content to the h1 element
container.appendChild(createElement); //adds the h1 element to the container div element.

//Exercise 1:
/*Declare a variable named catBox and assign its value with the createElement method that will create a 'div' element. Give this 'div' element an id of "meow". 

Next, add the following text inside this newly created 'div' element:
"Overcome its fear of cucumbers!"

Append this 'div' element inside the "bigBox" div element that has already been created in the index.html file*/

/*Helpful Hints:
document.createElement creates an Element node
element.id sets or returns the identifier of an element
element.innerHTML sets or returns the HTML element content of an element
node.appendChild() is a method that appends a node as the last child of a node*/

var catBox = document.createElement('div');
catBox.id = "meow";
catBox.innerHTML = "Overcome my fear of cucumbers!";
bigBox.appendChild(catBox);

//Exercise 2
/*Declare a variable named catBox2 and create an element of your choice.  Give your element an id of "purr".  Next assign your element with the following text:
"Audition for the next musical."

Append this newly created element to the bigBox element.*/

var catBox2 = document.createElement('p');
catBox2.id = "purr";
catBox2.innerHTML = "Audition for the next musical.";
bigBox.appendChild(catBox2);

//Exercise 3
/*Your objective is to display the following getBuckets array into the document. 
Declare a variable named bucketList and assign its value with the createElement method that will create a 'li' element (list item).
Assign the "li" element with a class name of "daList"
Each "li" element will show an item from the data collection
Append the "li" elements inside the "buckets" div that have been already created in the index.html file*/

/*Helpful Hints:
element.className is a property that sets or returns the class name of an element*/

var getBuckets = ["Become more famous than that overrated fraud Garfield", "Visit Aoshima (aka Japan's Cat Island)", "Exhaust my entire 9 lives", "Pass DevLeague's coding challenge", "Become the next internet sensation"];

for(var i = 0; i<getBuckets.length; i++){
  console.log(getBuckets[i]);

  var bucketList = document.createElement('li');
  bucketList.className = "daList";
  bucketList.innerHTML = getBuckets[i];
  buckets.appendChild(bucketList);
}

//Exerise 4
/*Our motivated Tacocat has been hard at work on its bucket list.  Update the current list to the following:
"Become more famous than that overrated fraud Garfield" => "I'm coming for you Felix!"

Declare a variable named changeList and assign it to the getElementsByTagName method.
*/
var changeList = document.getElementsByTagName('li');
changeList[0].innerHTML = "I'm coming for you Felix!";

//Exercise 5
/*Declare a variable named changeListAgain and assign it to the getElementsByClassName method. Update the current list to the following:

"Exhaust my entire 9 lives" => "I got 1 life to live!"*/

var changeListAgain = document.getElementsByClassName("daList");
changeListAgain[2].innerHTML = "I got 1 life to live!";

};


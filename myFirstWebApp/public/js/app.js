function addLastName() {

  var lastNameElem = document.createElement('span');

  var lastNameText = document.createTextNode('Takanishi');

  lastNameElem.id = 'myLastName';
  lastNameElem.appendChild(lastNameText);

  var myNameElem = document.getElementById('myName');

  myNameElem.appendChild(lastNameElem);
}

//addLastName(myName);

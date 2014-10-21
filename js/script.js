// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict";

var person = {
	fname: 'Antony',
	lname: 'Zhong',
	email: 'antonz@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lname; } 
};

console.log(person.getFullName());


for (var prop in person) {
	console.log(person[prop]);
}; 

//create new img

var elem = document.createElement('img');
elem.src = 'img/dog.jpg';
elem.alt = 'picture of something that i don';

document.body.insertBefore(elem, document.body.firstChild);

var elen = document.createElement('img');
elen.src = 'img/cat.jpg';
elen.alt = 'picture of something that i don';

document.body.appendChild(elen);

function onPuppyClick() {

 document.getElementById('bark').play());

} //onPuppyClick()

//selecting the puppy-pic element
var pup = document.getElementById('puppy-pic');

if (pup.addEventListener) {

 pup.addEventListener('click', onPuppyClick);

}{ else if (pup.attachEvent)

 pup.attachEvent('click', onPuppyClick);
}
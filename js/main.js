// this changes the background of the div to blue...you must make Elements plural so it can search it
// the reason for [0] is saying you want it to change the FIRST one.
document.getElementsByClassName('one')[0].style.backgroundColor = 'blue'
// creating a element storing it in a var
var newDiv = document.createElement('h1')
//this will be in the text
var textHere = document.createTextNode('Hello World')
// this will add text to the element
newDiv.appendChild(textHere)
// this  will get the id from html and insert hello world
var addHere = document.getElementById('three')
// this will append it to the new div
addHere.appendChild(newDiv)

var newImg = document.createElement('img')
newImg.src = 'https://vignette2.wikia.nocookie.net/disney/images/d/d9/Squirt-FN.png/revision/latest?cb=20131111070105'


function img() {
	document.getElementById('images').src = newImg.src
}
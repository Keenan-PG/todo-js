/*
 * Lesson scripts (keeping this for functionality)
 */

// caching queries as that saves space & helps with readability
var enterButton = document.getElementById("enterButton"); // selecting button (cached as variable) 
var textInput = document.getElementById("textInput"); //  selecting input (cached as variable)
var ul = document.querySelector("ul"); 
var li = ul.querySelectorAll("li");
var deleteButtons = document.getElementsByClassName("deleteButton");

// function to check length of text input - was repeating a lot.
function textInputLength() {
	return textInput.value.length;
}

// function to check length of list
function listLength() {
	return li.length;
}

function btnLength() {
	return deleteButtons.length;
}

function addListenerToButtons() {
	for (var i = 0; i < btnLength(); i++) {
		var btn = deleteButtons[i];
		btn.addEventListener("click", removeElement);
	}
}

function appendButtonToExistingItems() {
	// for loop to loop through existing items 
	for (var i = 0; i < listLength(); i++) {
		// appending button as a child of each li element.
		li[i].appendChild(createDeleteButton());
		addListenerToButtons();
	}
}

function createDeleteButton() {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("X"));
	deleteButton.classList.add("deleteButton");
	return deleteButton;
}

// create list element function. removes the need for repeated code in below functions.
function createListElement() {
	// caching create element method for <li> within var
	var li = document.createElement("li");
	//creating text node to add to list containing value of textInput
	li.appendChild(document.createTextNode(textInput.value));
	//appending child <li> to <ul>
	ul.appendChild(li);
	// ensuring textInput is reset after something is added
	textInput.value = "";
}

// add list element clicked function so it can be used multiple times w/out repeating
function addListElementClicked() {
	// ensuring textInputLength is larger than 0 (not empty)
	if (textInputLength() > 0) {
		// if so, create list element.
		createListElement();
	}
}

// add list element keypress function so it can be used multiple times w/out repeating
function addListElementKeypress(event) {
	// same check as above, as. well as validation keyCode 13 (Enter)
	if (textInputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeElement(e) {
	e.target.parentNode.remove();
}

// above functions remove the need to repeat code in eventListener anon functions
enterButton.addEventListener("click", addListElementClicked); // these are callback functions. this method uses a function as a param/arg so it's fine to use this syntax.
textInput.addEventListener("keypress", addListElementKeypress);

/*
* Exercise scripts
*/

// passing in event to provide clicked elements with "done" class. 
function toggleDone(e) {
	// validating tagName of clicked element as it was crossing out button text too. 
	// No idea why, but apparently has to be capitals.
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

// li.addEventListener("click", done); - li doesn't work as it returns array of all.
ul.addEventListener("click", toggleDone);
appendButtonToExistingItems();
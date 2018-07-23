// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
// 	alert("You've just clicked a button");
// }); // args - event, function/action

// button.addEventListener("mouseenter", function() {
// 	alert("You've just clicked a button");
// }); // args - event, function/action

// button.addEventListener("mouseleave", function() {
// 	alert("You've just clicked a button");
// }); // args - event, function/action

/*
 * Actual scripts
 */

 // cahching queries as that saves space & helps with readability

var enterButton = document.getElementById("enterButton"); // selecting button (cached as variable) 
var textInput = document.getElementById("textInput"); //  selecting input (cached as variable)
var ul = document.querySelector("ul"); 

// function to check length of list input - was repeating a lot.
function textInputLength() {
	return textInput.value.length;
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

// above functions remove the need to repeat code in eventListener anon functions
enterButton.addEventListener("click", addListElementClicked); // these are callback functions. this method uses a function as a param/arg so it's fine to use this syntax.
textInput.addEventListener("keypress", addListElementKeypress);
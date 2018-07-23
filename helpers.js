// DOM Selectors
// --------------
// getElementsByTagName - returns an array so specify which one 
// getElementsByClassName - returns array so specify which one 
// getElementById

// querySelector - singular first item 
// querySelectorAll - array of all items 

// getAttribute - gets value of HTML attribute 
// setAttribute	- sets value of HTML attribute 

// ##Changing Styles
// style.{property} //ok

// className - good
// classList - best
// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children

// ##It is important to CACHE selectors in variables


/*
*	DOM Structure 
*/

// DOCUMENT
//	root Element (<html>)
//		element (i.e. <body>)
//			element (i.e. <header>)
//			attribute (i.e. href="")
//				text nodes (innerHTML, i.e. "Home page");

// Note: most browser code is event driven.
// Listen for event -> provide callback (containing action)
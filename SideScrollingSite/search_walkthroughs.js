// JavaScript code for search button
// Credit to: https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

// Search walkthroughs function for walkthroughs.html webpage search bar
function search_walkthroughs() { 
	var searchTerm = document.getElementById('searchBar').value 
	// To eliminte confusion between capital vs lowercase letters
	searchTerm = searchTerm.toLowerCase(); 

	// Gets elements by class name
	var walkthroughs = document.getElementsByClassName('walkthrough'); 
	
	// Loops through the list of walkthroughs search each list item for the searchTerm and either displaying it or not
	for (i = 0; i < walkthroughs.length; i++) { 
		if (!walkthroughs[i].innerHTML.toLowerCase().includes(searchTerm)) { 
			// Does not display the walkthrough list item if it does not include the searchTerm
			walkthroughs[i].style.display="none"; 
		} 
		else { 
			// Displays the walkthrough list item as an inline style
			walkthroughs[i].style.display="inline";				 
		} 
	} 
} 


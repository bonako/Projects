// JavaScript code for search button
// Credit to: https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

// Search games function for games.html webpage search bar
function search_games() { 
	var searchTerm = document.getElementById('searchBar').value 
	// To eliminte confusion between capital vs lowercase letters
	searchTerm = searchTerm.toLowerCase(); 

	// Gets elements by class name
	var gameList = document.getElementsByClassName('games'); 
	
	// Loops through the list of games search each list item for the searchTerm and either displaying it or not
	for (i = 0; i < gameList.length; i++) { 
		if (!gameList[i].innerHTML.toLowerCase().includes(searchTerm)) { 
			// Does not display the game list item if it does not include the searchTerm
			gameList[i].style.display="none"; 
		} 
		else { 
			// Displays the game list item as an inline style
			gamelist[i].style.display="inline";				 
		} 
	} 
} 


class Solution {
	// method returns a String
	// takes in a string variable
	public String reverseString(String s) {
		// create a character array from the strings characters
		char[] characters = s.toCharArray();
		// create a left index for traversal
		int i = 0;
		// create a right index for traversal
		int j = s.length() - 1;
		// loop the indexes towards the center of the array
		while(i < j) {
			// swap elements from the outside in
			char temp = characters[i];
			characters[i++] = characters[j];
			characters[j--] = temp;
		}
		// return the String version of the char array
		return new String(characters);
	}
}
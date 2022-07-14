class Solution {
	// create boolean method
	// takes in two strings
	public boolean isAnagram(String s, String t) {
		// check if lenghts of two strings are the same or not
		// criteria for anagram
		if(s.length() != t.length()) {
			return false;
		}
		// create a array to count letter occurances
		int[] counts = new int[26]; // [2, 0, 0, ...]
		// loop through one of the arrays (doesn't matter since they are same length)
		for(int i = 0; i < s.length(); i++) {
			// set counts array to update letter values
			counts[s.charAt(i) - 'a']++;
			// reduce counts array to update letter values that are already in the second string therefore cancelling out the occurances
			counts[t.charAt(i) - 'a']--;
		}
		// loop through the counts array of 26 letters
		// they should all be set to 0 because of the cancellation effect of the anagram
		for(int i: counts) {
			if(i != 0) {
				return false;
			}
		}
		
		return true;
	}
}
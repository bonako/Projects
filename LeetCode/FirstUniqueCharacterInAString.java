class Solution {
	// method returns integer, takes in a string
	public int firstUniqChar(String s) {
		// create a hash map that maps characters to integer values ( C : 5 )
		HashMap<Character, Integer> map = new HashMap<Character, Integer>();
		
		// loop loop through each character in the string
		for(int i = 0; i < s.length; i++) {
			// current character
			char current = s.charAt(i);
			// if hashmap does not contain current character add it to the hashmap with its current index
			if(!map.containsKey(current)) {
				map.put(current, i);
			} else {
				// else add it to the hasmap and subtract 1
				map.put(current, -1);
			}
		}
		
		// create a min variable
		int min = Integer.MAX_VALUE;
		// loop through the hashmap
		for(char c: map.keySet()) {
			// check integer variable of each key
			// if its not -1 and its less than min (need to get the first integer)
			if(map.get(c) > -1 && map.get(c) < min) {
				// set min to be the character first occurance unique index
				min = map.get(c);
			}
		}
		
		// return the min value (index of first unique char
		return min == Integer.MAX_VALUE ? -1 : min;
	}
}
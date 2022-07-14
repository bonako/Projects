// define a Java class
class Solution {
	// define a public method called singleNumber that returns
	// an integer value, and accepts an integer array as input
	public int singleNumber(int[] nums) {
		// create a data structure called a hashset that is of integer type
		HashSet<Integer> set = new HasSet<Integer>();
		// loop through every integer in the nums array
		for(int i: nums) {
			// check whether or not the hashset contains this integer
			if(set.contains(i)) {
				// if it does, then remove that integer from the hashset
				set.remove(i);
			} else {
				// else (if the hashset does not contain this integer, then add it)
				set.add(i);
			}
		}
		
		// loop through the hashset now
		for(int i: set) {
			// return the first integer in the hashset
			return i;
		}
		// if hashset is empty, return -1
		return -1;
	}
}
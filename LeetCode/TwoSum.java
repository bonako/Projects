class Solution {
	// method returns a array of integers
	// takes in a array of integers and a integer value
	public int[] twoSum(int[] nums, int target) {
		// create a hashmap that maps integers to integers
		HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
		// create a result array of integers of length 2 (output of two sum)
		int[] result = new int[2];
		// loop through the entire nums array
		for(int i = 0; i < nums.length; i++) {
			// calculate missing value for the current value
			int difference = target - nums[i];
			// if the hash map contains that key (value)
			// the first result is found
			// the seconds result is then the the value of the missing value in the hasmap
			if(map.containsKey(difference)) {
				result[0] = i;
				result[i] = map.get(difference);
				return result;
			}
			// add the current value of nums into the hashmap
			// and add the current index
			map.put(nums[i], i);
		}
		
		return result;
	}
}
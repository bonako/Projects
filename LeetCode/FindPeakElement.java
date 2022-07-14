class Solution {
	// create a method that returns int, takes in a integer array
	public int findPeakElement(int[] nums) {
		// left index creation
		int left = 0;
		// right index creation
		int right = nums.length - 1;
		// merge indexes to middle of the array
		while(left < right) {
			// get the index of the middle element of the array
			int mid = left + (right - left) / 2;
			// check whether the middle element is smaller than the one to its right
			// if so the left index is that new elements index starting point
			// otherwise the right index is the new final index
			if(nums[mid] < nums[mid + 1]) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		// return the index of the starting element
		return left;
	}
}
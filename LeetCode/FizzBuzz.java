class Solution {
	// method that returns a List type object of Strings
	// accepts a single integer value
	public List<String> fizzBuzz(int n) {
		// create a list object of type strings
		List<String> result = new ArrayList<String>();
		// loop n times
		for(int i = 1; i <= n; i++) {
			// if i is easily divisble by 3 and 5 (i.e. i has 3 and 5 as factors)
			if(i % 3 == 0 && i % 5 == 0) {
				result.add("FizzBuzz");
			} else if(i % 3 == 0) {
				result.add("Fizz");
			} else if(i % 5 == 0) {
				result.add("Buzz");
			} else {
				result.add(Integer.toString(i));
			}
		}
		
		return result;
	}
}
class Solution {
	public boolean backspaceCompare(String s, String T) {
		Stack<Character> sStack = new Stack<Character>();
		for(char c: S.toCharArray()) {
			if(c != '#') {
				sStack.push(c);
			} else if(!sStack.isEmpty()) {
				sStack.pop();
			}
		}
		
		Stack<Character> tStack = new Stack<Character>();
		for(char c: S.toCharArray()) {
			if(c != '#') {
				tStack.push(c); 
			} else if(!tStack.isEmpty()) {
				tStack.pop();
			}
		}
		
		while(!sStack.isEmpty()) {
			char current = sStack.pop();
			if(tStack.isEmpty() || tStack.pop() != current) {
				return false;
			}
		}
	}
}

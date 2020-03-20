package dungeonMaster;

public class Move extends DungeonMaster{
	
	//initializes all the strings and ints
	public String name;
	public int R;
	public int C;
	
	//the player map 2d array, allows the player to move around
//	public int [][] playerMap = 	{{0, 0, 0, 0, 0},
//									{0, 0, 0, 0, 0},
//									{0, 0, 1, 0, 0},
//									{0, 0, 0, 0, 0},
//									{0, 0, 0, 0, 0}};
	
	public String [][] playerMap = 	{{"O", "O", "D", "O", "O"},
									{"O", "M", "O", "F", "O"},
									{"H", "O", "P", "O", "H"},
									{"O", "A", "O", "G", "O"},
									{"R", "O", "H", "O", "O"}};
	
	//creates a basic move method, allows the program to call move methods
	public Move (String name) {
		this.name = name;
	}
	
	public void printMap () {
		//prints out the 2d array
				System.out.println("---------------------------------------------");
				for (int a = 0; a < playerMap.length; a++) {
					for (int b = 0; b < playerMap[0].length; b++) {
					System.out.print(playerMap[a][b] + "\t");	
					}
					System.out.println();
				}	
				System.out.println("---------------------------------------------");
	}
	//north method, used to move the player 1 up, and then print out the 2d array
	public void North () {		
		int y= 0;
		int x = 0;
		
		//checks for the place where the 1 is, then initializes y and x
		for (int row = 0; row < playerMap.length; row++) {
			for (int col = 0; col < playerMap[0].length; col++) {
				if (playerMap[row][col] == "P") {
					y = row;
					x = col;						
				}
			}
		}
		
		playerMap[y-1][x] = "P";		
		playerMap[y][x] = "O";
		
		if (y == 1)
		{
			if (x == 1)
			{
				playerMap[y][x] = "M";
			}
		}	
		
		if (y == 1)
		{
			if (x == 3)
			{
				playerMap[y][x] = "F";
			}
		}
		
		if (y == 3)
		{
			if (x == 1)
			{
				playerMap[y][x] = "A";
			}
		}
		
		if (y == 3)
		{
			if (x == 3)
			{
				playerMap[y][x] = "G";
			}
		}
		
		if (y == 4)
		{
			if (x == 0)
			{
				playerMap[y][x] = "R";
			}
		}
		
		if (y == 2)
		{
			if (x == 0)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 0)
		{
			if (x == 2)
			{
				playerMap[y][x] = "D";
			}
		}
		
		//sends these variables to the main to check for possible rooms
		R = (y-1);
		C = (x);
		
		//prints out the 2d array
		System.out.println("---------------------------------------------");
		for (int a = 0; a < playerMap.length; a++) {
			for (int b = 0; b < playerMap[0].length; b++) {
			System.out.print(playerMap[a][b] + "\t");	
			}
			System.out.println();
		}	
		System.out.println("---------------------------------------------");	
	}
	
	//south method, used to move the player 1 down, and then print out the 2d array
	public void South () {		
		int y= 0;
		int x = 0;
		//checks for the place where the 1 is, then initializes y and x
		for (int row = 0; row < playerMap.length; row++) {
			for (int col = 0; col < playerMap[0].length; col++) {
				if (playerMap[row][col] == "P") {
					y = row;
					x = col;						
				}
			}
		}
		playerMap[y+1][x] = "P";
		playerMap[y][x] = "O";
		
		if (y == 1)
		{
			if (x == 1)
			{
				playerMap[y][x] = "M";
			}
		}	
		
		if (y == 1)
		{
			if (x == 3)
			{
				playerMap[y][x] = "F";
			}
		}
		
		if (y == 3)
		{
			if (x == 1)
			{
				playerMap[y][x] = "A";
			}
		}
		
		if (y == 3)
		{
			if (x == 3)
			{
				playerMap[y][x] = "G";
			}
		}	
		
		if (y == 4)
		{
			if (x == 0)
			{
				playerMap[y][x] = "R";
			}
		}
		
		if (y == 2)
		{
			if (x == 0)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 0)
		{
			if (x == 2)
			{
				playerMap[y][x] = "D";
			}
		}
		
		//sends these variables to the main to check for possible rooms
		R = (y+1);
		C = (x);
		
		//prints out the 2d array
		System.out.println("---------------------------------------------");
		for (int a = 0; a < playerMap.length; a++) {
			for (int b = 0; b < playerMap[0].length; b++) {
			System.out.print(playerMap[a][b] + "\t");	
			}
			System.out.println();
		}	
		System.out.println("---------------------------------------------");
	}
	
	//west method, used to move the player 1 left, and then print out the 2d array
	public void West () {		
		int y= 0;
		int x = 0;
		
		//checks for the place where the 1 is, then initializes y and x
		for (int row = 0; row < playerMap.length; row++) {
			for (int col = 0; col < playerMap[0].length; col++) {
				if (playerMap[row][col] == "P") {
					y = row;
					x = col;						
				}
			}
		}
		playerMap[y][x-1] = "P";
		playerMap[y][x] = "O";
		
		if (y == 1)
		{
			if (x == 1)
			{
				playerMap[y][x] = "M";
			}
		}	
		
		if (y == 1)
		{
			if (x == 3)
			{
				playerMap[y][x] = "F";
			}
		}
		
		if (y == 3)
		{
			if (x == 1)
			{
				playerMap[y][x] = "A";
			}
		}
		
		if (y == 3)
		{
			if (x == 3)
			{
				playerMap[y][x] = "G";
			}
		}
		
		if (y == 4)
		{
			if (x == 0)
			{
				playerMap[y][x] = "R";
			}
		}
		
		if (y == 2)
		{
			if (x == 0)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 0)
		{
			if (x == 2)
			{
				playerMap[y][x] = "D";
			}
		}
		
		//sends these variables to the main to check for possible rooms
		R = (y);
		C = (x-1);
		
		//prints out the 2d array
		System.out.println("---------------------------------------------");
		for (int a = 0; a < playerMap.length; a++) {
			for (int b = 0; b < playerMap[0].length; b++) {
			System.out.print(playerMap[a][b] + "\t");	
			}
			System.out.println();
		}	
		System.out.println("---------------------------------------------");		
	}
	
	//east method, used to move the player 1 right, and then print out the 2d array
	public void East () {		
		int y= 0;
		int x = 0;
		
		//checks for the place where the 1 is, then initializes y and x
		for (int row = 0; row < playerMap.length; row++) {
			for (int col = 0; col < playerMap[0].length; col++) {
				if (playerMap[row][col] == "P") {
					y = row;
					x = col;						
				}
			}
		}
		playerMap[y][x+1] = "P";
		playerMap[y][x] = "O";
		
		if (y == 1)
		{
			if (x == 1)
			{
				playerMap[y][x] = "M";
			}
		}	
		
		if (y == 1)
		{
			if (x == 3)
			{
				playerMap[y][x] = "F";
			}
		}
		
		if (y == 3)
		{
			if (x == 1)
			{
				playerMap[y][x] = "A";
			}
		}
		
		if (y == 3)
		{
			if (x == 3)
			{
				playerMap[y][x] = "G";
			}
		}
		
		if (y == 4)
		{
			if (x == 0)
			{
				playerMap[y][x] = "R";
			}
		}	
		
		if (y == 2)
		{
			if (x == 0)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 4)
		{
			if (x == 2)
			{
				playerMap[y][x] = "H";
			}
		}
		
		if (y == 0)
		{
			if (x == 2)
			{
				playerMap[y][x] = "D";
			}
		}
		
		//sends these variables to the main to check for possible rooms
		R = (y);
		C = (x+1);
		
		//prints out the 2d array
		System.out.println("---------------------------------------------");
		for (int a = 0; a < playerMap.length; a++) {
			for (int b = 0; b < playerMap[0].length; b++) {
			System.out.print(playerMap[a][b] + "\t");	
			}
			System.out.println();
		}	
		System.out.println("---------------------------------------------");
	}
	
	//following two methods return the x, and y values of the 2d array element 1, to the main class
	//to check for possible rooms
	
	public int getR () {
		return R;	
	}
	public int getC () {
		return C;	
	}

}

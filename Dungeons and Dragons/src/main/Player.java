package main;

public class Player {
	
	private static int choice;
	private static int xp;
	
	public Player(int choice, int xp) {
		this.choice = choice;
		this.xp = xp;
	}
	
	public void setChoice (int c) {
		this.choice = c;
	}
	
	public void addxp (int xp) {
		this.xp += xp;
	}
	
	public int getxp () {
		return this.xp;
	}
	
	public static void attack(int choice) {
		if (choice == 1) {
			System.out.println("▬▬ι═══════>");
			System.out.println("You kill the beast with your sword.");
		} else if (choice == 2) {
			System.out.println("»»---------------►");
			System.out.println("You kill the beast with your bow.");
		} else if (choice == 3) {
			System.out.println("━☆ﾟ.*･｡ﾟ");
			System.out.println("You kill the beast with your staff.");
		}
	}

}

package dungeonMaster;

public class HealthWarrior extends DungeonMaster {
	
	//creates the variables and strings
	public String name;
	public double Health;
	public double checkLife;
	
	
	//creates a healthwarrior object so its methods can be called
	public HealthWarrior (String name) {
		this.name = name;
		Health = 175;
	}
	
	//returns the health of the player, easy stuff
	public double getHealth () {
		return Health;
	}
	
	//method to set health
	public void setHealth (double x) {
		Health = x;
	}
	
	//the following two methods just add or decrease the health of the player
	
	public double minusHealth (double x) {
		Health = Health - x;
		return Health;
	}
	
	public double plusHealth (double x) {
		Health = Health + x;
		return Health;
	}
	
	//prints out the health of the player and casts it as an integer
	public void playerStats () {
		System.out.println("---------------------------------------------");
		System.out.println("Player");
		System.out.println("Health: " + (int) Health);
		System.out.println("---------------------------------------------");
	}

}

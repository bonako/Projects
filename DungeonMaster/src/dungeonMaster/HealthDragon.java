package dungeonMaster;

public class HealthDragon extends DungeonMaster {
	
	//creates all the variables and strings
	public String name;
	public double dragonHealth;
	
	//creates a health dragon object
	public HealthDragon (String name) {
		this.name = name;
		
		//sets the dragons health to 550
		dragonHealth = 550;
	}
	
	//method to set health
	public void setHealth (double x) {
		dragonHealth = x;
	}
	
	//method to get dragon health
	public double getDragonHealth () {
		return dragonHealth;
	}
	
	//the following two methods just add or decrease the dragons health
	
	public double minusDragonHealth (double x) {
		dragonHealth = dragonHealth - x;
		return dragonHealth;
	}
	
	public double plusHealth (double x) {
		dragonHealth = dragonHealth + x;
		return dragonHealth;
	}
	
	
	//prints out the dragons health and casts it as an integer
	public void dragonStats () {
		System.out.println("Dragon");
		System.out.println("Health: " + (int) dragonHealth);
		System.out.println("---------------------------------------------");
		System.out.println("");
		System.out.println("");
	}

}

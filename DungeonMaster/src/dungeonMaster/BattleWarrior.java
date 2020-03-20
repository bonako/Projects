package dungeonMaster;

public class BattleWarrior implements InterfaceWarrior{
	
	//initializes all the variables and strings
	public String name;
	public double whirlWind;
	public double doomHammer;
	public double cobraStrike;
	
	//creates the room object to all its methods
	Rooms dude = new Rooms("hehe ");
	
	//creates battle warrior object for using its methods
	public BattleWarrior (String name) {
		this.name = name;		
		
		//using a complicated algorithm, generates the strength of each skill based on the players stats
		//which he got by getting items from the island
		whirlWind = (8*dude.getAttack());
		doomHammer = (10*dude.getAttack());
		cobraStrike = (6*dude.getAttack());
		//make random numbers to attack
	}

	//the following three methods just return the values of its variables
	
	public double whirlWind() {
		return whirlWind;
	}

	public double doomHammer() {
		return doomHammer;
	}
	
	public double cobraStrike() {
		return cobraStrike;
	}

}

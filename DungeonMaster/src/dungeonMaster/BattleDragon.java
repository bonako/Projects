package dungeonMaster;

public class BattleDragon implements InterfaceDragon{
	
	//creates all the variables and strings
	public String name;
	public double fireBreath;
	public double boneCrush;
	public double wingSmash;
	
	Rooms dude = new Rooms ("yaya");
	
	//creates a battledragon object
	public BattleDragon (String name) { 
		this.name = name;
		
		//initializes the abilities of the dragon by getting the stats of the player
		//using a complicated algorithm
		fireBreath = ((((dude.getDefence() + dude.getfireRes()+3)/2.578)/20)*22)+10;
		boneCrush = (80/(dude.getDefence() + dude.getfireRes()) + 25);
		wingSmash = 50;
	}
	
	
	//the following three methods just return the value of each variable
	
	public double fireBreath () {
		return fireBreath;
	}

	public double boneCrush() {
		return boneCrush;
	}

	public double wingSmash() {
		return wingSmash;
	}

}

package dungeonMaster;

import java.util.*;

public class Fight {
	
	//initializes the main arraylist, and the main objects needed to use their methods
	List fCommands = new ArrayList();	
	BattleWarrior dude = new BattleWarrior("eheh");
	BattleDragon drag = new BattleDragon("ha");
	HealthDragon dragon = new HealthDragon("alduin");
	HealthWarrior player = new HealthWarrior("hehe");
	Rooms boo = new Rooms("yaya");	
	double dragonHealth = 0;
	double playerHealth = 0;
	Score play = new Score("hehe");
	
	//creates a blank fight method, used to just create a fight object, nothing fancy
	public Fight () {
		
	}
	
	//whole fight sequence code
	public void fightScene () {
		
		int attack = boo.getAttack();
		int defence = boo.getDefence();
		int fireRes = boo.getfireRes();
		
		//send all the stats to the statisitcs class to improve specialities and dmg bonuses
		Statistics guy = new Statistics("stats", attack, fireRes, defence);
		
		Scanner input = new Scanner(System.in);
		Score score = new Score("hehe");
		
		//creates the fight commands arraylist
		fCommands.add("ww/whirlWind");
		fCommands.add("dh/doomHammer");
		fCommands.add("cs/cobraStrike");
		
		//prints the fight commands arraylist to the player
		System.out.println("------------------------------------------------------------------------------------------");
		System.out.println(fCommands);
		System.out.println("------------------------------------------------------------------------------------------");
		
		
		//this is the whole fight sequence, it is in a while true == true loop because then it allows the 
		//code inside the loop to be repeated
		//initializes different objects and sets their health
		while (true == true)
		{
			int rdm = 0;
			rdm = (int) (Math.random() * (20 + 1));
			dragonHealth = dragon.getDragonHealth();
			playerHealth = player.getHealth();
			
			if ((dragonHealth > 0) & (playerHealth > 0))
			{
				player.playerStats();
				dragon.dragonStats();
			}
			
			//code if you kill the dragon
			if (dragonHealth <= 0) 
			{
				System.out.println("You killed the hidden beast, the demon, the Dragon!");
				System.out.println("You have attained the highest honor and title for this game.");
				System.out.println("-----------------------------------------------------------------------------------------------------");
				System.out.println(				
						"________                                                _____                   __                "
					+ "\n\\______ \\  __ __  ____    ____   ____  ____   ____     /     \\ _____    _______/  |_  ___________ "
					+ "\n |    |  \\|  |  \\/    \\  / ___\\_/ __ \\/  _ \\ /    \\   /  \\ /  \\\\__  \\  /  ___/\\   __\\/ __ \\_  __ \\"
					+ "\n |    `   \\  |  /   |  \\/ /_/  >  ___(  <_> )   |  \\ /    Y    \\/ __ \\_\\___ \\  |  | \\  ___/|  | \\/"
					+ "\n/_______  /____/|___|  /\\___  / \\___  >____/|___|  / \\____|__  (____  /____  > |__|  \\___  >__|   "
					+ "\n        \\/           \\//_____/      \\/           \\/          \\/     \\/     \\/            \\/       ");
				System.out.println("-----------------------------------------------------------------------------------------------------");
				System.out.println("You win!");
				score.addScore(500);	
				
				//sending info back to the main class DungeonMaster, that the dragon is dead
				System.out.println("---------------------------------------------");
				System.out.println("Final Score: " + play.getScore());
				System.out.println("---------------------------------------------");
				System.out.println("Game over. Thanks for playing!");
				System.exit(0);
			}
			
			//code if you die
			else if (playerHealth <= 0) 
			{
				System.out.println("Like the rest of those who tried to kill the hidden Dragon, death overtakes you.");
				System.out.println("Game over.");
				
				//sending info back to the main class to see if your alive or not		
				System.out.println("---------------------------------------------");
				System.out.println("Final Score: " + play.getScore());
				System.out.println("---------------------------------------------");
				System.out.println("Game over. Thanks for playing!");
				System.exit(0);
			}
			
			System.out.print("> ");
			String attmove = input.nextLine();
			
			//complete switch statement to allow the user to input the type of attack move
			switch (attmove)
			{
			case "ww":
			case "whirlWind":
			case "whirl wind":
			case "Whirl Wind":
								//sets the dragons health
								//sets the players health
								dragonHealth = dragonHealth - dude.whirlWind();
								playerHealth = playerHealth - drag.fireBreath();
								//10% chance for the dragon to hit a 75
								if (rdm == 18||rdm == 20)
								{
									playerHealth = playerHealth - (drag.boneCrush);
									System.out.println("The Dragon crushes your bones. -15% health");
								}
								
								//5% chance for the dragon to hit a complete 150 hit, knock out, game over
								if (rdm == 19) 
								{
									playerHealth = playerHealth - (drag.wingSmash);
									System.out.println("Wing Smash! -50 health.");
								}
								
								//25% chance for the you to hit 50% bonus damage, crit hit
								if (rdm == 4||rdm == 5||rdm == 6||rdm == 9) 
								{
									dragonHealth = dragonHealth - (dude.whirlWind()*5);
									System.out.println("Critical Hit! +100% damage");
								}
								
								//25% chance for you to gain 50 health
								if (rdm == 10||rdm == 9)
								{
									playerHealth = (playerHealth + 60);
									System.out.println("+50 Health bonus!");
								}
								break;
			case "dh":
			case "doomHammer":
			case "doom hammer":
			case "Doom Hammer":
								//sets the dragons health
								//sets the players health
								dragonHealth = dragonHealth - dude.doomHammer();
								playerHealth = playerHealth - drag.fireBreath();
								//10% chance for the dragon to hit a 75
								if (rdm == 18||rdm == 20)
								{
									playerHealth = playerHealth - (drag.boneCrush);
									System.out.println("The Dragon crushes your bones. -15% health");
								}
								
								//5% chance for the dragon to hit a complete 150 hit, knock out, game over
								if (rdm == 19) 
								{
									playerHealth = playerHealth - (drag.wingSmash);
									System.out.println("Wing Smash! -50 health.");
								}
								
								//10% chance for the you to hit 50% bonus damage, crit. hit
								if (rdm == 4||rdm == 5) 
								{
									dragonHealth = dragonHealth - (dude.doomHammer()*3);
									System.out.println("Critical Hit! +100% damage");
								}
								
								//25% chance for you to gain 50 health
								if (rdm == 10)
								{
									playerHealth = (playerHealth + 60);
									System.out.println("+50 Health bonus!");
								}
								break;
			case "cs":
			case "cobraStrike":
			case "cobra strike":
			case "Cobra Strike":
								//sets the dragons health
								//sets the players health
								dragonHealth = dragonHealth - dude.cobraStrike();
								playerHealth = playerHealth - drag.fireBreath();
								//10% chance for the dragon to hit a 75
								if (rdm == 18 || rdm == 20)
								{
									playerHealth = playerHealth - (drag.boneCrush);
									System.out.println("The Dragon crushes your bones. -15% health");
								}
								
								//5% chance for the dragon to hit a complete 150 hit, knock out, game over
								if (rdm == 19) 
								{
									playerHealth = playerHealth - (drag.wingSmash);
									System.out.println("Wing Smash! -50 health.");
								}
								
								//20% chance for the you to hit 50% bonus damage, crit hit
								if (rdm == 4||rdm == 5||rdm == 6) 
								{
									dragonHealth = dragonHealth - (dude.cobraStrike()*6);
									System.out.println("Critical Hit! +100% damage");
								}
								
								//25% chance for you to gain 50 health
								if (rdm == 10||rdm == 9||rdm == 8||rdm == 7)
								{
									playerHealth = (playerHealth + 60);
									System.out.println("+50 Health bonus!");
								}
								break;	
			default:
					//checks for possible invalid move
					System.out.println("That's not an attack you can do.");
					break;
			}
			
			dragon.setHealth(dragonHealth);
			player.setHealth(playerHealth);
		
		}
		
		
	}
	
	//methods that return the state of dragon and player to the main
	public double dragonHealth () {
		dragonHealth = dragon.getDragonHealth();
		return dragonHealth;
	}
	
	public double playerHealth () {
		playerHealth = player.getHealth();
		return playerHealth;
	}

}

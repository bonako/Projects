package dungeonMaster;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Rooms extends DungeonMaster {
	

	
	String name;	
	List inventory = new ArrayList();
	List mithrilmine = new ArrayList();
	List darkfarms = new ArrayList();
	List adamantinekeep = new ArrayList();
	List guildofscrolls = new ArrayList();
	int attack = 3;
	int defence = 3;
	int fireRes = 1;
	double dh = 0;
	double ph = 0;
	List commands = new ArrayList();
	List droproom = new ArrayList();
	Scanner loot = new Scanner(System.in);
	String take;	
	String takefarms;
	String takekeep;
	String takeguild;
	String retake;	
	
	//Creates object of the Move class to call Move methods
	Move warrior = new Move("warrior");	
	
	public Rooms (String name) { 
		this.name = name;
	}
	
	public void Commands () {
		commands.add("light");
		commands.add("n/north");
		commands.add("s/south");
		commands.add("e/east");
		commands.add("w/west");
		commands.add("exit/leave");
		commands.add("take/drop");
		commands.add("i/inv");	
		commands.add("stats");
		commands.add("read/story");
		commands.add("dragon");
		commands.add("map/print map");
		commands.add("sources");
		commands.add("how to play");
		commands.add("/help");
	}
	
	public void printCommands () {
		System.out.println("--------------------------------------------------------------------------------------------"
				+ "-------------------------------------------------");
		System.out.println(commands);
		System.out.println("--------------------------------------------------------------------------------------------"
				+ "-------------------------------------------------");	
	}
	
	public int getAttack () {
		return attack;
	}
	
	public int getfireRes () {
		return fireRes;
	}
	
	public int getDefence () {
		return defence;
	}
	
	public void howtoplay () {
		System.out.println("---------------------------------------------");
		System.out.println(
				  "\nHow to play."
				+ "\n"
				+ "\nTo take an item simply type in \"take\" and then the"
				+ "\nname of the item as it appears on the screen."
				+ "\n"
				+ "\nTo return to the forest or exit the room, simply"
				+ "\ntype in \"exit\" or \"leave\""
				+ "\n"
				+ "\nTo view your stats (att, defence, fire resistance)"
				+ "\nsimply type in \"stats\""
				+ "\n"
				+ "\nTo access your inventory type in \"i\""
				+ "\n"
				+ "\nYour job is to slay and kill the beast"
				+ "\nlurking in the sewers");
		System.out.println("---------------------------------------------");
						  
	}
	
	public void printIntro () {		
		Random r = new Random();	
		String pass = "";
		String pass2 = "";
	    String alphabet = "0123456789";
	    for (int i = 0; i < 3; i++) {
	    	 char c = alphabet.charAt(r.nextInt(alphabet.length()));
	    	 char d = alphabet.charAt(r.nextInt(alphabet.length()));
	    	 pass += c + "";
	    	 pass2 += d + "";
	    }	    
		System.out.println("DUNGEON MASTER: The Great Dragon Lair");
		System.out.println("Copyright (c) 2014 Little Billy Entertainment, Inc. All rights reserved.");
		System.out.println("Parent Company of [Berkshire Hathaway and Exxon Mobil] L.B. Ventures.");
		System.out.println("DUNGEON MASTER is a registered trademark of Little Billy Entertainment, Inc.");
		System.out.println("Version 1.0 / Game key " + pass + "-" + pass2);
		System.out.println("-----------------------------------------------------------------------------------------------------");
		System.out.println(				
				"________                                                _____                   __                "
			+ "\n\\______ \\  __ __  ____    ____   ____  ____   ____     /     \\ _____    _______/  |_  ___________ "
			+ "\n |    |  \\|  |  \\/    \\  / ___\\_/ __ \\/  _ \\ /    \\   /  \\ /  \\\\__  \\  /  ___/\\   __\\/ __ \\_  __ \\"
			+ "\n |    `   \\  |  /   |  \\/ /_/  >  ___(  <_> )   |  \\ /    Y    \\/ __ \\_\\___ \\  |  | \\  ___/|  | \\/"
			+ "\n/_______  /____/|___|  /\\___  / \\___  >____/|___|  / \\____|__  (____  /____  > |__|  \\___  >__|   "
			+ "\n        \\/           \\//_____/      \\/           \\/          \\/     \\/     \\/            \\/       ");
		System.out.println("-----------------------------------------------------------------------------------------------------");
	}
	
	public void readStory () {
		System.out.println(""
				+ "You are in the middle of a breath-taking forest. Far in the horizon is an active volcano,"
				+ "\nfrom which great gouts of molten lava come surging out, cascading back down into the "
				+ "\ndepths. The glowing rock fills the farthest reaches of the cavern with a blood-red glare,"
				+ "\ngiving everything an eerie, macabre appearance. The air is filled with flickering sparks"
				+ "\nof ash and a heavy smell of brimstone. The walls are hot to the touch, and the thundering"
				+ "\nof the volcano out all other sounds. Embedded in the jagged roof far overhead are myriad"
				+ "\ntwisted formations composed of pure white alabaster, which scatter the murky light into"
				+ "\nsinister apparitions upon the walls. To one side is a deep gorge, filled with bizarre"
				+ "\nchaos of tortured rock. An immense river of fire cashes out from the depths of the volcano"
				+ "\nburns its way through the gorge, and plummets into a bottomless pit far off to your"
				+ "\nright. To the left, an immense beast caged in blistering steam erupts continously from its"
				+ "\nmouth into the center of a sulfurous lake. The south-west is an ancient palace. To the south-east"
				+ "\nis a huge monument with glistening scrolls. The north-west houses a monumentous mine. A "
				+ "\ndark, forboding passage exits to the north-east. Slay and kill the beast lurking in the "
				+ "\nsewers. "
				+ "\n"
				+ "\nExplore the island and find some armour and weapons to slay the hidden Dragon."
				+ "\nType \"/help\" anytime for possible commands.");		
	}
	
	public void initializeLists () {		
			//creates an arraylist for each room containing the items for that room	
			//arraylist is used so that the player can add and remove elements as needed
			mithrilmine.add("cloth armour");
			mithrilmine.add("mithril axe");
					
			darkfarms.add("iron sword");
			darkfarms.add("Zamorak ice whip");
					
			adamantinekeep.add("sewer key");
			adamantinekeep.add("Zamorak kiteshield");
			adamantinekeep.add("poison cheese");
			adamantinekeep.add("bucket of water");
					
			guildofscrolls.add("anti-fire cape");
			guildofscrolls.add("chest key");
	}
	
	public void printInv () {
		System.out.println("---------------------------------------------");
		System.out.println(inventory);
		System.out.println("---------------------------------------------");
	}
	
	public void doDrop () {
		for (int q = 0; q <1; q++ ) {
		System.out.println("---------------------------------------------");
		System.out.println("Drop what?");
		System.out.print("> ");
		String drop = loot.nextLine();
		
		if (drop.equalsIgnoreCase("cancel")) {
			System.out.println("drop cancelled.");
			break;
		}
		
		if (!mithrilmine.contains(drop)& !darkfarms.contains(drop) & !adamantinekeep.contains(drop) &
				!guildofscrolls.contains(drop) & !inventory.contains(drop)) {
			
			System.out.println(drop + " does not exist, maybe in real-life.");
		
		}
		else {
			for (int i = 0; i < inventory.size(); i++) {
				inventory.remove(drop);
				droproom.add(drop);
			}			
			System.out.println(drop + " dropped");	
			
			if (!drop.equalsIgnoreCase("torch")) {
				System.out.println("You can find your items in the drop room.");	
			}
			
			switch(drop) {
			case "cloth armour":
				defence = defence - 2;
				break;
			case "mithril axe":
				attack = attack - 3;
				break;
			case "zamorak ice whip":
			case "Zamorak ice whip":
				attack = attack - 10;
				break;
			case "iron sword":
				attack = attack - 5;
				break;
			case "Zamorak kiteshield":
			case "zamorak kiteshield":
				defence = defence - 10;
				break;
			case "anti-fire cape":
				defence = defence - 10;
				fireRes = fireRes - 10;
				break;
			}
		}		
		
		if (!inventory.contains("torch")) {
			System.out.println("You can no longer see. The darkness rages in.");	
			System.out.println("The hidden beast, no longer scared by your light, cuts your jugular vein.");
			System.out.println("Game over.");
		}
		}
		
	}
	
	public List getInv () {
		return inventory;
	}
	
	public void Intro () {
		//introduction
				String torch = "";	
				
				do {
				Scanner light = new Scanner(System.in);
				System.out.println("It is pitch black. You are likely to be eaten by the hidden basilisk.");
				System.out.println("You need to light the torch.");
				System.out.print("> ");	
				torch = light.nextLine();
				
				if (torch.equals("/help")) {
					System.out.println("--------------------------------------------------------------------------------------------"
							+ "----------------------------");
					System.out.println(commands);
					System.out.println("--------------------------------------------------------------------------------------------"
							+ "----------------------------");	
				}
				
				if ((torch.equalsIgnoreCase("light torch")||torch.equalsIgnoreCase("light")||torch.equalsIgnoreCase("light torch")||
						torch.equalsIgnoreCase("turn on torch")))
						{
							inventory.add("torch");
							break;
						}

				else if (!torch.equals("/help"))
				{
					System.out.println("Type /help for possible commands.");
				}
					
				}while(true);	
	}
	
	public void dropRoom (int check) {
		if (check == 110) { //check if drop room is on
			System.out.println("You can find your dropped items here.");	
		
			while(droproom.size() != 0) {	//start while loop
				
				System.out.println("This room contains" + droproom);
				System.out.println("Enter item to take.");
				System.out.print("> ");
				
				retake = loot.nextLine();
				if (retake.equalsIgnoreCase("exit")) {
					System.out.println("You leave.");
					break;
				}//end of exit loop
				
				if (!mithrilmine.contains(retake)& !darkfarms.contains(retake) & !adamantinekeep.contains(retake) &
						!guildofscrolls.contains(retake)) {
					for (int i = 0; i < droproom.size(); i ++) {
						if (droproom.contains(retake))
								{
							droproom.remove(retake);
							inventory.add(retake);
							System.out.println("retook " + retake);
								}
						else
						{
							System.out.println("INVALID ITEM");
						}
												
					}
				}	
				else {
					System.out.println("That item does not exist.");
				}				
			}//end of while loop
		}//end of if statement for drop room
	}
	
	public void MithrilMine (int check) {
		if (check == 30) { //check if mithril mine is on
			for (int i = 0; i < inventory.size(); i++) {	//check if inv. contains torch
				if (inventory.contains("torch")) {					
				}			
				else {
					System.out.println("You need a torch to enter.");
					break;
				}
			}
			//introduction to the Mithril Mine room
			System.out.println("You enter the Mithril Mine, a humid climate.");
			
			while(mithrilmine.size() != 0) {	//start while loop				
			
				System.out.println("This room contains" + mithrilmine);
				System.out.print("> ");											
				
				take = loot.nextLine();
				if (take.equalsIgnoreCase("take cloth armour")) {					
					inventory.add("cloth armour");
					mithrilmine.remove("cloth armour");
					System.out.println("took cloth armour [weak against fire, light, +2 defence]");		
					defence = defence + 2;
				}//end of take cloth armour						
				if (take.equalsIgnoreCase("take mithril axe")) {
					inventory.add("mithril axe");
					mithrilmine.remove("mithril axe");
					System.out.println("took mithril axe [+3 attack]");	
					attack = attack + 3;
				}//end of take mithril axe	
				if (((take.equalsIgnoreCase("exit"))) || ((take.equalsIgnoreCase("leave")))) {
					System.out.println("You leave.");
					break;
				}//end of exit loop
			}//end of while loop
		}//end of if statement for mithril mine		
	}
	
	public void DarkFarms (int check) {		
		//checking whether the player is entering the dark farms with or without a torch
		if (check == 40) {
			for (int i = 0; i < inventory.size(); i++) {	
				if (inventory.contains("torch")) {				
				}
				else {
					System.out.println("You need a torch to enter.");
				}
			}
			//introduction to the dark farms room
			System.out.println("You enter the Dark Farms. It is dark, but your lantern allows you to see.");
			
			while(darkfarms.size() != 0) {	//start while loop
				
				System.out.println("This room contains" + darkfarms);
				System.out.print("> ");
				
				takefarms = loot.nextLine();
				if (takefarms.equalsIgnoreCase("take Zamorak Ice Whip")) {
					inventory.add("zamorak ice whip");
					darkfarms.remove("Zamorak ice whip");
					System.out.println("took Zamorak Ice Whip [very strong, light, +10 attack]");
					attack = attack + 10;
				}//end of take zamorak ice whip
				if (takefarms.equalsIgnoreCase("take iron sword")) {
					inventory.add("iron sword");
					darkfarms.remove("iron sword");
					System.out.println("took iron sword [medium strength, heavy, +5 attack]");
					attack = attack + 5;
				}//end of take iron sword	
				if (((takefarms.equalsIgnoreCase("exit"))) || ((takefarms.equalsIgnoreCase("leave")))) {
					System.out.println("You leave.");
					break;
				}//end of exit loop
			}//end of while loop
		}//end of if statement for dark farms
		
	}
	
	public void AdamantineKeep (int check) {
		//checking whether the player is entering the adamantine keep with or without a torch
				if (check == 70) {				
					//introduction to the adamantine keep room
					System.out.println("You enter the Adamantine Keep. An old palace with reflective marble pillars and floors.");
					
					while(adamantinekeep.size() != 0) {	//start while loop
						
						System.out.println("This room contains" + adamantinekeep);
						System.out.print("> ");
						
						takekeep = loot.nextLine();
						if (takekeep.equalsIgnoreCase("take sewer key")) {
							inventory.add("sewer key");
							adamantinekeep.remove("sewer key");
							System.out.println("took sewer key [will be useful in opening the Dragon's Gate]");
						}//end of take sewer key
						if (takekeep.equalsIgnoreCase("take zamorak kiteshield")) {
							inventory.add("Zamorak kiteshield");
							adamantinekeep.remove("Zamorak kiteshield");
							System.out.println("took Zamorak kiteshield [very high strength, heavy, +10 defence]");
							defence = defence + 10;
						}//end of zamorak kiteshield	
						if (takekeep.equalsIgnoreCase("take poison cheese")) {
							inventory.add("poison cheese");
							adamantinekeep.remove("poison cheese");
							System.out.println("took poison cheese [looks tasty, but contains poison]");
						}//end of poison cheese
						if (takekeep.equalsIgnoreCase("take bucket of water")) {
							inventory.add("bucket of water");
							adamantinekeep.remove("bucket of water");
							System.out.println("took bucket of water [will be useful for putting out small fires]");
						}//end of bucket of water
						if (((takekeep.equalsIgnoreCase("exit"))) || ((takekeep.equalsIgnoreCase("leave")))) {
							System.out.println("You leave.");
							break;
						}//end of exit loop
					}//end of while loop
				}//end of if statement for adamantine keep				
	}
	
	public void GuildOfScrolls (int check) {
		//checking whether the player is entering the GuildOfScrolls with or without a torch
		if (check == 80) {				
			//introduction to the GuildOfScrolls room
			System.out.println("You enter the Guild Of Scrolls. An emerald room with ancient scrolls hanging on the walls.");
			System.out.println("You see a nice looking chest which you opened earlier.");
			
			while(guildofscrolls.size() != 0) {	//start while loop
				
				System.out.println("This room contains" + guildofscrolls);
				System.out.println("You see a nice looking cape inside a chest.");
				System.out.print("> ");
				
				takeguild = loot.nextLine();
				if (takeguild.equalsIgnoreCase("take anti-fire cape")) {
					if (inventory.contains("chest key")) {
					inventory.add("anti-fire cape");
					guildofscrolls.remove("anti-fire cape");
					System.out.println("took anti-fire cape [excellent against fire, +10 fire resistance, +10 defence]");
					defence = defence + 10;
					fireRes = fireRes + 10;
					}
					else {
						System.out.println("You need the key to unlock the chest");
					}
				}//end of take anti-fire cape
				if (takeguild.equalsIgnoreCase("take chest key")) {
					inventory.add("chest key");
					guildofscrolls.remove("chest key");
					System.out.println("took chest key [will be useful in opening the chest]");					
				}//end of chest key				
				if (((takeguild.equalsIgnoreCase("exit"))) || ((takeguild.equalsIgnoreCase("leave")))) {
					System.out.println("You leave.");
					break;
				}//end of exit loop
			}//end of while loop
		}//end of if statement for the guild				
	}
	
	String test = "";
	String test1 = "";
	String test2 = "";
	
	public void HiddenBeast (int check) {
		if (check == 50) {
			System.out.println(""
					+ "Three rows of teeth, each as sharp as a dagger, nose the size of a baked potato, dripping"
					+ "\nwith yellow streaked snot, feet like sprawling roots lashing around as the monster advances,"
					+ "\nroars like the sound of a thousand nightmarish ghouls, grins menacingly.");
			
			System.out.println("Kill? (yes or no)");
			System.out.print("> ");
			Scanner Jump = new Scanner (System.in);
			test = Jump.nextLine();
			
			if (test.equalsIgnoreCase("yes")||test.equalsIgnoreCase("kill"))
			{
				System.out.println("You faint just by the presence of the hidden basilisk.");
				System.out.println("Game over.");
			}	
			System.out.println("---------------------------------------------");
			
		}
	}
	
	
	
	public void lavaFalls (int check) {
		if (check == 60) {
			System.out.println(""
					+ "The Lava Falls. Largest fall of molten lava. Comprised of three great falls, the huge molten"
					+ "\nrock that points at the base invites you to jump.");		
			
			System.out.println("Jump? (yes or no)");
			System.out.print("> ");
			Scanner po = new Scanner (System.in);
			test1 = po.nextLine();
			
			if (test1.equalsIgnoreCase("yes")||test1.equalsIgnoreCase("jump"))
			{
				System.out.println("Your body burns by the heat of the lava.");
				System.out.println("Game over.");
			}		
			System.out.println("---------------------------------------------");
		}
	}
	
	public void bambooShaft (int check) {
		if (check == 100) {
			System.out.println(""
					+ "You see a nice looking bamboo shaft which you can ride away from the island of doom. Yay! You managed"
					+ "\nto unlock the secret of the island.");	
			
			System.out.println("Ride away? (yes or no)");
			System.out.print("> ");
			Scanner poop = new Scanner (System.in);
			test2 = poop.nextLine();
			
			if (test2.equalsIgnoreCase("yes")||test2.equalsIgnoreCase("ride"))
			{
				System.out.println("You ride away peacefully while the volanco erupts, deafening your ears.");
				System.out.println("Game over.");
			}			
			System.out.println("---------------------------------------------");
			
		}
	}	
	
	public String getString1 () {
		return test;
	}
	
	public String getString2 () {
		return test1;
	}
	
	public String getString3 () {
		return test2;
	}
	
	public void DragonsLair (int check) {		
		//checking if the player is on the dragon hole or not
		if (check == 20) {
					
					if (inventory.contains("sewer key")) {
							
							if (inventory.contains("mithril axe"))
							{
								System.out.println("------------------------------------------------------------------------------------------");
								System.out.println(
										 	"			      ______________"
										+ "\n                        ,===:'.,            `-._"
										+ "\n                             `:.`---.__         `-._"
										+ "\n                               `:.     `--.         `."
										+ "\n                                 \\.        `.         `."
										+ "\n                         (,,(,    \\.         `.   ____,-`.,"
										+ "\n                      (,'     `/   \\.   ,--.___`.'"
										+ "\n                  ,  ,'  ,--.  `,   \\.;'         `"
										+ "\n                   `{D, {    \\  :   \\;"
										+ "\n                     V,,'    /  /    //"
										+ "\n                     j;;    /  ,' ,-//.    ,---.      ,"
										+ "\n                     \\;'   /  ,' /  _  \\  /  _  \\   ,'/"
										+ "\n                           \\   `'  / \\  `'  / \\  `.' /"
										+ "\n                            `.___,'   `.__,'   `.__,'");

								System.out.println("------------------------------------------------------------------------------------------");
								System.out.println(""
								+ "The Dragon's Gate opens with a silent creak. Boiling steam screams its way through the"
								+ "\ncracked walls. You see a shadow move in the far end of the dungeon. A hidden beast"
								+ "\nlurking in the filth of the sewers. Your torch falls from your hand from the sweat of"
								+ "\nyour fear. All is quiet. Too quiet. It is pitch black, the darkness rages in. "
								+ "\nPress any key to continue.");
								
								Scanner yay = new Scanner(System.in);
								System.out.print("> ");
								String oi = yay.nextLine();
								
								System.out.println(""
								+ "THEN SUDDENLY, the Demon Dragon blows with full magnitude a breath of molten fire. The"
								+ "\nspeed and and power of the Dragon's breath lights up the cave-like sewers, and you "
								+ "\nmanage to see his thick, brutal, deadly, scaly skin. You are left with no choice but"
								+ "\nto fight him, and eliminate his hidden presence.");
								
								Fight dude = new Fight();
								dude.fightScene();									
								
								dh = dude.dragonHealth;
								ph = dude.playerHealth;
							}
							else {
								System.out.println("You need a mithril axe.");
							}
										
					}
					else {
						System.out.println("You need a key.");
					}
				
				
			
		}		
	}	
	
	public double getdh () {
		return dh;
	}
	
	public double getph () {
		return ph;
	}

}

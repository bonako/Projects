package dungeonMaster;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class DungeonMaster
{

	public static void main(String[] args)
	{
		
		//creates the dungeon map used for designating rooms and items in them
		//heavily used, core of the program, by all important classes
		int [][] dungeonMap = 			{{0, 0, 20, 0, 0},
										{0, 30, 0, 40, 0},
										{50, 0, 0, 0, 60},
										{0, 70, 0, 80, 0},
										{110, 0, 100, 0, 0}};		
		
		//the number grid reference
//		20, dragons lair
//		30, mithril mine
//		40, dark farms
//		50, hidden beast
//		60, lava falls
//		70, adamantine keep
//		80, guild of scrolls
//		110, drop room
//		100, bamboo shaft
		
		
		//start off by creating objects and calling the methods to introduce the game
		Rooms dude = new Rooms("intro");
		dude.Commands();
		dude.printCommands();
		dude.printIntro();
		dude.Intro();
		dude.initializeLists();	
		dude.readStory();
		
		//create a new inventory array lsit
		List items = new ArrayList();
		
		//Special method to increase the score by 2 as the user plays
		Score play = new Score("hehe");
		new Thread (new Score(null)).start();		
		
		//extremely important object to move the player
		Move guy = new Move("move");
		List inv = new ArrayList();
		inv = dude.getInv();	
		
		//creates a battle fight object to call the fight methods at dungeonMap[0][2]
		Fight battle = new Fight();
		
		//creates a warrior health and dragon health object to check if the warrior
		//is alive, or if the dragon is alive
		HealthDragon dragon = new HealthDragon("drag");
		HealthWarrior player = new HealthWarrior("play");
			
		//prints out the minimap index
		System.out.println("---------------------------------------------");
		System.out.println("Mini Map Legend");
		System.out.println("P = You");
		System.out.println("M = Mithril Mine");
		System.out.println("F = Dark Farms");
		System.out.println("A = Adamantine Keep");
		System.out.println("G = Guild of Scrolls");
		System.out.println("D = Dragon's Gate");
		System.out.println("R = Drop Room");
		System.out.println("H = Hidden Room");
		System.out.println("O = No Room");
		System.out.println("---------------------------------------------");
		
		//whole sequence of possible commands by the player in a beautiful switch
		while (true == true)
		{			
			System.out.println("You can go north, east, south, or west. Explore...");
			System.out.print("> ");
			
			Scanner direction = new Scanner(System.in);
			String command = direction.nextLine();			
			
			int x = 0;
			int y = 0;
			int check = 0;			
			
			try
			{
				
			//using a switch statement to detect possible player commands and then doing the required methods
			switch (command) 
			{
				case "n":
				case "north":
								guy.North();
								x = guy.getR();
								y = guy.getC();									
								break;
								
				case "s":				
				case "south":
								guy.South();
								x = guy.getR();
								y = guy.getC();
								break;
								
				case "w":				
				case "west":			
								guy.West();
								x = guy.getR();
								y = guy.getC();
								break;
				
				case "e":
				case "east":			
								guy.East();
								x = guy.getR();
								y = guy.getC();
								break;
				
				case "/help":
				case "commands":
								dude.printCommands();
								break;
									
				case "i":
				case "inv":
				case "inventory":	
					
								dude.printInv();
								break;
								
				case "drop":	
					
								dude.doDrop();													
								break;
							
				case "exit":
				case "leave":					
								System.out.println("You are not in a room.");
								break;
				
				case "q":
				case "quit":
								break;
								
				case "read":
				case "story":								
								dude.readStory();
								break;
								
				case "sources":					
								System.out.println("Description credit to Zork.");
								System.out.println("Dragon art by John Vander Zwaag.");
								break;
								
				case "dragon":
								System.out.println(""
										+ "The Dragon is a sinister, lurking presence in the dark places of the earth. Its favorite"
										+ "\ndiet is adventurers, but its insatiable appetite is tempered by its fear of light. No"
										+ "\nDragon has ever been seen by the light of day, and few have survived its fearsome jaws"
										+ "\nto tell the tale. The beast lurks in the upper regions of the land.");
								break;
				case "stats":
								int attack = dude.getAttack();
								int defence = dude.getDefence();
								int fireRes = dude.getfireRes();
								Statistics boyo = new Statistics("stats", attack, fireRes, defence);
								boyo.getStats();
								break;
								
				case "eat cheese":
				case "eat poison cheese":
								System.out.println("You eat the cheese, and the poison kills you.");
								break;
				case "map":				
								System.out.println("---------------------------------------------");
								System.out.println("Mini Map Legend");
								System.out.println("P = You");
								System.out.println("M = Mithril Mine");
								System.out.println("F = Dark Farms");
								System.out.println("A = Adamantine Keep");
								System.out.println("G = Guild of Scrolls");
								System.out.println("D = Dragon's Gate");
								System.out.println("R = Drop Room");
								System.out.println("H = Hidden Room");
								System.out.println("O = No Room");
								System.out.println("---------------------------------------------");
								break;								
				case "how to play":
				case "instructions":
								dude.howtoplay();
				case "light":
								System.out.println("The light is already lit.");
								break;
				case "print map":
								guy.printMap();
								break;
				default:							
							dude.printCommands();
			}
			
			//the following if else statements check whether their given values have been executed
			//if they have, then they end the while loop and end the game
			if (command.equalsIgnoreCase("q")||command.equalsIgnoreCase("quit"))
			{
				break;
			}
			if (!inv.contains("torch"))
			{
				break;
			}
			
			if (command.equalsIgnoreCase("quit")||command.equalsIgnoreCase("q"))
			{
				break;
			}
			
			if (command.equalsIgnoreCase("poo")) 
			{
				System.out.println("You unlocked the secret of the Dungeon Master.");
				System.out.println("You win!");
				break;
			}
			
			if ((command.equalsIgnoreCase("eat cheese"))||(command.equalsIgnoreCase("eat cheese")))
			{
				break;
			}
			
			else 
			{
				//these methods are all called to check if anyone of them is true
				//if it is true, then execute that method
				check = dungeonMap[x][y];
				dude.MithrilMine(check);
				dude.DarkFarms(check);	
				dude.AdamantineKeep(check);
				dude.GuildOfScrolls(check);
				dude.dropRoom(check);
				dude.HiddenBeast(check);
				dude.lavaFalls(check);
				dude.bambooShaft(check);
				dude.DragonsLair(check);				
				
			}
			
			//the following if else statements check whether their given values have been executed
			//if they have, then they end the while loop and end the game
			String a = dude.getString1();
			String b = dude.getString2();
			String c = dude.getString3();
			
			if (a.equalsIgnoreCase("yes")||a.equalsIgnoreCase("kill"))
			{
				break;
			}
			
			if (b.equalsIgnoreCase("yes")||b.equalsIgnoreCase("jump")) 
			{
				break;
			}
			
			if (c.equalsIgnoreCase("yes")||c.equalsIgnoreCase("yes"))
			{
				break;
			}	
			
//			int draghealth = (int) dude.getdh();
//			int playhealth = (int) dude.getph();
//			
//			if (draghealth <= 0)
//			{
//				break;
//			}
//			
//			if (playhealth <= 0)
//			{
//				break;
//			}
			
			}			
			
			//the try catch statement catches the following exceptions to prevent the game from crashing
			catch (ArrayIndexOutOfBoundsException e) 
			{
				System.out.println("The way is blocked by molten rocks.");
			}
			catch (InputMismatchException e) 
			{
				System.out.println("Invalid command.");
			}
			
		
		}
		
//		if (!(playhealth > 0))
//		{
//			System.out.println(" ________                        ________                     ");
//			System.out.println(" /  _____/_____    _____   ____   \\_____  \\___  __ ___________ ");
//			System.out.println("/   \\  ___\\__  \\  /     \\_/ __ \\   /   |   \\  \\/ // __ \\_  __ \\");
//			System.out.println("\\    \\_\\  \\/ __ \\|  Y Y  \\  ___/  /    |    \\   /\\  ___/|  | \\/");
//			System.out.println(" \\______  (____  /__|_|  /\\___  > \\_______  /\\_/  \\___  >__|   ");
//			System.out.println("        \\/     \\/      \\/     \\/          \\/          \\/ ");
//		}
		
		System.out.println("---------------------------------------------");
		System.out.println("Final Score: " + play.getScore());
		System.out.println("---------------------------------------------");
		System.out.println("Game over. Thanks for playing!");
	}
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
////--------------------------------------------------------------------------------------------------------------------------------
//		//creates the dungeon grid
//		//each number represents a building
//		//		1 = player;
//		//		20 = dragons lair drop;
//		//		30 = mithril mine;
//		//		40 = dark farms;
//		//		50 = tiger cage;
//		//		60 = mistry falls;
//		//		70 = adamantine keep;
//		//		80 = guild of scrolls;
//		//		90 = burning tree;
//		//		100 = boat;		
////		int [][] dungeonMap = 	{{0, 0, 20, 0, 0},
////								{90, 30, 0, 40, 0},
////								{50, 0, 0, 0, 60},
////								{0, 70, 0, 80, 0},
////								{0, 0, 100, 0, 0}};	
//		
////		int [][] playerMap = 	{{0, 0, 0, 0, 0},
////								{0, 0, 0, 0, 0},
////								{0, 0, 1, 0, 0},
////								{0, 0, 0, 0, 0},
////								{0, 0, 0, 0, 0}};
//		
//		
//		//Creates a player object that stores the score, the health of the player
//		//the health of the dragon, the battle abilities for the warrior
//		//the battle abilities for the dragon, and also the stats of the weapons
//		//and armour equipped by the player
//		
//		int [][] dungeonMap = 	{{0, 0, 20, 0, 0},
//				{90, 30, 0, 40, 0},
//				{50, 0, 0, 0, 60},
//				{0, 70, 0, 80, 0},
//				{0, 0, 100, 0, 0}};	
//		
//		Score obj1 = new Score("warrior");
//		HealthDragon obj2 = new HealthDragon("warrior");
//		HealthWarrior obj3 = new HealthWarrior("warrior");
//		BattleDragon obj4 = new BattleDragon("warrior");
//		BattleWarrior obj5 = new BattleWarrior("warrior");
//		Statistics obj6 = new Statistics("warrior");
//		Move warrior = new Move("warrior");
//		Rooms obj = new Rooms("warrior");		
//		obj.initializeLists();	
//		
//		
//		List inventory = new ArrayList();
//		List mithrilmine = new ArrayList();
//		List darkfarms = new ArrayList();
//		List adamantinekeep = new ArrayList();
//		List guildofscrolls = new ArrayList();
//		
//		//creates an arraylist for each room containing the items for that room	
//		//arraylist is used so that the player can add and remove elements as needed
//		mithrilmine.add("cloth armour");
//		mithrilmine.add("mithril axe");
//				
//		darkfarms.add("iron sword");
//		darkfarms.add("Zamorak ice whip");
//				
//		adamantinekeep.add("sewer key");
//		adamantinekeep.add("Zamorak kiteshield");
//		adamantinekeep.add("poison cheese");
//		adamantinekeep.add("bucket of water");
//				
//		guildofscrolls.add("anti-fire cape");
//		guildofscrolls.add("closet key");	
//		
//		//creates an arraylist to store 6 items in inventory for dropping and taking
//		//		1 = cloth armour;
//		//		2 = mithril axe;
//		//		3 = iron sword;
//		//		4 = Zamorak ice whip;
//		//		5 = sewer key;
//		//		6 = Zamorak kiteshield;
//		//		7 = poison cheese;
//		//		8 = bucket of water;
//		//		9 = anti-fire cape;
//		//		10 = closet key;
//		//		11 = torch;
////		List inventory = new ArrayList();
//		
////		//creates an arraylist for each room containing the items for that room	
////		//arraylist is used so that the player can add and remove elements as needed
////		List mithrilmine = new ArrayList();
////		mithrilmine.add("cloth armour");
////		mithrilmine.add("mithril axe");
////		
////		List darkfarms = new ArrayList();
////		darkfarms.add("iron sword");
////		darkfarms.add("Zamorak ice whip");
////		
////		List adamantinekeep = new ArrayList();
////		adamantinekeep.add("sewer key");
////		adamantinekeep.add("Zamorak kiteshield");
////		adamantinekeep.add("poison cheese");
////		adamantinekeep.add("bucket of water");
////		
////		List guildofscrolls = new ArrayList();
////		guildofscrolls.add("anti-fire cape");
////		guildofscrolls.add("closet key");
////		
//		//creates an array list of weapons and armour and their stats
//		List weapons = new ArrayList();
//		
//		
////--------------------------------------------------------------------------------------------------------------------------------
//		//introduction
//		
//		obj.Intro();
//		
////		String torch = "";
////		String take = "";
////		String go = "";
////		String takefarms = "";
//		do {
////		Scanner light = new Scanner(System.in);
////		System.out.println("It is dark.");
////		System.out.println("You see an unlit lantern.");
////		System.out.print("> ");	
////		torch = light.nextLine();
////		
////		if ((torch.equalsIgnoreCase("light lantern")||torch.equalsIgnoreCase("light")||torch.equalsIgnoreCase("light torch")||
////				torch.equalsIgnoreCase("turn on lantern")))
////				{
//////					inventory.add("torch");
////					System.out.println("You can see now.");
////					break;
////				}
////		if (torch.equalsIgnoreCase("poo")){
////			System.out.println("You win!");
////			break;
////		}
////		else 
////		{
////			System.out.println("What's that?");
////			System.out.println();
////		}
////			
////		}while(true);		
////--------------------------------------------------------------------------------------------------------------------------------
//		//move commands
//		//north
//		//south
//		//east
//		//west
//		
////		do{	
////			if (torch.equalsIgnoreCase("poo")){				
////				break;
////			}
//		try {	
//			
//		int R = 0;
//		int C = 0;
//		int check = 0;	
//		int y = 0;
//		int x = 0;	
//		
//		do {			
//		Scanner move = new Scanner(System.in);	
//		System.out.print("> ");
//		String nesw = move.nextLine();
//
//		
//		if (nesw.equalsIgnoreCase("north")) {
//			warrior.North();			
//			R = warrior.getR();
//			C = warrior.getC();		
//			check = dungeonMap[R][C];
//			Rooms hello = new Rooms("warrior");
//			hello.MithrilMine(check);
//		}
//		
//		if (nesw.equalsIgnoreCase("south")) {
//			warrior.South();
//			R = warrior.getR();
//			C = warrior.getC();
//		}
//		
//		if (nesw.equalsIgnoreCase("west")) {
//			warrior.West();
//			R = warrior.getR();
//			C = warrior.getC();
//			check = dungeonMap[R][C];
//			Rooms yello = new Rooms("warrior");
//			yello.MithrilMine(check);
//		}
//		
//		if (nesw.equalsIgnoreCase("east")) {
//			warrior.East();
//			R = warrior.getR();
//			C = warrior.getC();
//		}		
//	
////--------------------------------------------------------------------------------------------------------------------------------
//		//checking whether or not the move is landing on another building	
////		check = dungeonMap[R][C];		
////--------------------------------------------------------------------------------------------------------------------------------
//		//if the move is landing on another building, then tell the player what he requires to enter
//		//checking if the player moves anywhere or not
//		if (check == 0) {		
//			System.out.println("---------------------------------------------");
//		}
//		
////		//checking if the player is on the dragon hole or not
////		if (check == 20) {
////			for (int i = 0; i < inventory.size(); i++) {
////				if (inventory.contains(11)) {
////					if (inventory.contains(5)) {
////						for (int r = 0; r < inventory.size(); r++) {	
////							if (inventory.contains(2)) {
////								System.out.println("Welcome to the Dragon's Lair.");
////								System.out.print("> ");
////							}
////							else {
////								System.out.println("You need a mithril axe.");
////							}
////						}					
////					}
////					else {
////						System.out.println("You need a key.");
////					}
////				}
////				else {
////					System.out.println("You need a torch to enter.");
////				}
////			}
////		}
//		
////		//checking whether the player is entering the mithril mine with or without a torch
//		Scanner loot = new Scanner(System.in);		
////		if (check == 30) { //check if mithril mine is on
////			for (int i = 0; i < inventory.size(); i++) {	//check if inv. contains torch
////				if (inventory.contains("torch")) {					
////				}			
////				else {
////					System.out.println("You need a torch to enter.");
////					break;
////				}
////			}
////			//introduction to the Mithril Mine room
////			System.out.println("You enter the Mithril Mine, a humid climate.");
////			
////			while(mithrilmine.size() != 0) {	//start while loop				
////			
////				System.out.println("This room contains" + mithrilmine);
////				System.out.print("> ");											
////				
////				take = loot.nextLine();
////				if (take.equalsIgnoreCase("take cloth armour")) {					
////					inventory.add("cloth armour");
////					mithrilmine.remove("cloth armour");
////					System.out.println("took cloth armour [weak against fire, light, +2 defence]");								
////				}//end of take cloth armour						
////				if (take.equalsIgnoreCase("take mithril axe")) {
////					inventory.add("mithril axe");
////					mithrilmine.remove("mithril axe");
////					System.out.println("took mithril axe [+3 attack]");							
////				}//end of take mithril axe	
////				if (((take.equalsIgnoreCase("exit"))) || ((take.equalsIgnoreCase("leave")))) {
////					System.out.println("You leave.");
////					break;
////				}//end of exit loop
////			}//end of while loop
////		}//end of if statement for mithril mine
//		
//		//checking whether the player is entering the dark farms with or without a torch
////		if (check == 40) {
////			for (int i = 0; i < inventory.size(); i++) {	
////				if (inventory.contains("torch")) {				
////				}
////				else {
////					System.out.println("You need a torch to enter.");
////				}
////			}
////			//introduction to the dark farms room
////			System.out.println("You enter the Dark Farms. It is dark, but your lantern allows you to see.");
////			
////			while(darkfarms.size() != 0) {	//start while loop
////				
////				System.out.println("This room contains" + darkfarms);
////				System.out.print("> ");
////				
////				takefarms = loot.nextLine();
////				if (takefarms.equalsIgnoreCase("take Zamorak Ice Whip")) {
////					inventory.add("zamorak ice whip");
////					darkfarms.remove("Zamorak ice whip");
////					System.out.println("took Zamorak Ice Whip [very strong, light, +10 attack]");
////				}//end of take zamorak ice whip
////				if (takefarms.equalsIgnoreCase("take iron sword")) {
////					inventory.add("iron sword");
////					darkfarms.remove("iron sword");
////					System.out.println("took iron sword [medium strength, heavy, +5 attack");
////				}//end of take iron sword	
////				if (((takefarms.equalsIgnoreCase("exit"))) || ((takefarms.equalsIgnoreCase("leave")))) {
////					System.out.println("You leave.");
////					break;
////				}//end of exit loop
////			}//end of while loop
////		}//end of if statement for dark farms
//		
//		//checking whether the player is entering the tigers cage
////		if (check == 50) {
////			System.out.println("You see a vicous, growling, dark tiger.");
////			System.out.println("Enter the cage? ");
////			System.out.print("> ");
////			Scanner enter = new Scanner(System.in);
////			go = enter.nextLine();
////				if (go.equalsIgnoreCase("yes")) {
////					System.out.println("The tiger eats you alive.");
////					System.out.println("Game over.");
////					break;
////				}
////			
////		}
////		
////		//checking whether the player is entering the misty falls
////		if (check == 60) {
////			System.out.println("You stand atop the Misty Falls.");
////			System.out.println("A roaring, 4000 ft drop into sharp rocks.");
////			System.out.println("Jump? ");
////			System.out.print("> ");
////			Scanner enter = new Scanner(System.in);
////			go = enter.nextLine();
////				if (go.equalsIgnoreCase("yes")) {
////					System.out.println("You say your last words, look to the skies and jump.");
////					System.out.println("Game over.");
////					break;
////				}
////			
////		}
////		
////		//checking whether the player is entering the adamantine keep
////		if (check == 70) {
////			System.out.println("You enter the Adamantine Keep.");
////			System.out.println("An acient room with marble walls and palace columns.");
////			System.out.println("You should look for some armour and weapons.");
////			System.out.print("> ");
////			
////		}
////		
////		//checking whether the player is entering the guild of scrolls
////		if (check == 80) {
////			System.out.println("You enter the Guild of Scrolls.");
////			System.out.println("An acient room with marble walls and palace columns.");
////			System.out.println("You should look for some armour and weapons.");
////			System.out.print("> ");
////			
////		}
////	
////		//checking whether the player is looking at the burning tree or not
////		if (check == 90) {
////			System.out.println("You look out the window and see a burning tree.");
////		}
////		
////		//checking whether the player is on the boat or not
////		if (check == 100) {
////			System.out.println("You see a nice looking bamboo raft.");
////			System.out.println("Ride babmboo shaft? ");
////			System.out.print("> ");
////			Scanner enter = new Scanner(System.in);
////			go = enter.nextLine();
////				if (go.equalsIgnoreCase("yes")) {
////					System.out.println("You ride away peacefully.");
////					System.out.println("You win!");
////					break;
////				}
////		}
//		
////		if ((nesw.equalsIgnoreCase("i"))||(nesw.equalsIgnoreCase("inv"))||(nesw.equalsIgnoreCase("inventory"))
////				||(take.equalsIgnoreCase("i"))||(take.equalsIgnoreCase("inv"))
////				||(take.equalsIgnoreCase("inventory"))||(go.equalsIgnoreCase("i"))
////				||(go.equalsIgnoreCase("inv"))||(go.equalsIgnoreCase("inventory"))) {
////			System.out.println("Inventory"+ inventory);
////		}
////		if ((nesw.equalsIgnoreCase("drop"))||(take.equalsIgnoreCase("drop"))||(go.equalsIgnoreCase("drop"))) {
////			System.out.println("Inventory"+ inventory);
////			Scanner drop = new Scanner (System.in);
////			System.out.println("Drop what? ");
////			System.out.print("> ");
////			String remove = drop.nextLine();
////			inventory.remove(remove);
////			mithrilmine.add(remove);
////			System.out.println(remove + " dropped");
////		}
//	
//		}while(true);	
//		}
//		catch (ArrayIndexOutOfBoundsException e) {
//			System.out.println("You can't go that way.");
//		}
//		catch (InputMismatchException e) {
//			System.out.println("Invalid command.");
//			//print possible commands
//		}
//	}while(true);
////--------------------------------------------------------------------------------------------------------------------------------
//		
//		
//		
//		
//		
//
//	}
//
//}

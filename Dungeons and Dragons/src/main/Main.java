package main;

import java.util.Random;
import java.util.Scanner;

public class Main {
	
	protected static Scanner sc = new Scanner(System.in);
	protected static int choice;
	protected static String[] monsters = {"rabid Wolf", "scary Bear", "fearsome Lion", "Dragon", "strong Deer", "crazy Dog", "sinister Snake"};
	static boolean loop;
	static Player player;
	
	public static void main (String args[]) {
		intro();
	}
	
	public static void intro() {
		System.out.println("Welcome to the World of Dungeons and Dragons!");
		newline();
		
		loop = true;
		while (loop) {
		System.out.println("Choose a class: "
				+ "\n1. Warrior"
				+ "\n2. Ranger"
				+ "\n3. Mage");
		
		newline();
		System.out.print("> ");
		choice = sc.nextInt();
		
		if (choice == 1) {
			System.out.println("You are a warrior.");
			System.out.println("▬▬ι═══════>");
			loop = false;
		} else if (choice == 2) {
			System.out.println("You are a ranger.");
			System.out.println("»»---------------►");
			loop = false;
		} else if (choice == 3) {
			System.out.println("You are a mage.");
			System.out.println("━☆ﾟ.*･｡ﾟ");
			loop = false;
		} else {
			System.out.println("Please choose again.");
		}
		
		player = new Player(choice, 0);
		}
		start();
	}
	
	public static void start() {
		newline();
		loop = true;
		while (loop) {
			System.out.println("What do you want to do next?");
			System.out.println("You can go north, east, south, or west");
			System.out.print(">");
			String next = sc.next();
			monster();
		}
	}
	
	public static void monster() {
		Random rdm = new Random();
		int mons = rdm.nextInt(3);
		if (mons == 1) {
			int p = rdm.nextInt(monsters.length-1);
			String beast = monsters[p];
			System.out.println("You encounter a " + beast);
			System.out.println("Attack?"
					+ "\n1. Yes"
					+ "\n2. No");
			System.out.print(">");
			int q = sc.nextInt();
			if (q == 1) {
				kill();
			}
		}
	}
	
	public static void kill() {
		player.setChoice(choice);
		player.attack(choice);
		player.addxp(25);
		System.out.println("Total exp gained: " + player.getxp());
	}
	
	public static void newline() {
		System.out.println();
	}
}

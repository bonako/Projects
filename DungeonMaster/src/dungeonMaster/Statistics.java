package dungeonMaster;

import java.util.ArrayList;
import java.util.*;

public class Statistics extends DungeonMaster {
	
	//initializes all the variables and strings
	public double Defence;
	public double Attack;
	public double fireRes;
	public String name;
	List items = new ArrayList();
	HealthWarrior poo = new HealthWarrior("haha");
	
	//creates a basic stats constructor
	public Statistics (String name, int a, int b, int c) {
		this.name = name;	
		this.Attack = a;
		this.fireRes = b;
		this.Defence = c;		
	}
	
	//increase defence
	public double plusDefence (double x) {
		Defence = Defence + x;
		return Defence;
	}
	
	//decreases defence
	public double minusDefence (double x) {
		Defence = Defence - x;
		return Defence;
	}
	
	//increases attack
	public double plusAttack (double x) {
		Attack = Attack + x;
		return Defence;
	}
	
	//decreases attack
	public double minusAttack (double x) {
		Attack = Attack - x;
		return Defence;
	}
	
	//increases fireres
	public double plusfireRes (double x) {
		fireRes = fireRes + x;
		return Defence;
	}
	
	//decreases fireres
	public double minusfireRes (double x) {
		fireRes = fireRes - x;
		return Defence;
	}
	
	//prints out the stats for player as well as health
	public void getStats () {
		System.out.println("---------------------------------------------");
		System.out.println("Player");
		System.out.println("Health:" + "\t\t\t" + (int) poo.getHealth());
		System.out.println("Attack:" + "\t\t\t" + (int)Attack);
		System.out.println("Defence:" + "\t\t" + (int)Defence);
		System.out.println("Fire Resistance:" + "\t" + (int)fireRes);
		System.out.println("---------------------------------------------");
	}

}

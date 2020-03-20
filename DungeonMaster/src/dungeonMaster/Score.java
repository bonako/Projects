package dungeonMaster;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class Score extends DungeonMaster implements Runnable {
	
	public String name;
	public static int score;
	
	public Score (String name) {
		this.name = name;
		score = 10;
	}
	
	public static int getScore() {		
		
		return score;
		
	}
	
	public static void addScore(int x) {
		
		score = score + x;		
	}

	//using multithreading to run the program even under user input
	@Override
	public void run() {
		
		while (true == true)
		{

				score = score + 2;
				
				//waits 1 second before add 2 to the score
				//works even if the player is in the middle of typing a command
				//overlaps through whole program
				try
				{
					Thread.sleep(1000);
				}
				catch (InterruptedException ex)
				{
					Thread.currentThread().interrupt();
				}
				
			}
		}
		

}

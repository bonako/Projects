package employeeManagement;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	
	public static void main (String[] args) {
		
		ArrayList<Event> events = new ArrayList<Event>();
		ArrayList<Employee> employeeList = new ArrayList<Employee>();

		Event event = null;
		Employee employeeVAR = null;		
		Scanner key = new Scanner (System.in);		
		String name, employeeName, id = "";
		int numOfEvents, attendees = 0;

		System.out.print("How many events? "); 
		numOfEvents = key.nextInt(); key.nextLine();
		
		for (int i = 0; i < numOfEvents; i++) {
			
			System.out.println("===========================================");
			System.out.print("Enter the name of the event: "); 
			
			name = key.nextLine();		
			
			System.out.print("How many attendees? "); 
			attendees = key.nextInt(); key.nextLine();	
			
			for (int k = 0; k < attendees; k++) {		
				
				System.out.println("----------------------------------------");
				System.out.print("Enter the employee name: "); 
				
				employeeName = key.nextLine();
				
				System.out.print("Enter the employee IDs of the attendees: "); id = key.nextLine();
				int temp = Integer.parseInt(id);
				employeeVAR = new Employee(employeeName, temp);
				employeeList.add(employeeVAR);	
				
			}		
			
			event = new Event(name, employeeList); 
			events.add(event);	
			
			event = null; 
			employeeList = new ArrayList<Employee>();			
		}
			
			System.out.println("----------------------------------------");
			System.out.println(events.get(0).getName());
			for (Employee employee : events.get(0).getAttendees()) {
				System.out.println(employee.getName() + ", " + employee.getID());
			}
			
			System.out.println("----------------------------------------");
			System.out.println(events.get(1).getName());
			for (Employee employee : events.get(1).getAttendees()) {
				System.out.println(employee.getName() + ", " + employee.getID());
			}
		
		key.close();			
	}
}

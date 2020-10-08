package employeeManagement;

import java.util.ArrayList;

public class Event {
	
	String name;
	private ArrayList<String> events = new ArrayList<String>();
	private ArrayList<Employee> attendees = new ArrayList<Employee>();
	
	// Constructor Declaration of Class
	public Event (String name, ArrayList<Employee> e) {
		this.name = name;
		this.events.add(name);
		this.attendees = e;
	}
	
	// method 1
	public String getName() {
		return name;
	}
	
	// method 2
	public ArrayList<Employee> getAttendees() {
		return attendees;
	}

}

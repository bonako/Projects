package employeeManagement;

import java.util.ArrayList;

public class Employee {
	
	// Instance Variables
	String name;
	int ID;
	ArrayList<Integer> employees = new ArrayList<Integer>();
	
	// Constructor Declaration of Class
	public Employee(String name, int ID) {
		this.name = name;
		this.ID = ID;
		this.employees.add(ID);
	}
	
	// method 1
	public String getName() {
		return name;
	}
	
	// method 2
	public int getID() {
		return ID;
	}
	
}

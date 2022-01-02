package leetCodeQuestions;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


import java.awt.event.*;
import javax.swing.*;
import java.awt.*;

class CalculatorGUI extends JFrame implements ActionListener {
    // create a frame
    static JFrame f;
 
    // create a textfield
    static JTextField l;
 
    // store operator and operands
    String s0, s1, s2;
 
    // default constructor
    CalculatorGUI()
    {
        s0 = s1 = s2 = "";
    }
 
    // main function
    public static void main(String args[])
    {
        // create a frame
        f = new JFrame("calculator");
 
        try {
            // set look and feel
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        }
        catch (Exception e) {
            System.err.println(e.getMessage());
        }
 
        // create a object of class
        CalculatorGUI c = new CalculatorGUI();
 
        // create a textfield
        l = new JTextField(26);
        l.setFont(new Font("Serif", Font.PLAIN, 24));

        // set the textfield to non editable
        l.setEditable(false);
 
        // create number buttons and some operators
        JButton b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bs, bd, bm, be, beq, beq1;
 
        // create number buttons
        b0 = new JButton("0");
        b0.setPreferredSize(new Dimension(100, 80));
        b0.setFont(new Font("Serif", Font.PLAIN, 24));
        b1 = new JButton("1");
        b1.setPreferredSize(new Dimension(100, 80));
        b1.setFont(new Font("Serif", Font.PLAIN, 24));
        b2 = new JButton("2");
        b2.setPreferredSize(new Dimension(100, 80));
        b2.setFont(new Font("Serif", Font.PLAIN, 24));
        b3 = new JButton("3");
        b3.setPreferredSize(new Dimension(100, 80));
        b3.setFont(new Font("Serif", Font.PLAIN, 24));
        b4 = new JButton("4");
        b4.setPreferredSize(new Dimension(100, 80));
        b4.setFont(new Font("Serif", Font.PLAIN, 24));
        b5 = new JButton("5");
        b5.setPreferredSize(new Dimension(100, 80));
        b5.setFont(new Font("Serif", Font.PLAIN, 24));
        b6 = new JButton("6");
        b6.setPreferredSize(new Dimension(100, 80));
        b6.setFont(new Font("Serif", Font.PLAIN, 24));
        b7 = new JButton("7");
        b7.setPreferredSize(new Dimension(100, 80));
        b7.setFont(new Font("Serif", Font.PLAIN, 24));
        b8 = new JButton("8");
        b8.setPreferredSize(new Dimension(100, 80));
        b8.setFont(new Font("Serif", Font.PLAIN, 24));
        b9 = new JButton("9");
        b9.setPreferredSize(new Dimension(100, 80));
        b9.setFont(new Font("Serif", Font.PLAIN, 24));
        // equals button
        beq1 = new JButton("=");
        beq1.setPreferredSize(new Dimension(100, 80));
        beq1.setFont(new Font("Serif", Font.PLAIN, 24));

        // create operator buttons
        ba = new JButton("+");
        ba.setPreferredSize(new Dimension(100, 80));
        ba.setFont(new Font("Serif", Font.PLAIN, 24));
        bs = new JButton("-");
        bs.setPreferredSize(new Dimension(100, 80));
        bs.setFont(new Font("Serif", Font.PLAIN, 24));
        bd = new JButton("/");
        bd.setPreferredSize(new Dimension(100, 80));
        bd.setFont(new Font("Serif", Font.PLAIN, 24));
        bm = new JButton("*");
        bm.setPreferredSize(new Dimension(100, 80));
        bm.setFont(new Font("Serif", Font.PLAIN, 24));
        beq = new JButton("C");
        beq.setPreferredSize(new Dimension(100, 80));
        beq.setFont(new Font("Serif", Font.PLAIN, 24));

 
        // create . button
        be = new JButton(".");
        be.setPreferredSize(new Dimension(100, 80));
        be.setFont(new Font("Serif", Font.PLAIN, 24));

        // create a panel
        JPanel p = new JPanel();
 
        // add action listeners
        bm.addActionListener(c);
        bd.addActionListener(c);
        bs.addActionListener(c);
        ba.addActionListener(c);
        b9.addActionListener(c);
        b8.addActionListener(c);
        b7.addActionListener(c);
        b6.addActionListener(c);
        b5.addActionListener(c);
        b4.addActionListener(c);
        b3.addActionListener(c);
        b2.addActionListener(c);
        b1.addActionListener(c);
        b0.addActionListener(c);
        be.addActionListener(c);
        beq.addActionListener(c);
        beq1.addActionListener(c);
 
        // add elements to panel
        p.add(l);
        p.add(ba);
        p.add(b1);
        p.add(b2);
        p.add(b3);
        p.add(bs);
        p.add(b4);
        p.add(b5);
        p.add(b6);
        p.add(bm);
        p.add(b7);
        p.add(b8);
        p.add(b9);
        p.add(bd);
        p.add(be);
        p.add(b0);
        p.add(beq);
        p.add(beq1);
 
        // set Background of panel
        p.setBackground(Color.BLACK);
 
        // add panel to frame
        f.add(p);
 
        f.setSize(500, 540);
        f.show();
    }
    public void actionPerformed(ActionEvent e)
    {
        String s = e.getActionCommand();
 
        // if the value is a number
        if ((s.charAt(0) >= '0' && s.charAt(0) <= '9') || s.charAt(0) == '.') {
            // if operand is present then add to second no
            if (!s1.equals(""))
                s2 = s2 + s;
            else
                s0 = s0 + s;
 
            // set the value of text
            l.setText(s0 + s1 + s2);
        }
        else if (s.charAt(0) == 'C') {
            // clear the one letter
            s0 = s1 = s2 = "";
 
            // set the value of text
            l.setText(s0 + s1 + s2);
        }
        else if (s.charAt(0) == '=') {
 
            double te;
 
            // store the value in 1st
            if (s1.equals("+"))
                te = (Double.parseDouble(s0) + Double.parseDouble(s2));
            else if (s1.equals("-"))
                te = (Double.parseDouble(s0) - Double.parseDouble(s2));
            else if (s1.equals("/"))
                te = (Double.parseDouble(s0) / Double.parseDouble(s2));
            else
                te = (Double.parseDouble(s0) * Double.parseDouble(s2));
 
            // set the value of text
            l.setText(s0 + s1 + s2 + "=" + te);
 
            // convert it to string
            s0 = Double.toString(te);
 
            s1 = s2 = "";
        }
        else {
            // if there was no operand
            if (s1.equals("") || s2.equals(""))
                s1 = s;
            // else evaluate
            else {
                double te;
 
                // store the value in 1st
                if (s1.equals("+"))
                    te = (Double.parseDouble(s0) + Double.parseDouble(s2));
                else if (s1.equals("-"))
                    te = (Double.parseDouble(s0) - Double.parseDouble(s2));
                else if (s1.equals("/"))
                    te = (Double.parseDouble(s0) / Double.parseDouble(s2));
                else
                    te = (Double.parseDouble(s0) * Double.parseDouble(s2));
 
                // convert it to string
                s0 = Double.toString(te);
 
                // place the operator
                s1 = s;
 
                // make the operand blank
                s2 = "";
            }
 
            // set the value of text
            l.setText(s0 + s1 + s2);
        }
    }
}










































//import javax.swing.BorderFactory;
//import javax.swing.JButton;
//import javax.swing.JFrame;
//import javax.swing.JPanel;
//import javax.swing.JTextField;
//
//public class CalculatorGUI implements ActionListener {
//
//	public static JFrame frame;
//	public static JPanel panel;
//	public static JButton addition;
//	public static JButton subtraction;
//	public static JButton multiplication;
//	public static JButton division;
//	public static JTextField number1;
//	public static JTextField number2;
//
//
//
//	
//	public static void main(String[] args) {
//		
//		frame = new JFrame();
//		panel = new JPanel();
//		addition = new JButton("Add");
//		addition.addActionListener(new CalculatorGUI());
//		subtraction = new JButton("Subtract");
//		subtraction.addActionListener(doClick());
//		multiplication = new JButton("Multiply");
//		division = new JButton("Divide");
//		number1 = new JTextField(20);
//		number2 = new JTextField(20);
//		
//		frame.setSize(600,600);
//		panel.setBorder(BorderFactory.createEmptyBorder(30,30,10,30));
//		panel.add(addition);
//		panel.add(subtraction);
//		panel.add(multiplication);
//		panel.add(division);
//		panel.add(division);
//		panel.add(division);
//		panel.add(number1);
//		panel.add(number2);
//
//
//
//		
//		frame.add(panel);
//		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//		frame.setTitle("Calculator");
//		frame.setVisible(true);
//
//	}
//
//
//
//
//	private static void ActionListener doClick() {
//		int num1 = Integer.parseInt(number1.getText());
//		int num2 = Integer.parseInt(number2.getText());
//		
//		System.out.println(num1 - num2);
//	}
//
//
//
//
//	@Override
//	public void actionPerformed(ActionEvent e) {
//		int num1 = Integer.parseInt(number1.getText());
//		int num2 = Integer.parseInt(number2.getText());
//		
//		System.out.println(num1 + num2);
//		
////		if(user.contentEquals("Rafeh") && password.contentEquals("fluffyDinosaur123")) {
////			success.setText("Login successful!");
////		}
//		
//	}
//
//}

from Tkinter import *
import time

master = Tk()

def show_entry_fields():
        print("First Name: %s\nAge: %s\nGender: %s\nProfession: %s" % (e1.get(), e2.get(), e3.get(), e4.get()))

Label(master, text="First Name").grid(row=0)
Label(master, text="Age").grid(row=0, column=1)
Label(master, text="Gender").grid(row=2)
Label(master, text="Profession").grid(row=2, column=1)

e1 = Entry(master)
e2 = Entry(master)
e3 = Entry(master)
e4 = Entry(master)

e1.grid(row=1, column=0)
e2.grid(row=1, column=1)
e3.grid(row=3, column=0)
e4.grid(row=3, column=1)

Button(master, text='Quit', command=master.quit).grid(row=4, column=0, stick=W, pady=4)
Button(master, text='Show', command=show_entry_fields).grid(row=4, column=1, sticky=W, pady=4)

mainloop()

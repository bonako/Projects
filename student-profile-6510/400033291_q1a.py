from socket import *
from cmd import Cmd
from getpass import getpass
import os
import platform

class MyPrompt(Cmd):
    prompt = '> '
    intro = "--------------------------------\nWelcome to File Transfer System!\nType ? to list commands"
    def do_ftp(self, inp):
        '''create a connection with website'''
        serverNameAsIp = inp
        serverPort = 12012
        clientSocket = socket(AF_INET, SOCK_STREAM)
        clientSocket.connect((serverNameAsIp, serverPort))
        fileToTransfer = raw_input("Enter file to transfer as path: ")
        clientSocket.send("GET /" + fileToTransfer + " HTTP/1.1\r\n" +
                  "Host: " + gethostbyname(gethostname()) + ":" + str(clientSocket.getsockname()[1]) +
                  "\r\n\r\n")
        response = clientSocket.recv(2020)
        fileReceived = clientSocket.recv(2021)
        clientSocket.close()
    def do_QUIT(self, inp):
        '''exit the application'''
        print("Bye")
        return True
    def do_USER(self, inp):
        '''authentication username'''
        username = raw_input("Enter you username: ")
    def do_PASS(self, inp):
        '''authentication password'''
        password = getpass()
    def do_PWD(self, inp):
        '''print working directory on remote machine, returns the current directory of the host'''
        wd = os.getcwd()
        print(wd)
    def do_CWD(self, inp):
        '''change working directory on remote machine'''
        os.chdir(inp)
    def do_HELP(self, inp):
        '''show commands'''
        MyPrompt().onecmd('help')
    def do_CDUP(self, inp):
        '''change remote working directory to parent directory'''
        os.chdir('../')
    def do_SYST(self, inp):
        '''return system type'''
        print(platform.platform())

MyPrompt().cmdloop()
print("--------------------------------")

from socket import *

serverPort = 12012
serverSocket = socket(AF_INET, SOCK_STREAM)
serverSocket.bind((gethostbyname(gethostname()), serverPort))
serverSocket.listen(1)
print ('The server is ready to receive')
while True:
    connectionSocket, addr = serverSocket.accept()
    response = connectionSocket.recv(2020).decode()
    connectionSocket.send(response.encode())
    connectionSocket.close()
    fileReceived = addr.recv(2021).decode()
    addr.send(fileReceived.encode())
    addr.close()

import random, wave
import librosa

notes = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14}

n = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
data = []
SPEED = 1

num = random.randint(0,5)
for i in range(0,5):
	n[i] = random.randint(0,14)
	while (abs(n[i]-num) > 2):
		n[i] = random.randint(0,14)
	num = n[i]
for i in range(5,8):
        n[i] = n[i-3]
for i in range(8,10):
	n[i] = n[i-8]
for i in range(10,15):
        n[i] = random.randint(0,14)
        while (abs(n[i]-num) > 2):
                n[i] = random.randint(0,14)
        num = n[i]
for i in range(15,20):
	n.append(n[i-5])
for i in range(20,22):
        n.append(n[i-2])
for i in range(22,32):
        num = random.randint(0,14)
        while ((abs(num-n[i-1])) > 2):
                num = random.randint(0,14)
        n.append(num)
for i in range(32,40):
	n.append(n[i-10])
for i in range(40,50):
	num = random.randint(0,14)
	while ((abs(num-n[i-1])) > 2):
		num = random.randint(0,14)
	n.append(num)

print(n)
	
for i in n:
	w = wave.open(str(i)+".wav",'rb')
	data.append([w.getparams(), w.readframes(w.getnframes())])
	w.close()
	
output = wave.open("output.wav",'wb')
output.setparams(data[0][0])
#for x in range(5):
for i in range(50):
	output.writeframes(data[i][1])
output.close()


wf = wave.open('output.wav', 'rb')
RATE = wf.getframerate()
signal = wf.readframes(-1)
channels = wf.getnchannels()
width = wf.getsampwidth()
wf.close()

spf = wave.open('output.wav', 'wb')
spf.setnchannels(channels)
spf.setsampwidth(width)
spf.setframerate(RATE*SPEED)
spf.writeframes(signal)
spf.close()

y, s = librosa.load('output.wav', sr=16000)
librosa.output.write_wav('output.wav',y,s)


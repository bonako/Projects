import random, wave
import librosa

notes = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14}

n = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
data = []
SPEED = 5

num = 0
for i in range(15):
	n[i] = random.randint(0,14)
	while (abs(n[i]-num) >= 2):
		n[i] = random.randint(0,14)
	num = n[i]

for i in n:
	w = wave.open("Downloads/wavfiles/"+str(i)+".wav",'rb')
	data.append([w.getparams(), w.readframes(w.getnframes())])
	w.close()
	
output = wave.open("output.wav",'wb')
output.setparams(data[0][0])
for x in range(5):
	for i in range(15):
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

y, s = librosa.load('output.wav', sr=8000)
librosa.output.write_wav('output.wav',y,s)

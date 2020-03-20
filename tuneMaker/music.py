import random, wave
import librosa

notes = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14}

length = 78
n = []
for i in range(0,length):
	n.append(0)
data = []
SPEED = 2
cnt = 0

for x in range(0,1):
	num = random.randint(0,5)
	for i in range(0,5):
		n[cnt] = random.randint(0,14)
		while (abs(n[cnt]-num) > 2):
			n[cnt] = random.randint(0,14)
		num = n[cnt]
		cnt += 1
	for i in range(5,8):
        	n[cnt] = n[cnt-3]
		cnt += 1
	for i in range(8,10):
		n[cnt] = n[cnt-8]
		cnt += 1
	for i in range(10,15):
        	n[cnt] = random.randint(0,14)
        	while (abs(n[cnt]-num) > 2):
                	n[cnt] = random.randint(0,14)
        	num = n[cnt]
		cnt += 1
	for i in range(15,20):
		n[cnt] = n[cnt-5]
		cnt += 1
	for i in range(20,22):
		n[cnt] = n[cnt-2]
		cnt += 1
	for i in range(22,32):
        	num = random.randint(0,14)
        	while ((abs(num-n[cnt-1])) > 2):
                	num = random.randint(0,14)
		n[cnt] = num
		cnt += 1
	for i in range(32,40):
		n[cnt] = n[cnt-10]
		cnt += 1
	for i in range(40,50):
		num = random.randint(0,14)
		while ((abs(num-n[cnt-1])) > 2):
			num = random.randint(0,14)
		n[cnt] = num
		cnt += 1
	for i in range(50,70):
		n[cnt] = n[cnt-10]
		cnt += 1
	for i in range(70,72):
		n[cnt] = n[cnt-5]
		cnt += 1
	for i in range(72,74):
		n[cnt] = n[cnt-4]
		cnt += 1
	for i in range(74,76):
		n[cnt] = n[cnt-3]	
		cnt += 1
	for i in range(76,78):
                n[cnt] = n[cnt-2]
		cnt += 1

print(n)
	
for i in n:
	w = wave.open(str(i)+".wav",'rb')
	data.append([w.getparams(), w.readframes(w.getnframes())])
	w.close()
	
output = wave.open("output.wav",'wb')
output.setparams(data[0][0])
#for x in range(5):
for i in range(length):
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



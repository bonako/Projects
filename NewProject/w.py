import random

f = open("text.txt", "r")
file = f.readlines()
f.close()

list = ['!','?','"',',','.',':',';','(',')','\n']
vocab = []
occurances = {}

for line in file:
	words = line.split(' ')
	for word in words:
		for char in list:
			word = word.replace(char, '')
		word = word.lower()
		if word not in occurances.keys():
			occurances[word] = 0
		if word not in vocab:
			vocab.append(word)
		occurances[word] = occurances[word] + 1


sentence = ""
sBreakers = ['.','?','!']
midSentence = ['"',','(',')']
sentences = [[],[],[]]

for line in file:
	sentence += line


for char in sBreakers:
	sentence.split(char)

print sentence
	

str = ""
for i in range(10):
	x = random.randint(0,len(vocab)-1)
	str += vocab[x]+" "



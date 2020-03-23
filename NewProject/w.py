import random

f = open("text.txt", "r")
file = f.readlines()
f.close()

list = ['!','?','"',',','.',':',';','(',')','\n',' ']
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
midSentence = ['"',',','(',')']
letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
sentences = []

for line in file:
	sentence += line

sentence = sentence.lower()
sentence = sentence.replace('\n','')
for char in sentence:
	if char not in letters:
		if char not in list:
			sentence = sentence.replace(char, '')

for char in midSentence:
	sentence = sentence.replace(char, '')

sentences = sentence.split('.')
for i in sentences:
	i = i.split('?')
for j in i in sentences:
for char in sBreakers:
	sentences = sentence.split(char)
	for i in sentences:
		for char in sBreakers:
			i = i.split(char)
print sentences
str = ""
for i in range(10):
	x = random.randint(0,len(vocab)-1)
	str += vocab[x]+" "


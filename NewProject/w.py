import random, re

f = open("text.txt", "r")
file = f.readlines()
f.close()

letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
list = ['!','?','"',',','.',':',';','(',')','\n',' ']
vocab = []
occurances = {}

for line in file:
	words = line.split(' ')
	for word in words:
		for char in word:
			if char not in letters and char not in list:
				word = word.replace(char, '')
		word = word.lower()
		if word not in occurances.keys():
			occurances[word] = 0
		if word not in vocab:
			vocab.append(word)
		occurances[word] = occurances[word] + 1


sentence = ""
endofsentence = ['.','?','!']
insentence = ['"',',','(',')','\n',':',';']
sentences = []

for line in file:
	sentence += line

sentence = sentence.lower()

for char in sentence:
	if char not in letters and char not in list:
		sentence = sentence.replace(char, '')
for char in insentence:
	sentence = sentence.replace(char, '')

sentences = re.split('[.?!]',sentence)

sendigits = []
for sentence in sentences:
	if sentence == '':
		sentences.remove(sentence)
	for word in sentence.split(' '):
		vocab.index(word)
	if char not in letters and char not in list:
		word = word.replace(char, '')

str = ""
for i in range(10):
	x = random.randint(0,len(vocab)-1)
	str += vocab[x]+" "


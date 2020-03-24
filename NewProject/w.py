import random, re

f = open("7oldsamurai.txt", "r")
file = f.readlines()
f.close()

letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
list = ['!','?','"',',','.',':',';','(',')','\n',' ']
vocab = []
occurances = {}

for line in file:
	words = line.split(' ')
	for word in words:
		word = word.lower()
		for char in word:
			if char not in letters and char not in list:
				word = word.replace(char, '')
			for punctuation in list:
				if char == punctuation:
					word = word.replace(char, '')
			if char not in letters:
				word = word.replace(char, '')
					
		if word not in occurances.keys():
			occurances[word] = 0
		if word not in vocab and word != '':
			vocab.append(word)
		occurances[word] = occurances[word] + 1

dictionary = {}

for word in vocab:
	dictionary[vocab.index(word)] = word


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

sentenceNumbers = []
for sentence in sentences:
	numbers = []
	if sentence == '' or sentence == ' ':
		sentences.remove(sentence)
	for word in sentence.split(' '):
		if word in vocab:
			numbers.append(vocab.index(word))	
	if char not in letters and char not in list:
		word = word.replace(char, '')
	if numbers != []:
		sentenceNumbers.append(numbers)


outputSentences = []
sentence = []
for sentenceLength in range(10):
	word = random.randint(0,len(vocab)-1)
	sentence.append(word)
firstSentence = ""
for word in sentence:
	firstSentence += dictionary[word] + " "

similarityArray = []
for numbers in sentenceNumbers:
	similarity = 0
	n = 0
	while n < len(numbers):
		s = 0
		while s < len(sentence):
			if numbers[n] == sentence[s]:
				similarity += 0.1
			s+=1
		n+=1
	similarityArray.append(similarity)


mostSimilarSentences = [] #in increasing order
maxSimilarity = 0
for similarity in similarityArray:
	if similarity > maxSimilarity:
		maxSimilarity = similarity
		mostSimilarSentences.append(similarityArray.index(maxSimilarity))

for sentence in mostSimilarSentences:	
	numbers = sentenceNumbers[sentence]
	str = ""
	for number in numbers:
		str += dictionary[number] + " "
	outputSentences.append(str)

#print firstSentence
for sentence in outputSentences:
	print sentence

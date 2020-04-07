import random, re

name = raw_input("Name of story: ")
f = open(name+".txt", "r")
file = f.readlines()
f.close()

v = open("vocab.txt", "r")
vocab = (v.read().split(" "))
v.close()

letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
list = ['!','?','"',',','.',':',';','(',')','\n',' ']
occurances = {}

sentence = []
v = open("vocab.txt","a")
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
		sentence.append(word)
		if word not in vocab and word != '':
			vocab.append(word)
			v.write(word+" ")
		occurances[word] = occurances[word] + 1

v.close()
numbers = []
dictionary = {}
for word in vocab:
	if word != '':
		dictionary[vocab.index(word)] = word
for word in sentence:
	for key, value in dictionary.items():
		if (word == value):
			numbers.append(key)

d = open("dictionary.txt","a")
for key, value in dictionary.items():
	d.write(str(key)+": "+ value+"\n")
d.close()

o = open(name+"-numbers.txt","w")
s = open("stories.txt","a")
for number in numbers:
	o.write(str(number)+" ")
	s.write(str(number)+" ")
o.close()
s.close()

s = open("stories.txt","r")
stories = s.read()
s.close()

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


outputStory = []
for length in range(100):
	outputStory.append(random.randint(0,len(dictionary)))

similarity = 0
index = 0
base = 0
running = True
while (running):
		if (outputStory[index]==stories.split(" ")[base]):
			similarity += (1/len(outputStory))
			index += 1
			base += 1
		else:
			similarity=0
			index+=1
		print index
		print base
		if index==(len(outputStory)-1) or base==(len(stories.split(" "))-1):
			running = False
print similarity

s = open("generated.txt","w")
for number in outputStory:
	s.write(dictionary[number]+" ")
s.close()



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
#	for number in numbers:
#		str += dictionary[number] + " "
#	outputSentences.append(str)

#print sentenceNumbers

file = open("text.txt", "r")

list = ['!','?','"',',','.',':',';','(',')']
vocab = []
occurances = {}

for line in file:
	words = line.split(" ")
	for word in words:
		for char in list:
			word = word.replace(char, '')
		if word not in occurances.keys():
			occurances[word] = 0
		if word not in vocab:
			word = word.lower()
			vocab.append(word)
		occurances[word] += 1

print vocab
print occurances

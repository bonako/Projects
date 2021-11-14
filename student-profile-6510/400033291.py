import time

dictionary = {	"u-v":2,
		"v-u":2,
		"u-w":5,
		"w-u":5,
		"u-x":1,
		"x-u":1,
		"u-u":0,
		"v-x":2,
		"x-v":2,
		"v-w":3,
		"w-v":3,
		"w-x":3,
		"x-w":3,
		"w-y":1,
		"y-w":1,
		"w-z":5,
		"z-w":5,
		"x-y":1,
		"y-x":1,
		"y-z":2,	
		"z-y":2 }

distances = { 	"u":0,
		"v":0,
		"w":0,
		"x":0,
		"y":0,
		"z":0 }

Np = ["u"]
Lp = ["u"]
nodes = ["u","v","w","x","y","z"]
hops = []
for node in nodes:
	hops.append([node])

for node in nodes:
	if (node+"-u") in dictionary:
		distances[node] = dictionary["u-"+node]
	else:
		distances[node] = float('inf');

print(distances)
time.sleep(1)

i = 0
while Np != nodes:
	print(Lp)
	maxVal = float('inf')
	for node in nodes:
		if node not in Np:
			if (distances[node] < maxVal):
				minnode = node;
				maxVal = distances[minnode];
	Np.append(minnode)
	Lp.append(minnode)	
	for node in nodes:
		if node not in Np:
			if (node+"-"+minnode) in dictionary:
				q = distances[node]
				distances[node] = min(distances[node], distances[minnode] + dictionary[node+"-"+minnode]);
				if (distances[node] != q):
					hops[hops.index([node])-1].append(minnode+"-"+node)
	Np.sort()
	i += 1
	print(distances)
	time.sleep(1)

print("---------------------")
print("Destination	Link")
print("---------------------")

i = 0
for node in Np:
	print(node, hops[i])
	i = i + 1

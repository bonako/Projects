import random

used = [] 
while True:
  num = input("Enter your number: ")
  while len(used)<num/2:
    a = random.randint(0,num)
    b = random.randint(0,num)
    c = random.randint(0,num)
    
    if (a + b + c) == num:
      used.append([a,b,c])
    for item in used:
      item.sort()
    used.sort()
    for i in range(len(used)-1):
      if used[i] == used[i+1]:
        used.pop(i)
  for item in used:
    print(item)

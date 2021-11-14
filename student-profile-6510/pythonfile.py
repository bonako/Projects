import math

num = 0
num2 = 1
num3 = num + num2
sum = 0

for i in range(1000):
  num3 = num+num2
  num = num2
  num2 = num3
  sum += num3
  print(math.sqrt(sum))

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 33

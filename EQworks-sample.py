from operator import itemgetter
import time, math, turtle

file = open("data-sample.txt", "r")
lines = []
for line in file:
  lines.append(line.split(","))

lines.pop(0)
lines.sort(key=itemgetter(1))
date = 0
lat = 0
lng = 0
for line in lines:
      if line[1]==date and line[5]==lat and line[6]==lng:
            lines.remove(line)
      date = line[1]
      lat = line[5]
      lng = line[6]


file.close()
file = open("POIs.txt", "r")
pois = []
for poi in file:
  pois.append(poi.split(","))

pois.pop(0)
pois.sort(key=itemgetter(1))

lines.pop(0)

file.close()



R = 6371*(10^3) # metres
best = []
shortestpois = []
distances = []
for line in lines:
  min = 1*(10^16)
  for poi in pois:
    lat1 = float(line[5].strip('"'))
    lng1 = float(line[6].strip('"'))
    lat2 = float(poi[1].strip('"'))
    lng2 = float(poi[2].strip('"'))
    phi1 = lat1 * math.pi/180 # phi, lambda in radians
    phi2 = lat2 * math.pi/180
    deltaphi = (lat2-lat1) * math.pi/180
    deltalambda = (lng2-lng1) * math.pi/180
    a = math.sin(deltaphi/2) * math.sin(deltaphi/2) + math.cos(phi1) * math.cos(phi2) * math.sin(deltalambda/2) * math.sin(deltalambda/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    distance = R * c; # in metres
    # distance = abs(lat1-lat2)+abs(lng1-lng2)
    if distance < min:
      min = distance
      best = poi
  distances.append(min)
  shortestpois.append(best)


total1 = 0
total2 = 0
total3 = 0
total4 = 0

sum1 = 0
sum2 = 0
sum3 = 0
sum4 = 0


for poi in shortestpois:
  if poi == [] or len(poi) != 3:
    shortestpois.remove(poi)
  shortestpois.remove(poi)


idx = 0
for poi in shortestpois:
  for tag in poi:
    if tag == "POI1":
      total1 += 1
      sum1 += distances[idx]
    if tag == "POI2":
      total2 += 1
      sum2 += distances[idx]
    if tag == "POI3":
      total3 += 1
      sum3 += distances[idx]
    if tag == "POI4":
      total4 += 1
      sum4 += distances[idx]
  idx += 1

avg1 = 0
avg2 = 0
avg3 = 0
avg4 = 0

avg1 = float(sum1)/total1
#avg2 = float(sum2)/total2
avg3 = float(sum3)/total3
#avg4 = float(sum4)/total4



sum1 = 0
sum2 = 0
sum3 = 0
sum4 = 0


idx = 0
for poi in shortestpois:
  for tag in poi:
    if tag == "POI1":
      sum1 += (distances[idx]-avg1)**2
    if tag == "POI2":
      sum2 += (distances[idx]-avg2)**2
    if tag == "POI3":
      sum3 += (distances[idx]-avg3)**2
    if tag == "POI4":
      sum4 += (distances[idx]-avg4)**2
  idx += 1

stddev1 = math.sqrt(sum1/total1) 
# stddev2 = math.sqrt(sum2/total2)
stddev3 = math.sqrt(sum3/total3)
# stddev4 = math.sqrt(sum4/total4)

idx = 0
points1 = []
points2 = []
points3 = []
points4 = []

for poi in shortestpois:
    for tag in poi:
        if tag == "POI1":
            points1.append(distances[idx])
        if tag == "POI2":
            points2.append(distances[idx])
        if tag == "POI3":
            points3.append(distances[idx])
        if tag == "POI4":
            points4.append(distances[idx])
    idx += 1


points1new = []
for i in range(len(points1)):
  if points1[i] != 26:
        points1new.append(points1[i])

points2new = []
for i in range(len(points2)):
  if points2[i] != 26:
        points2new.append(points2[i])
        
points3new = []
for i in range(len(points3)):
  if points3[i] != 26:
        points3new.append(points3[i])
        
points4new = []
for i in range(len(points4)):
  if points4[i] != 26:
        points4new.append(points4[i])

points1 = points1new           
points2 = points2new
points3 = points3new
points4 = points4new


skk = turtle.Turtle()

skk.speed(1000)
skk.up()
skk.right(90)
skk.forward(260) 
skk.left(90)
skk.down()
skk.circle(260)
skk.up()
skk.left(180)
skk.forward(260) 

angle1 = 360/len(points1)
for i in range(len(points1)): 
  skk.up()
  skk.home()
  skk.down()
  skk.left(angle1)
  if points1[i] != 26:
    skk.forward(points1[i]*10)
 
turtle.done()

max1 = -1
for i in range(len(points1)):
  if points1[i] > max1:
    max1 = points1[i]
    

max2 = -1
for i in range(len(points2)):
  if points2[i] > max2:
    max2 = points2[i]
    
max3 = -1
for i in range(len(points3)):
  if points3[i] > max3:
    max3 = points3[i]
    
max4 = -1
for i in range(len(points4)):
  if points4[i] > max4:
    max4 = points4[i]

density1 = len(points1)/(math.pi*(max1**2))
density2 = len(points2)/(math.pi*(max2**2))
density3 = len(points3)/(math.pi*(max3**2))
density4 = len(points4)/(math.pi*(max4**2))

# Popularity

print("-10                                   10")
for i in range(-10,10):
      print("*"),
 
scale1 = len(points1)/10 - 10;     
scale2 = len(points2)/10 - 10;     
scale3 = len(points3)/10 - 10;     
scale4 = len(points4)/10 - 10;  

print("")
for i in range(-10,10):
      if i == math.ceil(scale1):
            print("*"),
      else:
            print(" "),
print("POI1")

for i in range(-10,10):
      if i == math.ceil(scale2):
            print("*"),
      else:
            print(" "),
print("POI2")

for i in range(-10,10):
      if i == math.ceil(scale3):
            print("*"),
      else:
            print(" "),           
print("POI3")

for i in range(-10,10):
      if i == math.ceil(scale4):
            print("*"),
      else:
            print(" "),   
print("POI4")                                          


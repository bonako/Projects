dates = "21stJan2021"

date = list(dates)
n = len(date)

year = date[n-4] + date[n-3] + date[n-2] + date[n-1]
month = date[n-7] + date[n-6] + date[n-5]
date.remove(date[n-8])
date.remove(date[n-9])
if n > 10:
	day = date[n-11] + date[n-10]
else:
	day = date[n-10]

print(year+"-"+month+"-"+day)

import csv

with open('src/data/CO2 Emissions_Canada.csv', 'r') as file:
    dataFull = csv.reader(file)
    dataFull = list(dataFull)
    
    data = [dataFull[i][:3] + [dataFull[i][6]] + dataFull[i][9:12] for i in range(len(dataFull))]
    print(data)
import csv

import xlsxwriter

rawData = []
checking = [[]] * 63

with open('inventario.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        rawData.append(row)

    for row in rawData:
        place = row[4]
        if place[0] == 'M':
            place_num = int(place[1::])
            if not checking[place_num]:
                checking[place_num] = [[row[0], row[1], row[3]]]
            else:
                checking[place_num].append([row[0], row[1], row[3]])


workbook = xlsxwriter.Workbook('hello.xlsx')
worksheet = workbook.add_worksheet()

row = 0
col = 0
num_ck = 0

for stand in checking:
    worksheet.write(row, col, 'Workstation ID')
    col += 1
    worksheet.write(row, col, f'XXXXXXXXX 192.168.211.{num_ck}')

    col = 0
    row += 1

    worksheet.write(row, col, 'ID')
    col += 1
    worksheet.write(row, col, f'M{num_ck}')
    num_ck += 1

    col = 0
    row += 1

    for device in stand:
        worksheet.write(row, col, 'Dispositivo')
        col += 1
        worksheet.write(row, col, device[0])

        col = 0
        row += 1

        worksheet.write(row, col, 'Modelo')
        col += 1
        worksheet.write(row, col, device[1])

        col = 0
        row += 1

        worksheet.write(row, col, 'Código')
        col += 1
        worksheet.write(row, col, device[2])

        col = 0
        row += 1

    row += 1

workbook.close()

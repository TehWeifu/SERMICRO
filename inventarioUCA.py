import csv

import xlsxwriter

rawData = []
checking = [[]] * 63

with open('inventario.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';', quotechar='|')
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

id_cells = workbook.add_format()
id_cells.set_bold()
id_cells.set_font_color('white')
id_cells.set_bg_color('#ACB9CA')
id_cells.set_border()

name_cells = workbook.add_format()
name_cells.set_bold()
name_cells.set_border()

device_word = workbook.add_format()
device_word.set_bg_color('#D6DCE4')
device_word.set_border()

device_type = workbook.add_format()
device_type.set_bold()
device_type.set_align('center')
device_type.set_border()

type_code = workbook.add_format()
type_code.set_border()
type_code.set_align('right')

normal_cell = workbook.add_format()
normal_cell.set_right()

row = 0
col = 0
num_ck = 0
num_ck_str = ""
ck_terminal = 0


for stand in checking:

    if num_ck == 0:
        num_ck += 1
        continue

    if 1 <= num_ck <= 12:
        ck_terminal = "02"
    elif 13 <= num_ck <= 42:
        ck_terminal = "01"
    else:
        ck_terminal = "03"

    num_ck_str = str(num_ck)
    while len(num_ck_str) < 3:
        num_ck_str = "0" + num_ck_str

    worksheet.write(row, col, 'Workstation ID', id_cells)
    col += 1
    worksheet.write(row, col, f'VLC{ck_terminal}CK{num_ck_str} 192.168.211.{num_ck}', name_cells)

    col = 0
    row += 1

    worksheet.write(row, col, 'ID', id_cells)
    col += 1
    worksheet.write(row, col, f'M{num_ck}', name_cells)
    num_ck += 1

    col = 0
    row += 1

    for device in stand:
        worksheet.write(row, col, 'Dispositivo', device_word)
        col += 1
        worksheet.write(row, col, device[0], device_type)

        col = 0
        row += 1

        worksheet.write(row, col, 'Modelo', type_code)
        col += 1
        worksheet.write(row, col, device[1], normal_cell)

        col = 0
        row += 1

        worksheet.write(row, col, 'Código', type_code)
        col += 1
        worksheet.write(row, col, device[2], normal_cell)

        col = 0
        row += 1

    worksheet.write(row, col, 'Electricidad', device_word)
    col += 1
    worksheet.write(row, col, "2 tomas a SAI, 2 tomas normal", name_cells)

    col = 0
    row += 1

    worksheet.write(row, col, "Red", device_word)
    col += 1
    worksheet.write(row, col, "2 tomas de red.", name_cells)

    col = 0
    row += 1

    row += 2

workbook.close()

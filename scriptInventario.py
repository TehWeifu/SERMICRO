import csv
import xlsxwriter

uca_data = []
sipa_data = []

uca_checking = [[]] * 63
uca_gates = [[]] * 24

sipa_gates = [[]] * 23
sipa_checking = [[]] * 63

with open('inventarioUCA.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        uca_data.append(row)

for row in uca_data:
    place = row[4]
    if place[0] == 'M':
        place_num = int(place[1::])
        if not uca_checking[place_num]:
            uca_checking[place_num] = [[row[0], row[1], row[3]]]
        else:
            uca_checking[place_num].append([row[0], row[1], row[3]])
    elif place[0] == 'P':
        if place == "PTAG":
            place_num = 23
        elif place == "P1A":
            place_num = 0
        elif place == "P1B":
            place_num = 1
        else:
            place_num = int(place[1::])
        if not uca_gates[place_num]:
            uca_gates[place_num] = [[row[0], row[1], row[3]]]
        else:
            uca_gates[place_num].append([row[0], row[1], row[3]])


with open('inventarioSIPA.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        sipa_data.append(row)

for row in sipa_data:
    place = row[3]
    if place[:9:] == "MOSTRADOR":
        place_num = int(place[10::])

        sipa_checking[place_num] = [row[4], row[5], row[6], row[7], row[9], row[11], row[12]]

    elif place[:6:] == "PUERTA":
        if place == "PUERTA 1A":
            place_num = 0
        elif place == "PUERTA 1B":
            place_num = 1
        else:
            place_num = int(place[7::])

        sipa_gates[place_num] = [row[4], row[5], row[6], row[7], row[9], row[11], row[12]]


workbook = xlsxwriter.Workbook('hello.xlsx')
worksheet_uca = workbook.add_worksheet("UCA")
worksheet_sipa = workbook.add_worksheet("SIPA")

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
num_stand = 0
num_stand_str = ""
stand_terminal = 0
gate_name = num_stand_str

for stand in uca_gates:
    if 0 <= num_stand <= 4:
        stand_terminal = "02"
    elif 5 <= num_stand <= 12:
        stand_terminal = "01"
    else:
        stand_terminal = "TR"

    num_stand_str = str(num_stand)
    while len(num_stand_str) < 2:
        num_stand_str = "0" + num_stand_str

    if num_stand == 0:
        gate_name = "1A"
    elif num_stand == 1:
        gate_name = "1B"
    elif num_stand == 23:
        gate_name = "TAG"

    if num_stand < 2 or num_stand > 22:
        num_stand_str = gate_name

    worksheet_uca.write(row, col, 'Workstation ID', id_cells)
    col += 1
    worksheet_uca.write(row, col, f'VLC{stand_terminal}GTN{num_stand_str} 192.168.211.{num_stand + 120}', name_cells)
    if num_stand == 23:
        worksheet_uca.write(row, col, "VLC02GTTAG 192.168.211.199", name_cells)

    col = 0
    row += 1

    if 1 < num_stand < 10:
        num_stand_str = num_stand

    worksheet_uca.write(row, col, 'ID', id_cells)
    col += 1
    worksheet_uca.write(row, col, f'P{num_stand_str}', name_cells)
    num_stand += 1

    col = 0
    row += 1

    for device in stand:
        worksheet_uca.write(row, col, 'Dispositivo', device_word)
        col += 1
        worksheet_uca.write(row, col, device[0], device_type)

        col = 0
        row += 1

        worksheet_uca.write(row, col, 'Modelo', type_code)
        col += 1
        worksheet_uca.write(row, col, device[1], normal_cell)

        col = 0
        row += 1

        worksheet_uca.write(row, col, 'Código', type_code)
        col += 1
        worksheet_uca.write(row, col, device[2], normal_cell)

        col = 0
        row += 1

    worksheet_uca.write(row, col, 'Electricidad', device_word)
    col += 1
    worksheet_uca.write(row, col, "2 tomas a SAI, 2 tomas normal", name_cells)

    col = 0
    row += 1

    worksheet_uca.write(row, col, "Red", device_word)
    col += 1
    worksheet_uca.write(row, col, "2 tomas de red.", name_cells)

    col = 0
    row += 1

    row += 2

num_stand = 0

for stand in uca_checking:

    if num_stand == 0:
        num_stand += 1
        continue

    if 1 <= num_stand <= 12:
        stand_terminal = "02"
    elif 13 <= num_stand <= 42:
        stand_terminal = "01"
    else:
        stand_terminal = "03"

    num_stand_str = str(num_stand)
    while len(num_stand_str) < 3:
        num_stand_str = "0" + num_stand_str

    worksheet_uca.write(row, col, 'Workstation ID', id_cells)
    col += 1
    worksheet_uca.write(row, col, f'VLC{stand_terminal}CK{num_stand_str} 192.168.211.{num_stand}', name_cells)

    col = 0
    row += 1

    worksheet_uca.write(row, col, 'ID', id_cells)
    col += 1
    worksheet_uca.write(row, col, f'M{num_stand}', name_cells)
    num_stand += 1

    col = 0
    row += 1

    for device in stand:
        worksheet_uca.write(row, col, 'Dispositivo', device_word)
        col += 1
        worksheet_uca.write(row, col, device[0], device_type)

        col = 0
        row += 1

        worksheet_uca.write(row, col, 'Modelo', type_code)
        col += 1
        worksheet_uca.write(row, col, device[1], normal_cell)

        col = 0
        row += 1

        worksheet_uca.write(row, col, 'Código', type_code)
        col += 1
        worksheet_uca.write(row, col, device[2], normal_cell)

        col = 0
        row += 1

    worksheet_uca.write(row, col, 'Electricidad', device_word)
    col += 1
    worksheet_uca.write(row, col, "2 tomas a SAI, 2 tomas normal", name_cells)

    col = 0
    row += 1

    worksheet_uca.write(row, col, "Red", device_word)
    col += 1
    worksheet_uca.write(row, col, "2 tomas de red.", name_cells)

    col = 0
    row += 1

    row += 2


row = 0
col = 0

for sipa in sipa_gates:
    worksheet_sipa.write(row, col, "Workstation ID", id_cells)
    col += 1
    worksheet_sipa.write(row, col, f"{sipa[0]} {sipa[1]}", name_cells)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Dispositivo", device_word)
    col += 1
    worksheet_sipa.write(row, col, "CTS", device_type)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Marca", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[3], normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "MAC", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[2], normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Serial", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[4] if sipa[4] else "N/A", normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Dispositivo", device_word)
    col += 1
    worksheet_sipa.write(row, col, "MONITOR", device_type)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Modelo", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[5], normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Serial", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[6] if sipa[6] else "N/A", normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Electricidad", device_word)
    col += 1
    worksheet_sipa.write(row, col, "2 tomas a SAI.", name_cells)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Tomas de red", device_word)
    col += 1
    worksheet_sipa.write(row, col, "2 tomas de red", name_cells)

    col = 0
    row += 1

    row += 2


for sipa in sipa_gates:
    worksheet_sipa.write(row, col, "Workstation ID", id_cells)
    col += 1
    worksheet_sipa.write(row, col, f"{sipa[0]} {sipa[1]}", name_cells)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Dispositivo", device_word)
    col += 1
    worksheet_sipa.write(row, col, "CTS", device_type)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Marca", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[3], normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "MAC", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[2], normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Serial", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[4] if sipa[4] else "N/A", normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Dispositivo", device_word)
    col += 1
    worksheet_sipa.write(row, col, "MONITOR", device_type)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Modelo", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[5], normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Serial", type_code)
    col += 1
    worksheet_sipa.write(row, col, sipa[6] if sipa[6] else "N/A", normal_cell)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Electricidad", device_word)
    col += 1
    worksheet_sipa.write(row, col, "2 tomas a SAI.", name_cells)

    col = 0
    row += 1

    worksheet_sipa.write(row, col, "Tomas de red", device_word)
    col += 1
    worksheet_sipa.write(row, col, "2 tomas de red", name_cells)

    col = 0
    row += 1

    row += 2

workbook.close()

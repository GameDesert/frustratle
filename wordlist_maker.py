lineformat = '{}:"{},"'

# Writing to a file
 
# Using readline()
sourceFile = open('words_alpha.txt', 'r')
count = 260
targetFile = open('wordlist.json', 'a')

while True:
 
    # Get next line from file
    line = sourceFile.readline().strip().replace("\n", "")
 
    # if line is empty
    # end of file is reached
    if not line:
        break
    if len(line) == 5:
        if input(line +". Approve? ") == "y":
            appenddata = '"{}":"{}",\n'.format(count, line)
            targetFile.writelines(appenddata)
            count += 1
 
sourceFile.close()
targetFile.close()

# FINISHED AT CAABA (first C-word)
# Baked
# -bails +bales
# Baron
# Begun
# Beech
# - Booze
# Boron
# 
# Bunch
# ? - Burps
# 
# 
# 
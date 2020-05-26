let i = 0;

while (i < 15) {
    // Break (stop the loop)
    if (i == 13)
        break;
    // Continue (skip a line)
    if (i % 2 == 0) {
        i++;
        continue;
    }
    console.log('Line : ' + i);
    i++;
}
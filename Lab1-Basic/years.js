console.log(`Convert Years\noption 1 : BE(พ.ศ.) -> AD(ค.ศ.)\noption 2 : AD(ค.ศ.) -> BE(พ.ศ.)`);
const prompt = require('prompt-sync')()
const op = prompt('Select option : ');
if (op === '1' || op === '2') {
    const years = prompt('What years to convert? : ');
    yearIn = parseInt(years);
}
else {
    console.log('ERROR');
}

BEtoAD = (year) => {
    year -= 543;
    console.log(`AD(ค.ศ.) : ${year}`);
}
ADtoBE = (year) => {
    year += 543;
    console.log(`BE(พ.ศ.) : ${year}`);
}

switch (op) {
    case '1': BEtoAD(yearIn); break;
    case '2': ADtoBE(yearIn); break;
}




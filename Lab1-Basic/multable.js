console.log(`Multiplication Table`);
const prompt = require('prompt-sync')()
const multimes = prompt('Select times table (เลือกเลขสูตรคูณ) : ');
multimesIn = parseInt(multimes);

multable = (times) => {
    for (i = 1; i <= 12; i++) {
        let result
        result = times * i;
        console.log(`${times} * ${i} = ${result}`);
    }
}
if (multimes > 0)
    multable(multimesIn);
else
    console.log('ERROR')


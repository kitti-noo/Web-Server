console.log(`Random Number Game [1-50]\nq -> exit`);
var rand = Math.floor(Math.random() * (50)) + 1;
console.log(rand);
let i = 0;
randgame = (number) => {

    if (number == rand) {
        return '-1';
    }
    if (number > rand) {
        if (number <= rand + 2)
            return 'Very close';
        else
            return 'Too much';
    }
    else if (number < rand) {
        if (number >= rand - 2)
            return 'Very close';
        else
            return 'Too little';
    }
}
while (i < 5) {
    const prompt = require('prompt-sync')()
    const num = prompt(`Numeber[${i + 1}]  : `);
    if (num === 'q') {
        console.log('>> exit');
        break;
    }

    number = parseInt(num);
    if (randgame(number) === '-1') {
        console.log('WIN !!');
        break;
    }
    else {
        console.log(randgame(number));
    }
    i++;
}
console.log(`>> Random Number : ${rand}`);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', function (data) {
    inputs.push(data);
    deal(inputs);
});

function deal(inputs) {
    for (let j = 0; j < inputs.length; j++) {
        let sb = '';
        let a = inputs[j].length % 8;
        if (a !== 0) {
            for (let i = 0; i < 8 - a; i++) {
                sb = sb + '0';
            }
        }

        inputs[j] = inputs[j] + sb;
        while (inputs[j].length >= 8) {
            console.log(inputs[j].slice(0, 8));
            inputs[j] = inputs[j].slice(8);
        }
    }
}
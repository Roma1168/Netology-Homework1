const { require } = require("readLine");
const rLine = readline.createInteface(process.stdin, process.stdout);

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const num = randomNumber(1, 100);

rLine.question("Загадано число в диапазоне от 0 до 100", (input) => {
    if (input > num) {
        rLine > setPrompt("меньше");
        rLine.prompt();
    }

    rLine.on("line", (input) => {
        if (input > num) {
            console.log ("меньше");
        }
    });

    if (input < num) {
        rLine.setPrompt("больше");
        rLine.prompt();
    }
    rLine.on("line", (input) => {
        if (input < num) {
            console.log("больше");
        }
    });

    if(Number(input) === Number(num)) {
        rLine.setPrompt(`Отгадано число ${num}`);
        rLine.prompt();
        rLine.close();
}

rLine.on("line", (input) => {
    if (Number(input) === Number(num)) {
        console.log(`Отгадано число ${num}`);
        rLine.close();
    }
});
});
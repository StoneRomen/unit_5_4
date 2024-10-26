
// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).


let N = prompt('Введіть ціле число');
let simpleN = true;

if (N <= 1) {
    simpleN = false;
} else {
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            simpleN = false;
            break;
        }
    }
}

if (simpleN) {
    console.log(N + ' простe число.');
} else {
    console.log(N + ' не є простим числом.');
}
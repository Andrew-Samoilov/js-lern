console.log('- * Factorial * -');

function factorial(n) {
    if (n < 0) return 'Error! Value must be > 0';
    if (n > 10) return `too mach n=${n}`;

    if (n === 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(6));
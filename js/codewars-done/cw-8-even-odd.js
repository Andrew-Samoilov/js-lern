console.log(" -  * CodeWars * - ");
console.log();

function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
    // console.log(number % 2);
}

console.log(even_or_odd(2), "Even");
console.log(even_or_odd(7), "Odd");
console.log(even_or_odd(-42), "Even");
console.log(even_or_odd(-7), "Odd");
console.log(even_or_odd(0), "Even");
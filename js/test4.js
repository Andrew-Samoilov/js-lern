console.log("Open or Senior - codewars");
// codewars - open or senior
// 1а задача приблизно - допоможіть крікетному клубу розсортувати учасників. "Сеньйором" вважаєтья
// учасник старше 55 років і з кількістю "гандікапів" 7 (умовно, там чогось іншого). Інші - open.

function openOrSenior(age, handicap) {
    // варіант 1 - найпростіше в лоб
    // if (age > 54 && handicap > 6) {
    //     return "Senior";
    // } else {
    //     return "Open";
    // }
    return (age > 54 && handicap > 6) ? "Senior" : "Open";
}

console.log(openOrSenior(44, 32));
console.log(openOrSenior(55, 3));
console.log(openOrSenior(45, 1));
console.log(openOrSenior(55, 21));



for (let i = 2; i < 6; i++) {
    console.log(i);
}

const minSalary = 500;
const maxSalary = 5000;
const employees = 8;
let summ = 0;

for (let i = 0; i < employees; i++) {
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    summ += salary;
    console.log(`Зп робітника ${i} - ${salary}`)
}

console.log('Загальна сума ЗП', summ);

const min = 5;
const max = 12
let total = 0;

for (let i = min; i < max; i++) {
    if (i % 2 === 0) {
        total += i;
        console.log(i, 'total ', total);
    }
    console.log('elements ', i);
}

console.log('Sum ', total);


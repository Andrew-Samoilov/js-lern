console.log("test");

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

function openOrSenior(age, handicap) {
    if (age > 54 && handicap > 6) {
        return "Senior";
    } else {
        return "Open";
    }
}

console.log(openOrSenior(45, 12));
console.log(openOrSenior(55, 21));


// for (let index = 0; index < dna.length; index++) {
//     const element = dna[index];
// }

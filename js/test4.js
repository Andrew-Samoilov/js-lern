
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

function sumTwoSmallestNumbers(numbers) {
    let minN2 = numbers[1];
    let minN1 = numbers[0];

    for (let number of numbers) {
        minN1 > number ? (minN1 = number) : false;
    }

    for (let number of numbers) {
        number != minN1 && minN2 > number ? (minN2 = number) : false;
    }

    return minN1 + minN2;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
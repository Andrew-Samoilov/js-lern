console.log(" - * CodeWars. 2 smalest number * - ");
console.log();
console.log();


function sumTwoSmallestNumbers(numbers) {
    // const temp = [...numbers];
    // console.log('**', numbers);
    let minN2 = Math.max(...numbers);
    let minN1 = Math.max(...numbers) - 1;
    console.log(numbers);

    for (let number of numbers) {
        minN1 > number ? (minN1 = number) : false;
    }
    // перша придумана перевірка на то чи повторються цифри в умові
    let countMin1 = 0;
    for (let number of numbers) {
        if (minN1 === number) {
            countMin1 += 1;
            console.log('++', countMin1);
        }
    }

    if (countMin1 > 1) {
        console.log('***', minN1 * countMin1);
        return minN1 * countMin1;
    }

    for (let number of numbers) {
        number != minN1 && minN2 > number ? (minN2 = number) : false;
    }

    console.log('min1 ', minN1, 'min2 ', minN2, 'z=', minN1 + minN2);

    return minN1 + minN2;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77, 123, 247]));
console.log(sumTwoSmallestNumbers([510, 7, 7, 94, 248]));
// [10, 343445353, 3453445, 3453545353453]
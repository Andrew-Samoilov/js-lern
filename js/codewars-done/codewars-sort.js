console.log(" - * Code wars * - ");
console.log();
console.log();
console.log();

function descendingOrder(n) {
    
    // console.log("Number ", n);
    const result = 'z' + n;
    // const resultArray = Array.from(result);
    const resultArray = result.split("");
    // console.log(" Input resultArray ", resultArray);

    let sortIndicator = false;// індикатор відсортованості .
    do {
        sortIndicator = false;
        // console.log('--inside do while');
        for (let i = 1; i < resultArray.length; i++) {
            
            // console.log('---for inside');
            if (resultArray[i] < resultArray[i + 1]) {
                const element = resultArray[i];
                resultArray[i] = resultArray[i + 1];
                resultArray[i + 1] = element;
                sortIndicator = true;

                // console.log('---- if resultArray[i] < resultArray[i + 1]');
            }
            
        }

    } while (sortIndicator);
// console.log('-outside do while');
    
    
//... Сум, в такому виконанні алгоритим не працює при кількох однакових числах на вході 
    // let maxDigit = 0;
    // for (let i = 1; i < resultArray.length; i++) {
    //     const element = Number(resultArray[i]);
    //     // console.log(element);
    //     if (element > maxDigit) {
    //         maxDigit = element;
    //         // console.log(`Element ${element} більше`);
    //         resultArray.splice(1, 0, element);
    //         resultArray.splice(i + 1, 1);
    //         // console.log(" resultArray = ", resultArray);
    //     }
    // }

 
    resultArray.splice(0, 1);
    // console.log(" Output result array = ", resultArray.join(''));

    return Number(resultArray.join(''));
}

console.log(descendingOrder(1));
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(1234562789));
console.log(descendingOrder(1021));
console.log(descendingOrder(15));

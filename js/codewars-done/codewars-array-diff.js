console.log(" - * Code wars * - ");
console.log();
console.log();

// в best practice in Codewars its works через .фільтр, або ще якось зовсім на зараз не зрозуміло

function arrayDiff(a, b) {
    const arr1 = [...a];
    const arr2 = [...b];

    console.log('start', arr1, arr2);

    for (let i = 0; i < arr1.length; i++) {
        // console.log(`arr1[${i}]`, arr1[i]);

        for (let j = 0; j < arr2.length; j++) {
            // console.log(`arr2[${j}]`, arr2[j]);

            if (arr1[i] === arr2[j]) {
                // console.log(` +arr1`, arr1);
                // console.log(`+++--- arr1 ${i}, ${arr1[i]}=${arr2[j]} arr2 ${j}`);
                // console.log('-+arr1', arr1);
                arr1.splice(i, 1);
                // console.log(`---- arr1 ${i}, arr2 ${j}`, arr1[i], arr2[j]);
                // console.log(` +-arr1`, arr1);
                i--;
                // видаляючи елемент , для подальшої перевірки нам також потрібно зсувати індекс назад (--), покі не пройшовся сам як дебагер циклом - не поняв
            }
        }
        // console.log(`  /after arr1 `, arr1);
    }
    console.log('result', arr1);
    return arr1;
}

console.log(arrayDiff([1, 1, 1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 1, 2, 3], [1]));
console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([1, 8, 2], []));
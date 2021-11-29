console.log(" - * Code wars * - ");
console.log();
console.log();
console.log();

function descendingOrder(n){
  //... Сум, в такому виконанні алгоритим не працює при кількох однакових числах на вході 
    console.log("Number ", n);
    const result = 'z' + n;
    
    // const resultArray = Array.from(result);
    const resultArray = result.split("");
    console.log(" Вхідний resultArray ", resultArray);
    let maxDigit = 0;

    for (let i = 1; i < resultArray.length; i++) {
        const element = Number( resultArray[i]);
        // console.log(element);
        if (element > maxDigit) {
            maxDigit = element;
            // console.log(`Element ${element} більше`);
            resultArray.splice(1, 0, element);
            resultArray.splice(i+1, 1);
            // console.log(" resultArray = ", resultArray);
        }
    }
    resultArray.splice(0, 1);

    // console.log("result array = ", resultArray.join(''));
    
    return Number(resultArray.join(''));
}

console.log(descendingOrder(1));
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(1234562789));
console.log(descendingOrder(1021));
console.log(descendingOrder(15));



// function likes(names) {
//     names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }

// function likes(names) {
//   // TODO   6 kyu    Who likes it?
//   const namesArray = Array.from(arguments[0]);
//     // console.log(' names Array ', namesArray);
//     // console.log(' names Array length ', namesArray.length);

//     switch (namesArray.length) {
//         case 0:
//             return "no one likes this";
//             break;
//         case 1:      
//             return `${namesArray[0]} likes this`;
//             break;         
//         case 2: 
//             return `${namesArray[0]} and ${namesArray[1]} like this`;
//             break;
//         case 3: 
//             return `${namesArray[0]}, ${namesArray[1]} and ${namesArray[2]} like this`;
//             break;
//         default:
//             return `${namesArray[0]}, ${namesArray[1]} and ${namesArray.length-2} others like this`;
//             break;
//     }
// }

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Nik"]));
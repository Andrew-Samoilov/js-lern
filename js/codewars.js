console.log(" - * Code wars * - ");
console.log();
console.log();
console.log();


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

function likes(names) {
  // TODO   6 kyu    Who likes it?
  const namesArray = Array.from(arguments[0]);
    // console.log(' names Array ', namesArray);
    // console.log(' names Array length ', namesArray.length);

    switch (namesArray.length) {
        case 0:
            return "no one likes this";
            break;
        case 1:      
            return `${namesArray[0]} likes this`;
            break;         
        case 2: 
            return `${namesArray[0]} and ${namesArray[1]} like this`;
            break;
        case 3: 
            return `${namesArray[0]}, ${namesArray[1]} and ${namesArray[2]} like this`;
            break;
        default:
            return `${namesArray[0]}, ${namesArray[1]} and ${namesArray.length-2} others like this`;
            break;
    }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Nik"]));
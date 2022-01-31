console.log(" -  * CodeWars * - ");
console.log();
{
    function noSpace(x) {
        let res = [];
        for (let i = 0; i < x.length; i++) {
         if (x[i] != ' ')  res.push(x[i]);
        }
        return res.join('');
       }
       
       console.log(noSpace('8wq j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
       console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd')
       console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
}


{
    function findNeedle(haystack) {
        return 'found the needle at position ' + haystack.indexOf('needle');
    };


    var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
    var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
    var haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

    console.log(findNeedle(haystack_1), 'found the needle at position 3');
    console.log(findNeedle(haystack_2), 'found the needle at position 5');
    console.log(findNeedle(haystack_3), 'found the needle at position 30');
}

{
    function scrollingText(text) {
        // console.log(text);
        text = text.toUpperCase();
        const res = [];
        res.push(text);
        for (let i = 0; i < text.length - 1; i++) {
            // console.log(text.slice(i + 1), text.slice(0, i + 1));
            res.push(text.slice(i + 1) + text.slice(0, i + 1));
        }

        return res;
    }
    console.log(scrollingText("codewars"));
    console.log(scrollingText("abc"), ["ABC", "BCA", "CAB"]);
}

{
    function stringMerge(string1, string2, letter) {
        // console.log(string1, string2, letter);
        // console.log(string1.indexOf(letter), string2.indexOf(letter));
        // console.log(string1.slice(0, string1.indexOf(letter) + 1) + string2.slice(string2.indexOf(letter) + 1));
        return string1.slice(0, string1.indexOf(letter) + 1) + string2.slice(string2.indexOf(letter) + 1);

    }

    console.log(stringMerge("person", "here", "e"), "pere");
    console.log(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh");
    console.log(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
    console.log(stringMerge("12345654321", "123456789", "6"), "123456789");
    console.log(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
    console.log(stringMerge("incredible", "people", "e"), "increople");

}

{
    class SmallestIntegerFinder {
        findSmallestInt(args) {
            // console.log(args.sort((a, b) => a - b));
            return args.sort((a, b) => a - b)[0];
        }
    }

    let sif = new SmallestIntegerFinder();

    console.log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8);
    console.log(sif.findSmallestInt([78, 56, 232, 12, 18]), 12);
    console.log(sif.findSmallestInt([78, 56, 232, 412, 228]), 56);
    console.log(sif.findSmallestInt([78, 56, 232, 12, 0]), 0);
    console.log(sif.findSmallestInt([1, 56, 232, 12, 8]), 1);

}

{
    function removeChar(str) {
        let res = str.split('');
        res.shift();
        res.pop();
        // res = res.join('');
        // console.log(res);
        return res.join('');
    };
    // console.log(removeChar(str));
    console.log(removeChar('eloquent'), 'loquen');
    console.log(removeChar('country'), 'ountr');
    console.log(removeChar('person'), 'erso');
    console.log(removeChar('place'), 'lac');
    console.log(removeChar('ooopsss'), 'oopss');
}

console.log(" -  * Difference of Volumes of Cuboids * - ");
function findDifferenceWithComents(a, b) {
    if (a.reduce((previousValue, number) => previousValue * number) > b.reduce((previousValue, number) => previousValue * number)) {
        return a.reduce((previousValue, number) => previousValue * number) - b.reduce((previousValue, number) => previousValue * number);
    } else {
        b.reduce((previousValue, number) => previousValue * number) - a.reduce((previousValue, number) => previousValue * number);
    }
    return 0;
    // console.log(...a);

    console.log(a.reduce((previousValue, number) => previousValue * number));
    console.log(b.reduce((previousValue, number) => previousValue * number));

}

function findDifference(a, b) {
    return (a.reduce((previousValue, number) => previousValue * number) > b.reduce((previousValue, number) => previousValue * number))
        ? a.reduce((previousValue, number) => previousValue * number) - b.reduce((previousValue, number) => previousValue * number)
        : b.reduce((previousValue, number) => previousValue * number) - a.reduce((previousValue, number) => previousValue * number);

    return 0;
}

console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);


console.log(" -  * Is the string uppercase? * - ");
// Best practise :-)
String.prototype.isUpperCaseBestPractise = function () {
    return this.toUpperCase() === this.toString();
}

String.prototype.isUpperCase = function () {
    // console.log(this);
    for (let i = 0; i < this.length; i++) {
        if (this[i].toLowerCase() === this[i] && this[i] != ' ' && this[i] != '.' && this[i] != '#') {

            return false;
        }
        // console.log(this[i]);

    }
    return true;
    // your code here
}

console.log(`BOB WALKS HIS DOG EVERY DAY.`.isUpperCase());

console.log(" -  * List Filtering * - ");

function filter_list(l) {

    console.log(l.filter(Number.isInteger));


}
// console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]);
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);


console.log(" -  * Largest pair sum in array * - ");
// На диво довго промучився, 
function largestPairSumWithComents(numbers) {
    let res = Math.min(...numbers);
    // console.log(Math.max(...numbers));

    console.log(Math.max(...numbers));
    res = numbers[numbers.indexOf(Math.max(...numbers))];
    numbers[numbers.indexOf(Math.max(...numbers))] = Math.min(...numbers);
    console.log(Math.max(...numbers));
    res += numbers[numbers.indexOf(Math.max(...numbers))];

    return res;
}

function largestPairSum(numbers) {
    let res = Math.min(...numbers);
    res = numbers[numbers.indexOf(Math.max(...numbers))];
    numbers[numbers.indexOf(Math.max(...numbers))] = Math.min(...numbers);
    return res + numbers[numbers.indexOf(Math.max(...numbers))];
}

console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10);



console.log(" -  * Johnny * - ");
function greet(name) {

    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Johnny"), "Hello, my love!");

console.log(" -  * Summ Num * - ");
var summation = function (num) {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}

console.log(summation(1), 1);
console.log(summation(8), 36);

console.log(" -  * Elevator Distance * - ");
function elevatorDistance(array) {
    // console.log(array);
    let res = 0;

    for (let i = 0; i < array.length; i++) {
        // console.log('i ', array[i]);
        if (array[i] > array[i + 1]) {
            res += array[i] - array[i + 1];
            // console.log('r', array[i] - array[i + 1]);
        }
        if (array[i] < array[i + 1]) {
            res += array[i + 1] - array[i];
            // console.log('v', array[i + 1] - array[i]);
        }
    }
    return res;
}

console.log(elevatorDistance([7, 1, 7, 1]), 18);



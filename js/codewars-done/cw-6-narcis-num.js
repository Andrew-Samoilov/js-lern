console.log(" -  * CodeWars * Does my number look big in this? * - ");
console.log();

function narcissistic(value) {
    // let tempStr = String(value).split('');
    // console.log(value, 'length', String(value).length);
    // let num = Math.pow(tempStr[0], tempStr.length);
    // console.log(res);

    // let res = String(value).split('')
    //     .map(el => Math.pow(el, String(value).split('').length))
    //     .reduce((previousValue, number) => previousValue + number);


    // let res = tempStr.map(el => Math.pow(el, tempStr.length))
    //     .reduce((previousValue, number) => {
    //         return previousValue + number;
    //     }, 0);;

    return (String(value).split('')
        .map(el => Math.pow(el, String(value).split('').length))
        .reduce((previousValue, number) => previousValue + number) === value) ? true : false;
    // console.log(res);


    // return res;
}
console.log(narcissistic(7), true, "7 is narcissistic");
console.log(narcissistic(371), true, "371 is narcissistic");
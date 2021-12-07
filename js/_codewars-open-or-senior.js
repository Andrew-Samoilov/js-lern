console.log("Open or Senior - codewars");
// по вимогам кодеварса - НЕвирішив (
// codewars - open or senior
// 1а задача приблизно - допоможіть крікетному клубу розсортувати учасників. "Сеньйором" вважаєтья
// учасник старше 55 років і з кількістю "гандікапів" 7 (умовно, там чогось іншого). Інші - open.

function openOrSenior(data) {
    console.table(data)
    const [age, handicap] = data;
    console.log('-', data);

    for (const i of data) {
        console.log('--i', i.age);
    }

    // const rgb = [200, 255, 100];
    // const [red, green, blue] = rgb;

    // console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"


    let tempArr = [{
        age,
        handicap,
    }];
    tempArr = data;

    console.log('2', tempArr);
    // console.log('2', tempArr[2]);



    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
    // варіант 1 - найпростіше в лоб
    // if (age > 54 && handicap > 6) {
    //     return "Senior";
    // } else {
    //     return "Open";
    // }
    result = (age > 54 && handicap > 6) ? "Senior" : "Open";
    console.log(result);
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]));
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));
console.log(openOrSenior([]));

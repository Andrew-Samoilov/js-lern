console.log("Open or Senior - codewars");
// по вимогам кодеварса - НЕвирішив (
// codewars - open or senior
// 1а задача приблизно - допоможіть крікетному клубу розсортувати учасників. "Сеньйором" вважаєтья
// учасник старше 55 років і з кількістю "гандікапів" 7 (умовно, там чогось іншого). Інші - open.

function openOrSenior(age, handicap) {
    // варіант 1 - найпростіше в лоб
    // if (age > 54 && handicap > 6) {
    //     return "Senior";
    // } else {
    //     return "Open";
    // }
    return (age > 54 && handicap > 6) ? "Senior" : "Open";
}

console.log(openOrSenior(44, 32));
console.log(openOrSenior(55, 3));
console.log(openOrSenior(45, 1));
console.log(openOrSenior(55, 21));

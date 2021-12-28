console.log("Open or Senior - codewars");
// по вимогам кодеварса - НЕвирішив (
// codewars - open or senior
// 1а задача приблизно - допоможіть крікетному клубу розсортувати учасників. "Сеньйором" вважаєтья
// учасник старше 55 років і з кількістю "гандікапів" 7 (умовно, там чогось іншого). Інші - open.

function openOrSenior(data) {
    console.log(data);
    const res = [];
    for (let i = 0; i < data.length; i++) {
        res.push((data[i][0] > 54 && data[i][1] > 7) ? "Senior" : "Open");
    }
    return res;
}

// console.log(openOrSenior([(45, 12), (55, 21), (19, -2), (104, 20)]));
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]));
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));
console.log(openOrSenior([]));

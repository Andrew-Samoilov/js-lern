console.log(' -  * Bnc API *  * - ');

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json", 'Access-Control-Allow-Headers: *');

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    redirect: 'follow'
};
// let res = '';
fetch("https://testnet.binance.vision/api/v3/ticker/24hr", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// fetch("https://testnet.binance.vision/api/v3/ticker/24hr", requestOptions)
//     .then(response => response.text())
//     .then(result => res = result)
//     .catch(error => console.log('error', error));

// console.log(res);
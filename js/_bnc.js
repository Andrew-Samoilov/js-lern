console.log(' -  * Bnc API *  * - ');

var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://testnet.binance.vision/api/v3/ticker/24hr',
    headers: {
        'Content-Type': 'application/json'
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

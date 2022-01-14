console.log(" -  * CodeWars * Extract the domain name from a URL * - ");
console.log();

function domainName(url) {
    console.log(url);
    // http://www.
    // https://www.

    if (url.slice(0, 11).toLowerCase() === 'http://www.') {
        return url.slice(11, url.indexOf('.', [11]));
    }
    if (url.slice(0, 12).toLowerCase() === 'https://www.') {
        return url.slice(12, url.indexOf('.', [12]));
    }

    if (url.slice(0, 4).toLowerCase() === 'www.') {
        // console.log(url.slice(0, 4));
        // console.log(url.indexOf('.r', [4]));
        // console.log(url.slice(4, url.indexOf('.', [4])));
        return url.slice(4, url.indexOf('.', [4]));
    }
    if (url.slice(0, 7).toLowerCase() === 'http://') {
        return url.slice(7, url.indexOf('.', [7]));
    }
    if (url.slice(0, 8).toLowerCase() === 'https://') {
        return url.slice(8, url.indexOf('.', [8]));
    }

    return url.slice(0, url.indexOf('.'));
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("youtube.com"), "youtube");
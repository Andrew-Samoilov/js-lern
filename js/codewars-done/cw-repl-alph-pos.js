console.log(" -  * CodeWars * Replace With Alphabet Position * - ");
console.log();


function alphabetPositionWithComents(text) {

    function textToNum(txt) {
        txt = txt.toLowerCase();
        // console.log(txt);
        switch (txt) {
            case 'a':
                txt = '1';
                break;
            case 'b':
                txt = '2';
                break;
            case 'c':
                txt = '3';
                break;
            case 'd':
                txt = '4';
                break;
            case 'e':
                txt = '5';
                break;
            case 'f':
                txt = '6';
                break;
            case 'g':
                txt = '7';
                break;
            case 'h':
                txt = '8';
                break;
            case 'i':
                txt = '9';
                break;
            case 'j':
                txt = '10';
                break;
            case 'k':
                txt = '11';
                break;
            case 'l':
                txt = '12';
                break;
            case 'm':
                txt = '13';
                break;
            case 'n':
                txt = '14';
                break;
            case 'o':
                txt = '15';
                break;
            case 'p':
                txt = '16';
                break;
            case 'q':
                txt = '17';
                break;
            case 'r':
                txt = '18';
                break;
            case 's':
                txt = '19';
                break;
            case 't':
                txt = '20';
                break;
            case 'u':
                txt = '21';
                break;
            case 'v':
                txt = '22';
                break;
            case 'w':
                txt = '23';
                break;
            case 'x':
                txt = '24';
                break;
            case 'y':
                txt = '25';
                break;
            case 'z':
                txt = '26';
                break;

            default:
                txt = '';
                break;
        }
        return (txt);
    }

    let result = [];
    text = text.split(' ').join('')
    console.log(text);

    for (let i = 0; i < text.length; i++) {
        // console.log(textToNum(text[i]));
        if (textToNum(text[i])) {
            result.push(textToNum(text[i]));
        }
    }

    return result.join(' ');
}

function alphabetPosition(text) {

    function textToNum(txt) {
        txt = txt.toLowerCase();
        switch (txt) {
            case 'a':
                txt = '1';
                break;
            case 'b':
                txt = '2';
                break;
            case 'c':
                txt = '3';
                break;
            case 'd':
                txt = '4';
                break;
            case 'e':
                txt = '5';
                break;
            case 'f':
                txt = '6';
                break;
            case 'g':
                txt = '7';
                break;
            case 'h':
                txt = '8';
                break;
            case 'i':
                txt = '9';
                break;
            case 'j':
                txt = '10';
                break;
            case 'k':
                txt = '11';
                break;
            case 'l':
                txt = '12';
                break;
            case 'm':
                txt = '13';
                break;
            case 'n':
                txt = '14';
                break;
            case 'o':
                txt = '15';
                break;
            case 'p':
                txt = '16';
                break;
            case 'q':
                txt = '17';
                break;
            case 'r':
                txt = '18';
                break;
            case 's':
                txt = '19';
                break;
            case 't':
                txt = '20';
                break;
            case 'u':
                txt = '21';
                break;
            case 'v':
                txt = '22';
                break;
            case 'w':
                txt = '23';
                break;
            case 'x':
                txt = '24';
                break;
            case 'y':
                txt = '25';
                break;
            case 'z':
                txt = '26';
                break;

            default:
                txt = '';
                break;
        }
        return (txt);
    }

    let result = [];
    text = text.split(' ').join('')

    for (let i = 0; i < text.length; i++) {
        if (textToNum(text[i])) {
            result.push(textToNum(text[i]));
        }
    }
    return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");

console.log(alphabetPosition("The narwhal bacons at midnight."));
console.log("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");


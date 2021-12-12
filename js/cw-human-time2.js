console.log(" - * Code wars.Human Readable Time * - ");
console.log();
console.log();

function humanReadable(seconds) {
    let how = 0;
    function howCount(sec) {
        // рахуємо години
        if (sec < 3600) { return '00' }
        how = (seconds - (seconds % 3600)) / 3600;
        // console.log('Hour-', how);
        if (how < 10) {
            return `0${how}`
        }
        return how;
    }


    // console.log('Hour % 3600', (seconds % 3600));



    return `${howCount(seconds)}:`;
}



console.log('00:00:00|', humanReadable(0));
// console.log('00:00:59|', humanReadable(59));
// console.log('00:01:00|', humanReadable(60));
// console.log('00:59:59|', humanReadable(3599));
// console.log('01:00:00|', humanReadable(3601));
console.log('12:34:56|', humanReadable(45296));
// console.log('24:00:00|', humanReadable(86400));
console.log('99:59:59|', humanReadable(359999));
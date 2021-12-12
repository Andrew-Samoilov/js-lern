console.log(" - * Code wars.Human Readable Time * - ");
console.log();
console.log();

function humanReadable(seconds) {
    console.log('1| Sec', seconds);
    function hourCount(sec) {
        // рахуємо години
        let hour = 0;
        if (sec < 3600) { return '00' }
        hour = (seconds - (seconds % 3600)) / 3600;
        // console.log('Hour-', hour);
        if (hour < 10) {
            seconds -= hour * 3600;
            console.log('2| Sec - ', seconds);
            return `0${hour}`
        }
        seconds -= hour * 3600;
        console.log('3| Sec -', seconds);
        return hour;
    }

    function minCount(sec) {
        // рахуємо хвилини
        let min = 0;
        console.log('4| min', sec);
        if (sec < 60) { return '00' }
        min = ((seconds - (seconds % 60)) / 60);
        console.log('5| Min-', min);
        if (min < 10) {
            seconds -= min * 60;
            console.log('6| Min - ', seconds);
            return `0${min}`;
        }
        seconds -= min * 60;
        console.log('7| Min - ', seconds);
        return min;
    }

    function secCount(sec) {
        // cекунди
        console.log('8| sec', sec);
        if (sec === 0) { return '00' }
        if (sec < 10) {
            console.log('9| Min - ', sec);
            return `0${sec}`;
        }
        console.log('0| Min - ', sec);
        return sec;
    }

    return `${hourCount(seconds)}:${minCount(seconds)}:${secCount(seconds)}`;
}



console.log('00:00:00|', humanReadable(0));
// console.log('00:00:59|', humanReadable(59));
// console.log('00:01:00|', humanReadable(60));
console.log('00:59:59|', humanReadable(3599));
// console.log('01:00:00|', humanReadable(3600));
console.log('12:34:56|', humanReadable(45296));
// console.log('24:00:00|', humanReadable(86400));
console.log('99:59:59|', humanReadable(359999));
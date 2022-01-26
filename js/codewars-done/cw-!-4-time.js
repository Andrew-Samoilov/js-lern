function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    let res = [];
    console.log('1| Sec', seconds);

    function yearCount(sec) {
        let year = 0;
        if (sec < 31536000) { return '' }
        year = (seconds - (seconds % 31536000)) / 31536000;
        seconds -= year * 31536000;
        console.log('12| Year -', seconds);
        if (year > 1) return year + ' years';
        if (year === 1) return year + ' year';
    }

    function dayCount(sec) {
        let day = 0;
        if (sec < 86400) { return '' }
        day = (seconds - (seconds % 86400)) / 86400;

        seconds -= day * 86400;
        console.log('11| Day -', seconds);
        if (day > 1) return day + ' days';
        if (day === 1) return day + ' day';
    }

    function hourCount(sec) {
        // рахуємо години
        let hour = 0;
        if (sec < 3600) { return '' }
        hour = (seconds - (seconds % 3600)) / 3600;
        // console.log('Hour-', hour);
        seconds -= hour * 3600;
        console.log('3| How -', seconds);
        // return hour + ' how';
        if (hour > 1) return hour + ' hours';
        if (hour === 1) return hour + ' hour';
    }

    function minCount(sec) {
        // рахуємо хвилини
        let min = 0;
        console.log('4| Min', sec);
        if (sec < 60) { return '' }
        min = ((seconds - (seconds % 60)) / 60);
        console.log('5| Min-', seconds);
        seconds -= min * 60;
        console.log('7| Min - ', seconds);
        // return min + ' min';
        if (min > 1) return min + ' minutes';
        if (min === 1) return min + ' minute';
    }

    function secCount(sec) {
        // cекунди
        console.log('8| Sec', sec);
        if (sec === 0) { return '' }
        console.log('0| Sec - ', seconds);
        if (sec > 1) return sec + ' seconds';
        if (sec === 1) return sec + ' second';
    }
    let yearTemp = yearCount(seconds);
    if (yearTemp) res.push(yearTemp);
    let dayTemp = dayCount(seconds);
    if (dayTemp) res.push(dayTemp);
    let howTemp = hourCount(seconds);
    if (howTemp) res.push(howTemp);
    let minTemp = minCount(seconds);
    if (minTemp) res.push(minTemp);
    let secTemp = secCount(seconds);
    if (secTemp) res.push(secTemp);
    console.log(`13| `, res);

    switch (res.length) {
        case 2:
            res.splice(1, 0, ' and ');
            break;
        case 3:
            res.splice(1, 0, ', ');
            res.splice(3, 0, ' and ');
            break;
        case 4:
            res.splice(1, 0, ', ');
            res.splice(3, 0, ', ');
            res.splice(5, 0, ' and ');
            break;
        case 5:
            res.splice(1, 0, ', ');
            res.splice(3, 0, ', ');
            res.splice(5, 0, ', ');
            res.splice(7, 0, ' and ');
            break;
        default:
            console.log('14| default');
            break;
    }

    console.log(`14| `, res);
    // res = `${yearTemp}${dayTemp}${howTemp}${minTemp}${secTemp}`;

    return res.join('');
}



console.log(' |', formatDuration(0));
// console.log('00:00:59|', formatDuration(59));
// console.log('00:01:00|', formatDuration(60));
// console.log('00:59:59|', formatDuration(3599));
// console.log('01:00:00|', formatDuration(3600));
// console.log('12:34:56|', formatDuration(45296));
// console.log('24:00:00|', formatDuration(86400));
// console.log('99:59:59|', formatDuration(359999));
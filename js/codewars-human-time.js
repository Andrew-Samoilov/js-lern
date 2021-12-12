console.log(" - * Code wars.Human Readable Time * - ");
console.log();
console.log();

function humanReadable(seconds) {
    let result = '';
    console.log('In second', seconds);

    let how = (seconds - (seconds % 3600)) / 3600;
    console.log(' hours ', how);

    if (seconds >= 3600) {
        if (how < 10) { result += '0'; }
        result += how;
    }
    if (how < 0) { result += '00'; }

    seconds -= (how * 3600);
    if (seconds === 0) { result += ':00' };
    console.log('sec-hours', seconds);

    let min = (seconds - (seconds % 60)) / 60;
    if (seconds > 60) {
        result += ':';
        if (min === 0) { result += '00' } else if (min < 10) { result += '0' + min; } else {
            result += min;
        }
    }
    seconds -= (min * 60);
    console.log('sec-hours-min', seconds);
    if (seconds === 0) { result += ':00' } else if (seconds < 10) {
        result = ':0' + seconds;
    } else {
        result = result + ':' + seconds;
    }
    return result;
}

// function humanReadable(seconds) {
//     console.log('In', seconds);

//     function resSec(secSec) {
//         let resultSeconds = seconds % 60;
//         return (resultSeconds < 10) ? `0${resultSeconds}` : `${resultSeconds}`;
//     }

//     function resMin(secSec) {
//         let resultMinutes = (seconds - (seconds % 60)) / 60;
//         return (resultMinutes < 10) ? `0${resultMinutes}` : `${resultMinutes}`;
//     }

//     if (seconds < 60) {
//         // console.log('func res sec ', resSec(seconds));
//         return `00:00:${resSec(seconds)}`;
//     } else if (seconds < 3600) {
//         console.log(`!!!h:00:${resMin(seconds)}:${resSec(seconds)}`);
//         return `h:00:${resMin(seconds - 3600)}:${resSec(seconds)}`;
//     } else {
//         let resHours = (seconds - (seconds % 3600)) / 3600;
//         console.log(` res  how `, resHours);
//         console.log(` res  min `, (seconds - resHours) % 3600);
//         return `${resHours}:${resMin(seconds - 3600)}:${resSec(seconds)}`;

//         // console.log(`!!!h:00:${resMin(seconds)}:${resSec(seconds)}`);
//     }
//     // console.log(`how:'${resultHours} min:'${resultMinutes} sec:'${resultSeconds}`);
//     // return result;
// }

// console.log('00:00: 00|', humanReadable(0));
// console.log('00:00:59|', humanReadable(59));
console.log('00:01:00|', humanReadable(60));
console.log('00:59:59|', humanReadable(3599));
// console.log('01:00:00|', humanReadable(3600));
// console.log('12:34:56|', humanReadable(45296));
// console.log('24:00:00|', humanReadable(86400));
// console.log('99:59:59|', humanReadable(359999));


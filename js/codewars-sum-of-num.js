console.log(" - * Code wars. Sum of numbers from 0 to N * - ");
console.log();
console.log('--');


var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        if (count < 0) {
            return `${count}<0`;
        };
        if (count === 0) {
            return `0=0`;
        };

        let resultStr = '0';
        let resultInt = 0;
        // console.log(count);
        for (let i = 1; i < count + 1; i++) {
            resultStr += `+${i}`;
            resultInt += i;
            // console.log(resultStr, resultInt);
        }
        return resultStr + ' = ' + resultInt;
        // for
        //while
    };

    return SequenceSum;
})();


console.log(SequenceSum.showSequence(-5), "| -5");
console.log(SequenceSum.showSequence(0), "| 00 = 0");
console.log(SequenceSum.showSequence(6), " | 0+1+2+3+4+5+6 = 21");
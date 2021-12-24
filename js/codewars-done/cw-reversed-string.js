console.log(" -  * Codewars. Reversed Strings * - ");
console.log();

function solution1(str) {
    // const reversStr  = [...str].reverse().join('');
    // console.log(reversStr );
    return [...str].reverse().join('');
}

console.log(solution1('hello'), 'olleh');


function solution2(str) {
    let reversStr = '';

    for (let i = str.length - 1; i > -1; i--) {
        // console.log(` i ${i}, ${str[i]}`);
        reversStr += str[i];
    }
    return reversStr;
}

console.log(solution2('hello'), 'olleh');


function solutionRecursionWithComennt(str) {
    console.log(str);
    if (str === '') {
        console.log('end');
        return '';
    } else {
        console.log(str.substr(1));
        console.log(str.charAt(0));
        return solutionRecursion(str.substr(1)) + str.charAt(0);
    }
}


function solutionRecursion(str) {
    if (str === '') {
        return '';
    } else {
        return solutionRecursion(str.substr(1)) + str.charAt(0);
    }
}

console.log(solutionRecursion('hello'), 'olleh');


function solutionRecursionTernary(str) {
    return (str === '') ? '' : solutionRecursion(str.substr(1)) + str.charAt(0);
}

console.log(solutionRecursionTernary('hello'), 'olleh');
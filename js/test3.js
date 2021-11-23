// function formatMessage(message, maxLength) {
//     let result;
//     console.log(message.length);
//     console.log(message);
//     console.log(maxLength);
//     result = (message.length > maxLength) ? message.slice(0, maxLength) + '...' : message;
//      return result;
//  }

// console.log(formatMessage("Cu", 23));
// console.log(formatMessage("Curabitur ligula sapien", 2));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 51));


function checkForSpam(message) {
    let result;
    // Change code below this line
    result = message.toUpperCase().includes("SALE") || message.toUpperCase().includes("SPAM");

    // Change code above this line
    return result;
}

console.log(checkForSpam("adsfrwerwrwer"));
console.log(checkForSpam("adsf spam rwerwrwer"));
console.log(" - * test5 * - ");
console.log();
console.log();

function numberToString(num) {
    // Return a string of the number here!
    // console.log((num + ' ').trim());
    return (num + ' ').trim();
}

console.log(numberToString(16545));
console.log();


// from home work
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log('keys', keys);
// console.log('values', values);

// from home work
const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
}

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const {
//     today: {
//         high: highToday,
//         low: lowToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: {
//         high: highTomorrow,
//         low: lowTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;

// ---------------

// Change code below this line
function calculateMeanTemperature(forecast) {
    const {
        today: {
            low: todayLow,
            high: todayHigh },
        tomorrow: {
            low: tomorrowLow,
            high: tomorrowHigh }
    } = forecast;

    // const todayLow = forecast.today.low;
    // const todayHigh = forecast.today.high;
    // const tomorrowLow = forecast.tomorrow.low;
    // const tomorrowHigh = forecast.tomorrow.high;

    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//     const newData = { completed, category, priority, ...data }

//     return newData;
//     // Change code above this line
// }

// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({}));
// ----------

// function addOverNum(firstParam, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > firstParam) { total += arg; }
//     }

//     return total;
//     // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// Change code below this line
// function findMatches(arr1 = [], ...arr2) {
//     console.log(`Start, arr1 ${arr1}, arr2 ${arr2}`);
//     const matches = []; // Don't change this line
//     console.log(matches);
//     // matches.push(arr1[0]);

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 matches.push(arr1[i]);
//             }
//         }
//     }
//     // Change code above this line
//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
        // Change code below this line
        // this.books.indexOf(oldName);
        // console.log('index of', this.books.indexOf(oldName))

        this.books.splice(this.books.indexOf(oldName), 1, newName);
        // Change code above this line
    },
};



// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     // Change code above this line
// };

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//         // Change code above this line
//     },
// };


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions);
// -----


console.log(' -  * test * - '); // console.log(' -  * CodeWars *  * - ');
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(users => users.age >= minAge && users.age <= maxAge);
// const getUsersWithFriend = (users, friendName) => users.filter(users => users.friends.includes(friendName));
// const getFriends = (users) => (users.flatMap(users => users.friends))
//     .filter((course, index, array) => array.indexOf(course) === index);
// const bookWithTitle = books.find((books) => books.title === BOOK_TITLE);
// const bookByAuthor = books.find((books) => books.author === AUTHOR);
// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const totalPlayTime = playtimes.reduce((previousValue, number) => { return previousValue + number; }, 0);
// const totalScore = students.reduce((total, student) => {    return total + student.score;}, 0);
// const calculateTotalBalance = users => users.reduce((total, user) =>
//     total + user.balance, 0);

const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]

// Change code below this line
const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);


// Change code above this line

console.log(getTotalFriendCount(users), 14);
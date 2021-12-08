console.log(" - * CodeWars. Friend or Foe ? * - ");
console.log();
console.log();

function friend(friends) {
    //your code here
    const result = [];

    for (let i = 0; i < friends.length; i++) {
        // console.log(' - ', friends[i]);
        if (friends[i].length === 4) {
            result.push(friends[i]);
        }
    }

    return result;
}


console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log();
console.log();

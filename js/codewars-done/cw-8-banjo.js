function areYouPlayingBanjo(name) {
    // ternary
    return name[0].toUpperCase() == 'R' ? name = (name + " plays") : name = (name + " does not play") + " banjo";
    // звичайний іф
    // if (name[0].toUpperCase() == 'R') {
    //     return (name + " plays banjo");
    // } else {
    //     return (name + " does not play banjo");
    // }

}

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");
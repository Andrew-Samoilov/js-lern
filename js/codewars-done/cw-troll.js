console.log(" Disemvowel Trolls ");

function disemvowel(str) {
    let vavel = ['e', 'u', 'i', 'o', 'a'];
    console.log('Str', str);
    return [...str].filter(leter => vavel.indexOf(leter.toLowerCase()) === -1).join('');

}

console.log(disemvowel('This website is for losers LOL!'));
console.log("Ths wbst s fr lsrs LL!||");
console.log(disemvowel(`No offense but, Your writing is among the worst I've ever read`));
console.log(`"N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"||`);


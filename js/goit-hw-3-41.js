console.log(' * / at The Old Toad \\ *');
console.log();

const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        const tempPotion = Object.values(this.potions);
        console.log('++ tempPotion', tempPotion);

        this.potions.push(newPotion);
        // console.log('+++ add potion', newPotion);
        return `Potion ${newPotion.name} is added in your inventory!`;
        // else {
        //     this.potions.push(newPotion);
        //     console.log('+++ add potion', newPotion);
        // }

    }



    // if (i.name !== newPotion) {
    //     this.potions.push(newPotion);
    //     console.log('+++ add potion', newPotion);
    // } else {
    //     return `Error! Potion ${newPotion} is already in your inventory!`;
    // }




    // if (this.potions.name.includes(this.newPotion.name)) {
    //     return `Error! Potion ${ newPotion } is already in your inventory!`;
    // }

    // this.potions.push(newPotion);

    // removePotion(potionName) {
    //     const potionIndex = this.potions.indexOf(potionName);

    //     if (potionIndex === -1) {
    //         return `Potion ${ potionName } is not in inventory!`;
    //     }

    //     this.potions.splice(potionIndex, 1);
    // },
    // updatePotionName(oldName, newName) {
    //     const potionIndex = this.potions.indexOf(oldName);

    //     if (potionIndex === -1) {
    //         return `Potion ${ oldName } is not in inventory!`;
    //     }

    //     this.potions.splice(potionIndex, 1, newName);
    // },
    // Change code above this line
};


console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 610 }));
console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
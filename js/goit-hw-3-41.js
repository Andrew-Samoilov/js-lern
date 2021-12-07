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
        const newPotionsArray = [];
        // console.log('+ newPotionsArray', ...newPotionsArray);

        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                // console.error(`Error! Potion "${newPotion.name}" is already in your inventory!`);
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
            // Додаємо старе зілля в новий масив
            newPotionsArray.push(potion);
            // console.log(`Potion ${potion.name} is added in your inventory!`);
        }
        // додаємо нове зілля в масив
        newPotionsArray.push(newPotion);
        // console.log('+ after newPotionsArray ', ...newPotionsArray);
        this.potions = newPotionsArray;
    },
    // if (this.potions.name.includes(this.newPotion.name)) {
    //     return `Error! Potion ${ newPotion } is already in your inventory!`;
    // }

    removePotion(potionName) {
        const newPotionsArray = [];
        // console.log('+ remove newPotionsArray', newPotionsArray);
        for (const potion of this.potions) {
            if (potion.name !== potionName) {
                newPotionsArray.push(potion);
            }
        }
        // console.log('+ after remove newPotionsArray ', ...newPotionsArray);
        this.potions = newPotionsArray;
        //     const potionIndex = this.potions.indexOf(potionName);
        //     if (potionIndex === -1) {
        //         return `Potion ${ potionName } is not in inventory!`;
        //     }
        //     this.potions.splice(potionIndex, 1);
    },

    updatePotionName(oldName, newName) {
        const newPotionsArray = [];
        console.log('+ old new name ', oldName, newName);
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
                console.log('++ old new name ', oldName, newName);

                // newPotionsArray.push(potion);
            }
        }


        //     const potionIndex = this.potions.indexOf(oldName);
        //     if (potionIndex === -1) {
        //         return `Potion ${ oldName } is not in inventory!`;
        //     }
        //     this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
};


// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 610 }));
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("adrfaadfg"));
console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
console.table(atTheOldToad.getPotions());
console.log();
console.log();

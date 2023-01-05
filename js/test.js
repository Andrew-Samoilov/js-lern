console.log(' -  * test * - '); // console.log(' -  * CodeWars *  * - ');

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) { this.potions.push(potionName); },
//     removePotion(potionName) { this.potions.splice(this.potions.indexOf(potionName), 1); },
//     updatePotionName(oldName, newName) { this.potions.splice(this.potions.indexOf(oldName), 1, newName); },
// };

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions, ["Speed potion", "Polymorth", "Stone skin"]);
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this;
    },
    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                // console.log('!!!', potion.name);
                return `Error! Potion ${potion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        let potionIndex = -1;
        for (let index = 0; index < this.potions.length; index++) {
            if (this.potions[index].name === potionName) {
                console.log('!!!', potionName);
                potionIndex = index;
            }
        }
        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }
        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                console.log('!!!', oldName, newName);
                potion.name = newName;
            }
        }
        return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
};

console.log('getPotions ', atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
console.log(atTheOldToad.removePotion('Speed potio11n'));
// console.log('updatePotionName ', atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// console.log('addPotion ', atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(`!!!Error! Potion Stone skin is already in your inventory!`);
// console.log('getPotions ', atTheOldToad.getPotions());
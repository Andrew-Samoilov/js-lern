console.log(" -  * CodeWars *  * - ");
console.log();

let Position = {
    high: 'h',
    low: 'l'
}

class Warrior {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }
    attack(enemy, position) {
        if (enemy.block != position) {
            let damage = position == Position.high ? 10 : 5;
            // if enemy is not blocking at all then give more damage
            if (!enemy.block) {
                damage += 5;
            }
            setHealth.call(enemy.health - damage);
        }
    }
}


// private functions
class setHealth {
    constructor(value) {
        this.health = Math.max(0, value);
        if (this.health == 0) {
            this.deceased = true;
            this.zombie = false;
        }
        else if (this.deceased) {
            this.zombie = true;
        }
    }
}

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

ninja.block = Position.high;
samurai.attack(ninja, Position.low);


// describe("First attack", function () {
//     ninja = new Warrior('Hanzo Hattori');
//     samurai = new Warrior('Ryōma Sakamoto');

//     samurai.block = 'l';
//     ninja.attack(samurai, 'h');
//     it("Even the brave Ryōma Sakamoto was easily hit; in the full test we would better call the best japanese swordsman ever", function () {
//         Test.assertEquals(samurai.health, 90, 'Expected samurai health to equal 90, instead got ' + (samurai.health).toString())
//     })
// })


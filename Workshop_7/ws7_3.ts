class Character {
    constructor (public name: string, public health: number, public level: number) {}

    public takeDamage(damage: number) {
        this.health -= damage;
        if (this.health > 0) {
            console.log(`${this.name}: -${damage} HP \nHP remaining: ${this.health}`)
        } else {
            console.log(`${this.name} has defeated`);
        }
    }
}

class Mage extends Character {
    constructor (public name: string,public health: number,public level: number, private mana: number) {
        super(name, health, level);
    }

    Attack(target: Character, damage: number) {
        if (this.mana >= 35) {
            console.log(`${this.name} cast a spell to attack ${target.name}!`);
            this.mana -= 35;
        } else {
            console.log("Not enough mana!");
        }
        target.takeDamage(damage);
    }
}

class Warrior extends Character {
    constructor (public name: string,public health: number, public level: number, private stamina: number) {
        super(name, health, level);
    }

    Attack(target: Character, damage: number) {
        if (this.stamina >= 50) {
            console.log(`${this.name} swing a sword to attack ${target.name}!`);
            this.stamina -= 50;
        } else {
            console.log("Not enough stamina!");
        }
        target.takeDamage(damage);
    }
}

const mage1 = new Mage("Snape", 6230, 99, 500);
const warrior1 = new Warrior("Kirito", 9800, 99, 600);

mage1.Attack(warrior1, 600);


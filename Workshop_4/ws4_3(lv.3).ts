//Level 3: Interaction Between Objects
class Hero {
    constructor(public name: string, public HP: number, public ATK: number) {
    }

    attack (target: Hero): void {
        if (this.HP <= 0) {
            console.log(`${this.name} cannot attack because they are defeated.`);
            return;
        }
        if (target.HP <= 0) {
            console.log(`${target.name} is already defeated.`);
            return;
        }
        target.HP -= this.ATK;
        console.log(`${this.name} attacks ${target.name} for ${this.ATK} damage!\n${target.name}'s remaining HP: ${Math.max(target.HP, 0)}`);
        if (target.HP <= 0) {
            console.log(`${target.name} has been defeated.`);
        }
    }
}

const hero1 = new Hero("Archer", 100, Math.floor(Math.random() * 20) + 15);
const hero2 = new Hero("Knight", 150, Math.floor(Math.random() * 15) + 5);

while (hero1.HP > 0 && hero2.HP > 0) {
    hero1.attack(hero2);
    if (hero2.HP > 0) {
        hero2.attack(hero1);
    }
}
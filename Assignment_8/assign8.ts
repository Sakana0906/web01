class Monster {
    constructor (public name: string, public health: number, public damage: number) {}

    attack() {
        console.log(`${this.name} deals ${this.damage} damage to other monsters.`);
    }
}

class FireMonster extends Monster {
    constructor (public name: string, public health: number, public damage: number) {
        super(name, health, damage);
    }

    attack() {
        console.log(`${this.name} deals ${this.damage} fire damage to other monsters.`);
    }
}

class WaterMonster extends Monster {
    constructor (public name: string, public health: number, public damage: number) {
        super(name, health, damage);
    }

    attack() {
        console.log(`${this.name} deals ${this.damage} water damage to other monsters.`);
    }
}

class GrassMonster extends Monster {
    constructor (public name: string, public health: number, public damage: number) {
        super(name, health, damage);
    }

    attack() {
        console.log(`${this.name} deals ${this.damage} grass damage to other monsters.`);
    }
}

function BattleArena(m: Monster) {
    m.attack();
}

const monsters: Monster[] = [new FireMonster("Ifrit", 5000, 300), new WaterMonster("Ivy", 4500, 350), new GrassMonster("Evelyn", 6000, 200)];
monsters.forEach(m => BattleArena(m));
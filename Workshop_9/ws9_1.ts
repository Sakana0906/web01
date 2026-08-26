abstract class Appliance {
    constructor (public brand: string) {}

    abstract turnOn(): string;
}

class Washingmachine extends Appliance {
    constructor (public brand: string) {
        super(brand);
    }

    turnOn(): string {
        return `Washing machine has turned on`;
    }
}

class Refrigerator extends Appliance {
    constructor (public brand: string) {
        super(brand);
    }

    turnOn(): string {
        return `Refrigerator has turned on`;
    }
}

const apps: Appliance[] = [new Washingmachine("Mitsubishi"), new Refrigerator("Toshiba")];
apps.forEach(a => {
    console.log(`${a.brand} ${a.turnOn()}`);
});
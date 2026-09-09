class Appliance {
    constructor (public brand: string, public power: number) {}
    
    displayInfo(): void {
        console.log(`Brand: ${this.brand}\nPower: ${this.power} watt`);
    }
}

class WashingMachine extends Appliance {
    constructor (public brand: string, public power: number, public capacity: number) {
        super(brand, power);
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}\nPower: ${this.power} watt\nCapacity: ${this.capacity} kg`);
    }
}

const app1 = new WashingMachine("Mitsubishi", 200, 5);

app1.displayInfo();
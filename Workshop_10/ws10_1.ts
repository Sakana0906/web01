class Engine {
    constructor (private type: string) {}
    
    startEngine(): void {
        console.log(`Engine(${this.type}) started`);
    }

    stopEngine(): void {
        console.log(`Engine(${this.type}) stopped`);
    }

    get Type(): string {
        return this.type;
    }
}

class Battery {
    constructor (private capacity: number) {}

    charge(): void {
        console.log(`Battery remaining ${this.capacity}`);
        this.capacity = 100;
        console.log(`Battery charged, remaining ${this.capacity}`);
    }

    showStatus(): void {
        console.log(`Battery remaining ${this.capacity}`);
    }
}

class Car {
    private engine: Engine;
    private battery: Battery;
    constructor (type: string, capacity: number) {
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }

    startCar(): void {
        this.engine.startEngine();
    }

    stopCar(): void {
        this.engine.stopEngine();
    }

    showCarInfo(): void {
        console.log(`Car spec:\nEngine: ${this.engine.Type}`);
        this.battery.showStatus();
    }

    chargeBattery(): void {
        this.battery.charge();
    }
}

const car1 = new Car("3.0L V6 Twin-Turbo", 50);
car1.showCarInfo();
car1.startCar();
car1.chargeBattery();
car1.stopCar();
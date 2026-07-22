class Thermostat {
    private _temperature : number = 25;

    get temperature(): number {
        return this._temperature;
    }

    set temperature(value: number) {
        if (!(value >= 15 && value <= 30)) {
            console.error(`Error: Temperature is out of range(15 ํC - 30 ํC).`)
        }
        this._temperature = value;
    }
}

const thermo1 = new Thermostat();
console.log(thermo1.temperature);
thermo1.temperature = 10;
console.log(thermo1.temperature);
thermo1.temperature = 28;
console.log(thermo1.temperature);
class WeatherStation {
    private _celsius : number = 0;

    constructor (c : number) {
        this._celsius = c;
    }

    get fahrenheit() : number {
        return (this._celsius * 9/5) + 32;
    }

    set fahrenheit(f : number) {
        const celsius = (f - 32)* 5/9;
        if (celsius < -459) {
            console.log("Temperature cannot below absolute zero");
        } else {
            this._celsius = celsius;
        }
    }

    get celsius(): number {
        return this._celsius;
    }

    set celsius(c : number) {
        const celsius = c;
        if (celsius < -273) {
            console.log("Temperature cannot below absolute zero");
        } else {
            this._celsius = celsius;
        }
    }

}

const station1 = new WeatherStation(0);
console.log(`Celsius: ${station1.celsius}  Fahrenheit: ${station1.fahrenheit}`);

const station2 = new WeatherStation(-456);
console.log(`Celsius: ${station2.celsius}  Fahrenheit: ${station2.fahrenheit}`);
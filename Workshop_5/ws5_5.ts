class FitnessProfile {
    private _weight: number;
    private _height: number;

    constructor (w: number, h: number) {
        this._weight = w;
        this._height = h;
    }

    set weight(value: number) {
        if (value <= 0) {
            console.error(`Error: weight must greater than 0.`);
        } else {
            this._weight = value;
        }
    }
    set height(value: number) {
        if (value <= 0) {
            console.error(`Error: height must greater than 0.`);
        } else {
            this._height = value;
        }
    }

    get BMI(): number | string {
        return (this._weight / (this._height^2)).toFixed(2);
    }
}

const profile1 = new FitnessProfile(60, 1.70);
profile1.height = 0;
profile1.weight = -60;
console.log(`Your BMI is ${profile1.BMI}`);
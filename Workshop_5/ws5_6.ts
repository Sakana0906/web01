class Wallet {
    private _balance: number;

    constructor(b: number) {
        this._balance = b;
    }

    get balance(): number | string {
        return `$${this.balance}`;
    }

    set balance(value: number) {
        if (value < 0) {
            console.error(`Error: balance must not be negative.`);
        } else {
            this._balance = value;
        }
    }

    get convert():number | string {
        return `Your balance is ฿${this._balance * 33.5}.`;
    }
}

const wallet1 = new Wallet(500);
wallet1.balance = -600;
console.log(wallet1.convert);
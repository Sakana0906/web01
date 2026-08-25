class Product {
    private _name : string ;
    private _price : number ;
    private _stock : number ;
    
    constructor (n: string, p: number, s: number) {
        this._name = n;
        this._price = p;
        this._stock = s;
    }

    set price(p: number) {
        if (p <= 0) {
            console.error(`Error:Price must be more than 0`);
        } else {
            this._price = p;
        }
    }

    set stock(s: number) {
        if (s < 0) {
            console.error(`Error:Stock must not be negative`);
        } else {
            this._stock = s;
        }
    }

    get inventoryValue(): number {
        return this._price * this._stock;
    }
}

const pro1 = new Product("Laptop", 35000, 9);
pro1.price = -1;
console.log(`${pro1.inventoryValue}`);


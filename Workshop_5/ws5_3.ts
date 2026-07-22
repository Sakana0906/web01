class Product {
    private _price : number = 0;

    get price(): number {
        return this._price;
    }

    set price(value : number) {
        if (value <= 0) {
            console.error(`Error: Price must be greater than 0.`);
            return;
        }
        this._price = value;
    }
}

const product1 = new Product();
product1.price = 10;
product1.price = -20;
console.log(product1.price);

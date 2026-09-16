class Product {
    constructor (private name: string, private price: number, private quantity: number) {}

    getSubTotal(): number {
        return this.price * this.quantity;
    }
}

class Order {
    private products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = 0;
        for (const product of this.products) {
            total += product.getSubTotal();
        }
        return total;
    }

    calculateDiscount(percent: number): number {
        let discount: number;
        discount = this.calculateTotal() * percent / 100;
        return discount;
    }

    calculateNetTotal(percent: number): number {
        let netTotal: number;
        netTotal = this.calculateTotal() - this.calculateDiscount(percent);
        return netTotal;
    }
}

const product1 = new Product("CPU", 6500, 10);
const product2 = new Product("RAM", 15000, 5);
const product3 = new Product("SSD", 13500, 3);

const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
console.log(`-----Receipt-----
Total: ${order1.calculateTotal()} baht
Discount: -${order1.calculateDiscount(10)} baht
Net price: ${order1.calculateNetTotal(10)} baht
`);

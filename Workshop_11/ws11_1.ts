class MenuItem {
    constructor (private price: number, private name: string, private category: string) {}

    get Price(): number {
        return this.price;
    }

    get Name(): string {
        return this.name;
    }

    getMenuInfo(): string {
        return `${this.Name} ${this.price} ${this.category}`;
    }
}

class Restaurant {
    private items: MenuItem[];
    constructor (private name: string, item: MenuItem[]) {
        this.items = item;
    }

    showMenu(): void {
        console.log(`Restaurant: ${this.name}`);
        console.log(`Menu: `);
        this.items.forEach(item => {console.log(item.getMenuInfo())});
    }
}

class _Order {
    private items: {item: MenuItem, quantity: number} [];
    constructor () {
        this.items = [];
    }

    addItem(item: MenuItem, quantity: number): void {
        this.items.push({item: item, quantity: quantity});
    }

    calculateTotal(): number {
        let total = 0;
        for (let items of this.items) {
            total += items.item.Price * items.quantity;
        }
        return total;
    }

    showOrder(): void {
        console.log(`Order: `);

        for (let item of this.items) {
            const subTotal = item.item.Price * item.quantity;
            console.log(`${item.item.Name} x${item.quantity}: ${subTotal.toFixed(2)} baht`);
        }
        console.log(`----------------------------------`);

        const total = this.calculateTotal();
        console.log(`Total: ${total.toFixed(2)} baht`);

        let discount = 0;
        if (total > 500) {
            discount = total * 0.01;
        } else {
            discount = 0;
        }

        console.log(`Discount: ${discount} baht`);
        
        let netprice = total - discount;
        console.log(`Net price: ${netprice} baht`);
    }
}

class Customer {
    constructor (private name: string) {}

    placeOrder(order: _Order): void {
        console.log(`${this.name} placed`);
        order.showOrder();
    }
}

const item1 = new MenuItem(299, "Sichuan noodle", "Sichuan");
const item2 = new MenuItem(309, "Hot Sichuan noodle", "Sichuan");
const item3 = new MenuItem(339, "Super Hot Sichuan noodle", "Sichuan");
const item4 = new MenuItem(369, "Super Ultra Hot Sichuan noodle", "Sichuan");
const res1 = new Restaurant("Ultra Sichuan", [item1,item2,item3,item4]);
const _order1 = new _Order();
_order1.addItem(item1, 1);
_order1.addItem(item3, 2);

const customer1 = new Customer("Danniel");
customer1.placeOrder(_order1);
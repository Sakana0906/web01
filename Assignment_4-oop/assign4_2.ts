//Part 1: Inventory Logic (Functions & Array)
function findLowStockItems(quantity: number [], threshold: number): number[] {
    for (let i = 0; i < quantity.length; i++) {
        if (quantity[i] < threshold) {
            return quantity.filter(q => q < threshold);
        }
    }
    return [];
}

console.log(findLowStockItems([10, 5, 9, 8, 2], 10));

//Part 2: Object-Oriented Blueprint (Class & Object)
class Product {
    readonly id: string;
    public name: string;
    public price: number;
    public quantity: number;

    constructor(id: string, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell(units: number): void {
        if (units <= this.quantity) {
            this.quantity -= units;
            console.log(`Sold ${units} units of ${this.name}. Remaining stock: ${this.quantity}`);
        } else {
            console.log(`Error: Not enough stock for ${this.name}.`);
        }
    }

    restock(units: number): void {
        this.quantity += units;
        console.log(`Restocked ${units} units of ${this.name}. New stock: ${this.quantity}`);
    }
}

const product1 = new Product("P001", "Laptop", 1200, 5);
product1.sell(3);
product1.restock(10);

//Part 3: Interaction & Advanced logic (RPG System)
class Hero {
    constructor(public name: string , public HP: number , public inventory: Product[]) {}

    addItem(item: Product): void{
        this.inventory.push(item);
    }

    useItem(itemName: string): void{
        for (const item of this.inventory) {
            if (item.name  === itemName) {
                if (item.quantity > 0) {
                    this.HP += 25;
                    item.quantity --;
                    console.log(`${this.name} used ${itemName} +25HP! ${item.name}'s quantity left: ${item.quantity}`)
                    if (item.quantity === 0) {
                        this.inventory = this.inventory.filter(i => i !== item);
                    }
                }
            }
        }
    }

    takeDamage(damage: number) {
        if (this.HP > 0) {
            this.HP -= damage;
            console.log(`${this.name} has ${this.HP}HP remain!`);
        } else {
            console.log(`GAME OVER!/n${this.name} has fallen!`);
        }
    }
}

const potion_s = new Product("P001", "Potion [S]", 200, 1);
const hero1 = new Hero("Knight", 200, []);
hero1.addItem(potion_s);
hero1.takeDamage(199);
hero1.useItem("Potion [S]");
hero1.takeDamage(100);
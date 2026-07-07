interface products {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

let myInventory : products[] = [
    { id:1, name: "Laptop", price: 1200, quantity: 100 },
    { id:2, name: "Smartphone", price: 800, quantity: 320 },
    { id:3, name: "Tablet", price: 500, quantity: 215 }
];

function updateStock (productId: number, amountSold: number): void {
    const product = myInventory.find(p => p.id === productId);
    if (product) {
        if (product.quantity >= amountSold) {
            product.quantity -= amountSold;
            console.log(`Updated stock for ${product.name}: ${product.quantity} units remaining.`);
        } else {
            console.log(`Not enough stock for ${product.name}.`);
        }
    } else {
        console.log(`Product with ID ${productId} not found in inventory.`);
    }
}

updateStock(3, 2000);

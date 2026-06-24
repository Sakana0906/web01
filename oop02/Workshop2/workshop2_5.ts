let store: [product:string, price:number, quantity:number][] = [["GPU", 25000, 5], ["Smartphone", 15000, 10], ["Tablet", 23000, 7], ["Headphones", 5500, 15]];
for (let [product, price, quantity] of store) {
    console.log(`Product: ${product}, Price: ${price}, Quantity: ${quantity}`);
}
store.push(["Laptop", 20000, 8]);
store.push(["Mouse", 2400, 12]);
store.push(["Keyboard", 3500, 20]);
console.log("\nUpdated store inventory:");
for (let [product, price, quantity] of store) {
    console.log(`Product: ${product}, Price: ${price}, Quantity: ${quantity}`);
}
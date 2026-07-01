interface goods {
    readonly id: string;
    name: string;
    price: number;
}

type status = 'Available' | 'Out of stock';

let productList: goods[] = [];

function addProduct(good: goods, status: status): void {
    productList.push(good);
    console.log(`Product added: ${good.name} (ID: ${good.id}) - Status: ${status}`);
}

addProduct({ id: "1234567890", name: "Smartphone", price: 13500 }, 'Available');
addProduct({ id: "0987654321", name: "Tablet", price: 8500 }, 'Out of stock');
console.log("Current product list:");
for (const product of productList) {
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
}


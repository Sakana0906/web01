interface product {
    name: string;
    quantity: number;
    IsFragile: boolean;
}

const products = [["Laptop", 15, true],["Desk", 50, false],["Glass Vase", 5, true],["Monitor", 10, true],["Chair", 100, false]];

for (const p of products) {
    if (p[2]) {
        console.log(`${p[0]}: จำนวน ${p[1]} แตกหักง่าย`)
    }
}
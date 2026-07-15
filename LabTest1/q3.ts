let weight: number[] = [15, 5.5, 4.2, 8.9, 23, 16, 12.5, 2.7, 27.5, 30];
let overWeight: number[]=[];
let totalWeight: number =0;
let avg: number | string = 0;

for (const i of weight) {
    totalWeight += i;
    if (i > 20) {
        overWeight.push(i);
    }
}
avg = totalWeight/(weight.length);

console.log(`พัสดุมีน้ำหนักดังนี้: ${weight}`);
console.log(`จำนวนพัสดุที่มีน้ำหนักเกินเกณฑ์: ${overWeight.length} ชิ้น`);
console.log(`น้ำหนักเฉลี่ยของพัสดุทั้งหมด: ${avg.toFixed(2)} กิโลกรัม`);

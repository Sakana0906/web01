let bookTitle: string ="Holy Bible";
let isbn: string ="978-014-143-951-8";
let price: number = 625;
let isAvailable: boolean = true;
let book = [bookTitle, price, isAvailable];
let discount: number = 0.15;
let isPremium: boolean;
let discountPrice: number = (price * discount);
let cost: number = price - discountPrice;

if (price > 500) {
    isPremium = true;
} else {
    isPremium = false;
}

console.log(`Book:        ${bookTitle}`);
console.log(`ISBN:        ${isbn}`);
console.log(`Available:   ${isAvailable ? "Available" : "Not Available"}`);
console.log(`Premium:     ${isPremium ? "Premium" : "Regular"}`);
console.log(`Price:       $${price.toFixed(2)}`);
console.log(`Discount:    $${discountPrice.toFixed(2)}`);
console.log(`Final Price: $${cost.toFixed(2)}`);
if (isPremium && isAvailable) {
    console.log("สามารถจัดแสดงที่หน้าตู้โชว์ได้");
}

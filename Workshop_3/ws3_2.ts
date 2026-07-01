const calculatePrice = (price: number, discountPercent: number): number => {
    const discountAmount = price * (discountPercent / 100);
    const netPrice = price - discountAmount < 0 ? 0 : price - discountAmount;
    return netPrice;
}
let price: number = 979;
let discountPercent: number = 111;
let discountedPrice: number = calculatePrice(price, discountPercent);
console.log(`Price: ${price}  Discount: ${discountPercent}%\nThe discounted price is: ${discountedPrice}`);
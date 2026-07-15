let cupSize: string = "X";
let ownCup: boolean = false;
let price: number = 0;
let discountRate: number = 0;
let netPrice: number;

if (ownCup) {
    price = 0;
    discountRate = 5;
    if (cupSize == "S") {
        price = 60;
    } else if (cupSize == "M") {
        price = 80;
    } else if (cupSize == "L") {
        price = 100;
    } else {
        console.log("Error: Cup size is wrong.");
    }
    netPrice = price - (price*(discountRate/100));
} else {
    price = 0
    if (cupSize == "S") {
        price = 60;
    } else if (cupSize == "M") {
        price = 80;
    } else if (cupSize == "L") {
        price = 100;
    } else {
        console.log("Error: Cup size is wrong.");
    }
    netPrice = price;
}

console.log(`แก้วกาแฟขนาด ${cupSize} ราคาปกติ ${price} บาท\nได้รับส่วนลด ${discountRate}% ราคาสุทธิ ${netPrice} บาท`);
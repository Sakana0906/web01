let productName: string = "Plushies";
let pricePerUnit: number = 256.00;
let quantity: number = 6;
let isMember: boolean = false;
let totalPrice: number = pricePerUnit * quantity;
let discountRate: number;

if (isMember || totalPrice > 1000) {
    discountRate = 0.1;
} else {
    discountRate = 0.0;
}

let discountAmount: number = totalPrice * discountRate;
let finalPrice: number = totalPrice - discountAmount;
    
    console.log("------------ Product Purchase Summary ------------");
    console.log("Product:           %s", productName);
    console.log("Price per unit:    $%s", pricePerUnit.toFixed(2));
    console.log("Quantity:          %d", quantity);
    console.log("Total price:       $%s", totalPrice.toFixed(2));
    console.log("Discount applied:  $%s", discountAmount.toFixed(2));
    console.log("Final price:       $%s", finalPrice.toFixed(2));
    console.log("----------------------------------------------------");

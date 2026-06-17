let income: number = 50000;
let tax_rate: number = 0.07;
let tax: number = income * tax_rate;
let net_income: number = income - tax;

console.log("------------ Income and Tax Calculation ------------");
console.log("Income: $%s", income.toFixed(2));
console.log("Tax Rate: %s%%", (tax_rate * 100).toFixed(2));
console.log("Tax: $%s", tax.toFixed(2));
console.log("Net Income: $%s", net_income.toFixed(2));
console.log("----------------------------------------------------");
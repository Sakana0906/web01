abstract class ShippingCalculator {
    constructor (protected bscost: number) {}

    abstract calByWeight(weight: number): number;
}

class StandardShipping extends ShippingCalculator {
    constructor (protected bscost: number, private cpwratio: number) {
        super(bscost);
    }

    calByWeight(weight: number): number {
        return this.bscost + (weight * this.cpwratio);
    }
}

class ExpressShipping extends ShippingCalculator {
    constructor (protected bscost: number, private speedmul: number) {
        super(bscost);
    }

    calByWeight(weight: number): number {
        return this.bscost + (weight * 20 * this.speedmul);
    }
}

const shipping1 = new StandardShipping(260, 15);
const shipping2 = new ExpressShipping(350, 2);

console.log(`ขนส่งโดย Standard shipping ค่าบริการรวม: ${shipping1.calByWeight(4)} บาท`);
console.log(`ขนส่งโดย Express shipping ค่าบริการรวม: ${shipping2.calByWeight(3)} บาท`);
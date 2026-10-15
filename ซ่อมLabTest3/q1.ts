interface PaymentMethod {
    method: string;

    pay(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
    constructor (public method: string, private cardNO: string) {}

    pay(amount: number): void {
        console.log(`ชำระเงิน ${amount} บาท โดยใช้${this.method}หมายเลข ${this.cardNO}`);
    }
}

const payment = new CreditCardPayment("บัตรเครดิต", "1000-5025-9604-7431");
payment.pay(500);
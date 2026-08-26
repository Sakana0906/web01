abstract class PaymentGateway {
    protected tid: string;

    constructor (protected amount: number) {
        this.tid = "TXN-" + Math.floor(1000 + Math.random() * 9000);
    }

    abstract processPayment(): boolean;

    printReceipt(success: boolean): void {
        if (success == true) {
            console.log(`[Receipt] ${this.tid} | $${this.amount} | Status: SUCCESS`);
        } else {
            console.log(`[Receipt] ${this.tid} | Status: FAILED`);
        }
    }
}

class CreditcardPayment extends PaymentGateway {
    constructor (amount: number, private cardNumber: string) {
        super(amount);
    }

    processPayment(): boolean {
        if (this.cardNumber.length === 16) {
            console.log(`Payment successful. $${this.amount} has been charged from your credit card.`);
            return true;
        } else {
            console.log(`Payment failed. Please check your card number and try again.`);
            return false;
        }
    }
}

class PromtpayPayment extends PaymentGateway {
    constructor (amount: number, private phoneNumber: string) {
        super(amount);
    }

    processPayment(): boolean {
        if (this.phoneNumber.length === 10) {
            console.log(`Payment successful. $${this.amount} has been charged from your account.`);
            return true;
        } else {
            console.log(`Payment failed. Please check your phone number and try again.`);
            return false;
        }
    }
}

const payments: PaymentGateway[] = [
    new CreditcardPayment(500, "1234567891234567"),
    new PromtpayPayment(250, "1234567890"),
    new CreditcardPayment(349, "12345678901235"),
    new PromtpayPayment(299, "123456")
];

payments.forEach(p => {
    p.printReceipt(p.processPayment())
});
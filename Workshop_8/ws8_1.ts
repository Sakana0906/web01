class PaymentGateway {
    process(amount: number) {
        console.log(`The price is $${amount}.`);
    }
}

class CreditcardPayment extends PaymentGateway {
    process(amount: number): void {
        console.log(`The price is $${amount}, Processing to your Credit card...`);
    }
}

class PaypalPayment extends PaymentGateway {
    process(amount: number): void {
        console.log(`The price is $${amount}, Processing to Paypal...`);
    }
}

function executePayment(p: PaymentGateway, amt: number) {
    p.process(amt);
}

const payments: PaymentGateway[] = [new CreditcardPayment(), new PaypalPayment()];
payments.forEach(p => executePayment(p, 260));
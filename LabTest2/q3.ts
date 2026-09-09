class PrepaidSIM {
    public phoneNumber: string;
    private credit: number;
    
    constructor (p: string, c: number) {
        this.phoneNumber = p;
        this.credit = c;
    }

    get getCredit(): number {
        return this.credit;
    }

    set setCredit(c: number) {
        if (c < 0) {
            console.log(`Error: Balance must not be negative`);
        } else {
            this.credit = c;
        }
    }

    topUp(amount: number) {
        if (amount > 0) {
            this.credit += amount;
            console.log(`Top up ${amount} baht\nYour balance: ${this.credit} baht`);
        }
    }
    
    makeCall(amount: number) {
        if (amount > 0) {
            if (this.credit >= amount) {
                this.credit -= amount;
                console.log(`Make a call, charged ${amount} baht\nYour balance: ${this.credit} baht`);
            } else {
                console.log(`Error: Cannot operate 'Insufficient balance' please top up\nYour balance: ${this.credit} baht`);
            }
        }
    }

    displayPoint() {
        console.log(`Phone number: ${this.phoneNumber}\nBalance: ${this.credit} baht`);
    }
}

const sim1 = new PrepaidSIM("09060330", 0);

sim1.displayPoint();
sim1.topUp(100);
sim1.makeCall(100);
sim1.makeCall(100);
sim1.setCredit = -1;
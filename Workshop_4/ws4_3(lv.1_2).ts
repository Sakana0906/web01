//Level 1: Basic Class & Initialization
class BankAccount {
    constructor(public ownerName: string, private balance: number) {
    }

    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }
    //Level 2: Methods with Logic (Updating State)
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        }
        else if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        }
        else {
            console.log("Withdrawal amount must be positive.");
        }
    }
}

const account1 = new BankAccount("David", 1000);
account1.displayBalance();
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(2000);
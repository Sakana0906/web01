interface Taxable {
    applyTax(amount: number): number; 
}

abstract class Workers {
    public name: string;
    constructor (name: string) {
        this.name = name;
    }

    abstract calculatePay(): number;

    getDetail(): string {
        return `Name: ${this.name}`;
    }
}

class HourlyWorker extends Workers {
    constructor (public name: string, private hourlyRate: number, private HoursWorked: number) {
        super(name);
    }

    calculatePay(): number {
        return this.hourlyRate * this.HoursWorked;
    }
}

class SalariedWork extends Workers implements Taxable {
    constructor (public name: string, private monthlySalary: number) {
        super(name);
    }

    calculatePay(): number {
        return this.monthlySalary;
    }

    applyTax(amount: number): number {
        return amount * 0.10;
    }
}

const worker1 = new HourlyWorker("J Dawg", 3500, 9);
const worker2 = new SalariedWork("Chad Wick", 30000);

console.log(`${worker1.getDetail()} | get paid: ${worker1.calculatePay()}`);
console.log(`${worker2.getDetail()} | get paid: ${worker2.calculatePay() - worker2.applyTax(worker2.calculatePay())}`);
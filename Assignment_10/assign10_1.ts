class BonusCalcualtor {
    calculatebonus(salary: number): number {
        if (salary < 20000) {
            return salary * 0.05;
        } else if (salary <= 39999) {
            return salary * 0.08;
        } else {
            return salary * 0.10;
        }
    }
}

class TaxCalculator {
    calculateTax(income: number): number {
        if (income <= 20000) {
            return income * 0;
        } else if (income <= 40000) {
            return income * 0.05;
        } else {
            return income * 0.10;
        }
    }
}

class Employee {
    private bonusCalculator: BonusCalcualtor;
    private taxCalculator: TaxCalculator;
    constructor (public name: string, public basicsalary: number) {
        this.bonusCalculator = new BonusCalcualtor();
        this.taxCalculator = new TaxCalculator();
    }
    
    calculateGrossSalary(): number {
        return this.basicsalary + this.bonusCalculator.calculatebonus(this.basicsalary);
    }

    calculateNetsalary(): number {
        return this.calculateGrossSalary() - this.taxCalculator.calculateTax(this.calculateGrossSalary());
    }
}

const em1 = new Employee("Chad", 20000);
console.log(`
    ${em1.name}'s basic salary: ${em1.basicsalary} baht
    Bonus: ${em1.calculateGrossSalary() - em1.basicsalary} baht
    Gross salary: ${em1.calculateGrossSalary()} baht
    Tax: ${em1.calculateGrossSalary() - em1.calculateNetsalary()} baht
    Net salary: ${em1.calculateNetsalary()} baht
`);

const em2 = new Employee("P", 40000);
console.log(`
    ${em2.name}'s basic salary: ${em2.basicsalary} baht
    Bonus: ${em2.calculateGrossSalary() - em2.basicsalary} baht
    Gross salary: ${em2.calculateGrossSalary()} baht
    Tax: ${em2.calculateGrossSalary() - em2.calculateNetsalary()} baht
    Net salary: ${em2.calculateNetsalary()} baht
`);
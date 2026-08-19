class Staff {
    constructor (public name: string,public salary: number) {}

    getDetails() {
        return `Name: ${this.name} Salary:${this.salary}`;
    }   
}

class Manager2 extends Staff {
    constructor (name: string,salary: number, public department: string) {
        super(name, salary);
    }

    getDetails() {
        return `Name:${this.name} Salary:${this.salary} Department:${this.department}`;
    }
}

const staff1 = new Staff("Daniel", 26400);
console.log(staff1.getDetails());

const manager2_1 = new Manager2("Natsuki Subaru", 30000, "HR");
console.log(manager2_1.getDetails());
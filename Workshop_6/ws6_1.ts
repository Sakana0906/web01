class Employee {
    private _firstName : string;
    private _lastname : string;

    constructor (fname : string, lname : string) {
        this._firstName = fname;
        this._lastname = lname;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastname}`;
    }

    set fullName(name : string) {
        const [fname, lname] = name.split(' ');
        this._firstName = fname;
        this._lastname = lname;
    }
}

const emp1 = new Employee("John", "Endfield");
console.log(`Welcome ${emp1.fullName}`);
emp1.fullName = "Amazing Guy";
console.log(`Welcome ${emp1.fullName}`);

const emp2 = new Employee("John", "Waves");
console.log(`Welcome ${emp2.fullName}`);
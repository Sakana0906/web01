class Doktah {
    constructor (private did: string, private dname: string, private specialty: string) {}

    showInfo() {
        console.log(`ID: ${this.did}\nName: ${this.dname}\nSpecialty: ${this.specialty}`);
    }

    examine(patient: Patient): void {
        console.log(`Doktah: ${this.dname} | Specialty: ${this.specialty}\nPatient ID: ${patient.pid}\nName: ${patient.pname} | Age: ${patient.age}\nIn examining`)
    }

    diagnose(patient: Patient, dis: string): void {
        console.log(`Doktah: ${this.dname} | Specialty: ${this.specialty}\nPatient ID: ${patient.pid}\nName: ${patient.pname} | Age: ${patient.age}\nDiagnosed with ${dis}`);
    }

    prescribeMed(patient: Patient, med: string): void {
        console.log(`Doktah: ${this.dname} | Specialty: ${this.specialty}\nPatient ID: ${patient.pid}\nName: ${patient.pname} | Age: ${patient.age}\nPrescribed ${med}`);
    }

    calculateFee(patient: Patient, fee: number, medfee: number): void {
        let total = 0;
        total = fee + medfee;
        console.log(`Patient ID: ${patient.pid} | Name: ${patient.pname}\nDiagnose fee: ${fee} baht\nMedicine fee: ${medfee} baht\nTotal: ${total} baht`);
    }
}

class Patient {
    constructor (public pid: string, public pname: string, public age: number) {}

    showInfo() {
        console.log(`ID: ${this.pid}\nName: ${this.pname}\nAge: ${this.age}`);
    }
}

const doktah1 = new Doktah("00001", "John Knight", "Cancer");
const doktah2 = new Doktah("00002", "Rhode Smith", "Oripathy");

const patient1 = new Patient("001", "Daniel", 17);
const patient2 = new Patient("002", "That one Sarkaz girl", 17);

doktah1.examine(patient1);
doktah1.diagnose(patient1, "Heart cancer");
doktah1.prescribeMed(patient1, "Goodluck bro");
doktah1.calculateFee(patient1, 1000, 0);

doktah2.examine(patient2);
doktah2.diagnose(patient2, "Originium oripathy");
doktah2.prescribeMed(patient2, "Oh HELL NAH");
doktah2.calculateFee(patient2, 500, -300);
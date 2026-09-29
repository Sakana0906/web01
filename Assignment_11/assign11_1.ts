abstract class TravelPackage {
    constructor (private packageID: string, private packageName: string, protected basePrice: number, private destination: string) {
        this.packageID = packageID;
        this.packageName = packageName;
        this.basePrice = basePrice;
        this.destination = destination;
    }

    abstract calculatePrice(person: number): {};

    getTPackage(): string {
        return `Package: ${this.packageName} | PID: ${this.packageID}\nDestination: ${this.destination}`;
    }
}

class OneDayTrip extends TravelPackage {
    constructor (packageID: string, packageName: string, destination: string, protected basePrice: number) {
        super(packageID, packageName, basePrice, destination);
    }

    calculatePrice(nperson: number): number {
        if (nperson >= 5) {
            return this.basePrice * nperson * 0.90;
        } else {
            return this.basePrice * nperson;
        }
    }
}

class OverNightTrip extends TravelPackage {
    constructor (packageID: string, packageName: string, destination: string, protected basePrice: number, private numberOfNight: number) {
        super(packageID, packageName, basePrice, destination);
    }

    calculatePrice(nperson: number): number {
        if (this.numberOfNight >= 3) {
            return this.basePrice * nperson * this.numberOfNight * 0.85;
        } else {
            return this.basePrice * nperson * this.numberOfNight;
        }
    } 
}

class Customers {
    constructor (private customerID: string, private name: string, private phone: string) {}

    getcustomer(): string {
        return `ID: ${this.customerID}\nName: ${this.name}\nPhone number: ${this.phone[0] + this.phone[1] + this.phone[2] + "*****" + this.phone[8] + this.phone[9]}`;
    }
}

class Booking {
    constructor (private customer: Customers, private tpackage: TravelPackage, private nperson: number) {
    }

    bookingDetail(): void {
        console.log(`---------- Booking Detail ----------`);
        console.log(`${this.customer.getcustomer()}`);
        console.log(`${this.tpackage.getTPackage()}\nPerson: ${this.nperson}`);
        console.log(`Price: ${this.tpackage.calculatePrice(this.nperson)} baht`);
        console.log(`------------------------------------`);
    }
}

class TravelAgency {
    constructor (public TAname: string, private trip: TravelPackage[]) {
        this.trip = [];
    }
}

const package1 = new OverNightTrip("P001", "Cha-am beach tour", "Petchburi", 1500, 3);
const package2 = new OneDayTrip("P002", "Ancient City Ayutthaya visit", "Ayutthaya", 1000);
const package3 = new OneDayTrip("P003", "To the Moon", "Moon", 5000);

const agency = new TravelAgency("All Eyes Travel", [package1, package2]);

const cus1 = new Customers("C001", "David", "0589485513");

const booking1 = new Booking(cus1, package3, 2);

booking1.bookingDetail()
interface StorageService {
    save(data: string): void;
    load(): string;
}

abstract class DataStorage {
    constructor (protected data: string) {}
}
class ClousStorage extends DataStorage implements StorageService{
    constructor (protected data: string) {
        super(data);
    }
    save(data: string): void {
        this.data = data;
        console.log(`${this.data} has been saved on Cloud`);
    }

    load(): string {
        return this.data;
    }
}

class LocalStorage extends DataStorage implements StorageService {
    constructor (protected data: string) {
        super(data);
    }

    save(data: string): void {
        this.data = data;
        console.log(`${this.data} has been saved in your device.`);
    }

    load(): string {
        return this.data;
    }
}

const storage1 = new ClousStorage("");
const storage2 = new LocalStorage("");
storage1.save("Solid Snake");
storage1.load();
storage2.save("Liquid Snake");
storage2.load();

class CPU {
    constructor (public brand: string, private cores: number) {}
    
    process() {
        console.log(`CPU is processing..`);
    }

    showInfo() {
        console.log(`CPU: ${this.brand} | cores: ${this.cores}`);
    }
}

class RAM {
    constructor (private capacity: number) {}

    load() {
        console.log(`RAM is loading...`);
    }

    showInfo() {
        console.log(`RAM: ${this.capacity} GB`);
    }
}

class _Storage {
    constructor (private capacity: number, private type: string) {}

    readData() {
        console.log(`${this.type} is reading...`);
    }

    showInfo() {
        console.log(`Storage type: ${this.type} | capacity: ${this.capacity} TB`);
    }
}

class Computer {
    private cpu: CPU;
    private ram: RAM;
    private storage: _Storage;

    constructor (brand: string, cores: number, ramcap: number, stocap: number, stotype: string) {
        this.cpu = new CPU(brand, cores);
        this.ram = new RAM(ramcap);
        this.storage = new _Storage(stocap, stotype);
    }

    boot() {
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
    }

    showComputerInfo() {
        console.log(`Computer specs:`)
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}

const com1 = new Computer("AMD", 6, 32, 2, "SSD M.2 NVMe");
com1.boot();
com1.showComputerInfo();
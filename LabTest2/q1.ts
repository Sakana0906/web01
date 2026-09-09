class Book {
    constructor (public title: string, public pages: number) {}

    displayInfo() {
        console.log(`Title: ${this.title}\nPages: ${this.pages}`);
    }
}

const book1 = new Book("Holy Bible", 500);

book1.displayInfo();
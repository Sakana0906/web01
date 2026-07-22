class Book {
    public readonly isbn : string = "";
    public title : string = "";
    private isBorrowed : boolean;

    constructor(id : string, t : string, b : boolean) {
        this.isbn = id;
        this.title = t;
        this.isBorrowed = b; 
    }

    borrowBook() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Successfully borrowed ${this.title}.`);
        } else {
            console.error(`${this.title} is unavailable.`);
        }
    }

    returnBook() {
        this.isBorrowed = false;
        console.log(`Successfully returned ${this.title}.`);
    }
}

const book1 = new Book("12345", "Holy Bible", false);
const book2 = new Book("98765", "What is this even about?", false);
book1.borrowBook();
book2.borrowBook();
book1.borrowBook();
book2.returnBook();
book1.returnBook();
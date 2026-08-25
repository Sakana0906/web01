class Book {
    constructor (public title: string, public author: string, public price: number, public stock: number) {}

    sellBook(quantity: number) {
        if (this.stock < quantity) {
            console.error(`Sold out`);
        } else {
            this.stock -= quantity;
            console.log(`Successful!\n${this.title} has ${this.stock} left.`);
        }
    }
}

class Ebook extends Book {
    constructor (public title: string, public author: string, public price: number, public stock: number, public fileSize: number, public downloadLink: string) {
        super(title, author, price, stock);
    }

    sellBook() {
        console.log(`${this.title}: $${this.price}\nDownload link: ${this.downloadLink}`);
    }
}

class PrintedBook extends Book {
    constructor (public title: string, public author: string, public price: number, public stock: number, public weight: number, public shippingcost: number) {
        super(title, author, price, stock);
    }

    sellBook() {
        console.log(`${this.title}: $${this.price}\nShipping cost: $${this.shippingcost}\nNet price: $${this.price + this.shippingcost}`);
    }
}

const book1 = new Book("Holy Bible", "Jesus Christ", 50, 1);
const ebook1 = new Ebook("Solid Snake", "Kojima", 29, 999, 118, "https://media.tenor.com/x4triyC1RJoAAAAe/solid-snake-snake.png");
const pbook1 = new PrintedBook("Natsuki Subaru", "Natsuki Subaru", 10, 1, 999, 2);

book1.sellBook(1);
ebook1.sellBook();
pbook1.sellBook();
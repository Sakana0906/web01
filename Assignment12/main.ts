import { BookDAO } from "./BookDAO";
import { BorrowRecordDAO } from "./BorrowRecordDAO";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO();

console.log(`--- Add Books ---`);

bookDAO.addBook(`ISBN-101`,`Holy Bible`,`Jesus Christ`);
bookDAO.addBook(`ISBN-102`,`Japanese Manga`,`Sensei`);
bookDAO.addBook(`ISBN-103`,`Death Note`,`Luke`);
console.log(`--- All Books ---`);
const books = bookDAO.findAll();
for (const book of books) {
    console.log(book.getInfo());
}

bookDAO.updateAvailability(`ISBN-101`, true);

console.log(`--- Borrow Book ---`);
const borrow1 = borrowRecordDAO.borrowBook("Natsuki", "ISBN-102");

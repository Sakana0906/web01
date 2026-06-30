let Books: [title:string, IsBorrowed:boolean][] = [["Into The Hell", false], ["Corpse's scent", true], ["1945", false], ["Pearl Harbor", true], ["The Frontline", false]];
for (let [title, IsBorrowed] of Books) {
    if (IsBorrowed) {
        console.log(`Title: ${title}, Status: Borrowed`);
    } else {
        console.log(`Title: ${title}, Status: Available`);
    }
}
console.log(`Total Books: ${Books.length}`);
let availableBooks = Books.filter(([_, IsBorrowed]) => !IsBorrowed).length;
console.log(`Total Available Books: ${availableBooks}`);
let borrowedBooks = Books.filter(([_, IsBorrowed]) => IsBorrowed).length;
console.log(`Total Borrowed Books: ${borrowedBooks}`);


//create empty list for added book objects//
myLibrary = [];

//constructor for book objects//
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//adds books to list//
function addToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("First Book", "John Smith", 592);
const book2 = new Book("Second Book", "Smith Johnson", 486);

addToLibrary(book1);
addToLibrary(book2);

const table = document.getElementById("table");

function addBookToTable(book) {
    const row = table.insertRow();
    const title = row.insertCell();
    title.textContent = book.title;
    const author = row.insertCell();
    author.textContent = book.author;
    const pages = row.insertCell();
    pages.textContent = book.pages;
}

for (var i = 0; i < myLibrary.length; i++) {
    addBookToTable(myLibrary[i]);
}
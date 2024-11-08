
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

//creates and styles header div//
const libraryHeader = document.createElement("div");
libraryHeader.textContent = "My Library";
libraryHeader.style.fontSize = "max(24px, 1.2em)";
libraryHeader.style.textAlign = "center";
libraryHeader.style.margin = "20px";
document.body.appendChild(libraryHeader);

//creates the card for each book in the myLibrary list//
for (var i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");

    // styling for cards //
    card.style.display = "flex";
    card.style.gap = "8px";
    card.style.outline = "2px solid black";
    card.style.borderRadius = "4px";
    card.style.width = "25%";
    card.style.padding = "8px";

    document.body.appendChild(card);


    const book = myLibrary[i];

    // creates and appends title to card //
    const title = document.createElement("div");
    title.textContent = `${book.title}`;
    title.style.fontWeight = "bold";
    card.appendChild(title);

    // creates and appends author to card //
    const author = document.createElement("div");
    author.textContent = `by ${book.author}`;
    card.appendChild(author);

    // creates and appends page count to card //
    const pageCount = document.createElement("div");
    pageCount.textContent = `(${book.pages})`;
    pageCount.style.fontWeight = "bold";
    card.appendChild(pageCount);
    
}

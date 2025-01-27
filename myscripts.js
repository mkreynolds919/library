
//create empty list for added book objects//
myLibrary = [];

//constructor for book objects//
class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}


//adds books to list//
function addToLibrary(book) {
    myLibrary.push(book);
}

const libraryContainer = document.querySelector("#library-container");


//function that creates cards for each book object//
//increment variable is there to properly give id's to the cards based on their index in the library array//
var i = 0;

function createCard(book) {
    const card = document.createElement("div");
    card.id = `card${i+1}`;
    card.classList.add(`card`);
    card.classList.add(`${i+1}`);

    // styling for cards //
    card.style.display = "flex";
    card.style.alignContent = "center";
    card.style.justifyContent = "space-between";
    card.style.outline = "2px solid black";
    card.style.borderRadius = "4px";
    card.style.padding = "8px";
    card.style.width = "100%";

    libraryContainer.appendChild(card);

    const info = document.createElement("div");
    info.style.display = "flex";
    info.style.gap = "8px";
    card.appendChild(info);

    // creates and appends title to card //
    const title = document.createElement("div");
    title.textContent = `${book.title}`;
    title.style.fontWeight = "bold";
    info.appendChild(title);

    // creates and appends author to card //
    const author = document.createElement("div");
    author.textContent = `by ${book.author}`;
    info.appendChild(author);

    // creates and appends page count to card //
    const pageCount = document.createElement("div");
    pageCount.textContent = `(${book.pages})`;
    pageCount.style.fontWeight = "bold";
    info.appendChild(pageCount);    

    // creates and appends container for modifying inputs //
    const inputContainer = document.createElement("div");
    inputContainer.id = "input-container";
    inputContainer.style.display = "flex";
    inputContainer.style.gap = "8px";
    card.appendChild(inputContainer);

    // creates and appends checkbox to card //
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    inputContainer.appendChild(checkbox);

    // creates functionality to change styling based on read status of the book //
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            card.style.outline = "2px solid green";
            card.style.backgroundColor = "lightgreen";
            book.read = true;
        } else {
            card.style.outline = "2px solid black";
            card.style.backgroundColor = "white";
            book.read = false;
        }
    });

    const deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete";
    inputContainer.appendChild(deleteBook); 

    // add functionality for delete button that removes card and removes object from array //
    deleteBook.addEventListener("click", () => {
        card.remove();
        myLibrary.splice(myLibrary.indexOf(book), 1);
    });

    i++;
}

//give function to new-book button so it makes form appear//
const newBook = document.querySelector("#new-book");
const formContainer = document.querySelector("#form-container");
newBook.addEventListener("click", () => {
    formContainer.style.display = "flex";
});

//create new book object with form contents once add-book button is pressed//
const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", () => {
    //identify error message button and reset it to none display type//
    const errorMessage = document.querySelector("#error-message");
    errorMessage.style.display = "none";

    const formTitle = document.querySelector("#title");             // finds inputs from the form //
    const formAuthor = document.querySelector("#author");
    const formPageCount = document.querySelector("#page_count");

    //if any field is empty, error message appears until they are all filled//
    if ([formTitle.value, formAuthor.value, formPageCount.value].includes("")) {
        errorMessage.style.display = "block";
        return;
    }

    var newBookTitle = formTitle.value;                             // assigns variables from input values for object creation //
    var newBookAuthor = formAuthor.value;
    var newBookPageCount = formPageCount.value;

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPageCount);        // creates object and adds it to library //
    addToLibrary(newBook);

    //calls function to create and display card in library//
    createCard(newBook);

    //clears values for next time and turns form display back to "none"//
    formTitle.value = "";
    formAuthor.value = "";
    formPageCount.value = "";
    formContainer.style.display = "none";
})





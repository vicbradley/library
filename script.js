const addBookButton = document.getElementById("add-book-btn");
const popupContainer = document.querySelector(".popup-container");
const closeForm = document.querySelector(".form-close");
const popupForm = document.getElementById("popup-form");
const overlay = document.querySelector(".overlay");
const booksContainer = document.querySelector(".book-container");


addBookButton.addEventListener("click", () => {
    popupForm.classList.toggle("active");
    overlay.classList.toggle("active");
});

closeForm.addEventListener("click", () => {
    popupForm.classList.toggle("active");
    overlay.classList.toggle("active");
});

const addBook = (title,author,pages,read) => {
    // Create a new div element
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    // Create and add the book title element
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("book-title");
    titleDiv.textContent = `" ${title} "`;
    bookDiv.appendChild(titleDiv);

    // Create and add the book author element
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("book-author");
    authorDiv.textContent = author;
    bookDiv.appendChild(authorDiv);

    // Create and add the book pages element
    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pages");
    pagesDiv.textContent = `${pages} pages`;
    bookDiv.appendChild(pagesDiv);

    // Create and add the 'Not read' button element
    const readBtn = document.createElement("button");
    readBtn.classList.add("book-btn", "read");
    readBtn.textContent = read ? "Read" : "Not read";
    readBtn.style.backgroundColor = read ? "#a0fc9c" : "#f89898";
    bookDiv.appendChild(readBtn);

    // Create and add the 'Remove' button element
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("book-btn", "remove");
    removeBtn.textContent = "Remove";
    bookDiv.appendChild(removeBtn);

    // Add the book div to the DOM
    booksContainer.appendChild(bookDiv);
};

popupForm.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get references to the form elements
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;


    addBook(title,author,pages,read);

    popupForm.reset();

    popupForm.classList.toggle("active");
    overlay.classList.toggle("active");
});


booksContainer.addEventListener("click", function(event) {
    // Check if the clicked element is a remove button
    if (event.target.classList.contains("remove")) {
        // Get the parent book element
        const book = event.target.parentElement;
        
        // Remove the book from the DOM
        book.remove();
    }

    if (event.target.classList.contains("read")) {
        const readBtn = event.target;
        
        if (readBtn.textContent == "Read") {
            readBtn.textContent = "Not Read";
            readBtn.style.backgroundColor = "#f89898";
        } else {
            readBtn.textContent = "Read";
            readBtn.style.backgroundColor = "#a0fc9c";
        }

    }
});


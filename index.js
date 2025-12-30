// Provided bookStore object
const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
        }
    ]
}

// Select the header
const pageTitle = document.getElementById("header");

// Select the books container
const booksContainer = document.getElementById("book-list");

// Update header text
pageTitle.textContent = "Flatbook - Your Local Bookstore";

// Loop through books and create elements
bookStore.books.forEach(book => {
    const bookItem = document.createElement("li");
    bookItem.className = "bookContainer";

    const bookTitle = document.createElement("h3");
    bookTitle.className = "bookTitle";
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.className = "bookAuthor";
    bookAuthor.textContent = book.author;

    const bookImage = document.createElement("img");
    bookImage.className = "bookImage";
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookImage);

    booksContainer.appendChild(bookItem);
});

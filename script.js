const myLibrary = [{
    title: "mario",
    author: 'dss',
    pages: '100',
    read: 'not read'
}, {
    title: "mar",
    author: 'dss',
    pages: '100',
    read: 'not read yet'
}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'read' : 'not read yet';
    this.info = function() {
        return (this.title + " by " + author + ", " + pages + " pages, " + this.read)
    }
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    addBookToLibrary(newBook);
});

const cardContainer = document.getElementById('cardContainer');

function addBookToLibrary(book) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = `
        Title: ${book.title}<br>
        Author: ${book.author}<br>
        Pages: ${book.pages}<br>
        Status: <span class="status">${book.read}</span><br>
        <button class="readBtn">Toggle Read Status</button>
        <button class="deleteBtn">Delete</button>
    `;

    card.appendChild(cardContent);
    cardContainer.appendChild(card);

    const readBtn = card.querySelector('.readBtn');
    const deleteBtn = card.querySelector('.deleteBtn');
    const status = card.querySelector('.status');

    readBtn.addEventListener('click', function() {
        book.read = book.read === 'read' ? 'not read yet' : 'read';
        status.textContent = book.read;
    });

    deleteBtn.addEventListener('click', function() {
        cardContainer.removeChild(card);
        const index = myLibrary.indexOf(book);
        if (index > -1) {
            myLibrary.splice(index, 1);
        }
    });
}

myLibrary.forEach(book => addBookToLibrary(book));
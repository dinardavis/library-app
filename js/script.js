const libraryDisplay = document.querySelector('.library-display');

let myLibrary = [
  {
    title: 'The Firm',
    author: 'John Grisham',
    pages: 400,
    read: true
  }, 
  {
    title: 'Harry Potter',
    author: 'JK Rowling', 
    pages: 10000,
    read: false
  }
];

function createBookElement(elem, content, className) {
  const element = document.createElement(elem);
  element.textContent = content; 
  element.setAttribute('class', className);
  return element;
}

function createBookItem(book, index) {
  const bookItem = document.createElement('div');
  bookItem.setAttribute('id', index);
  bookItem.setAttribute('key', index);
  bookItem.setAttribute('class', 'card book');
  bookItem.appendChild(createBookElement('h1', `Title: ${book.title}`, 'book-title'));
  bookItem.appendChild(createBookElement('p', `Author: ${book.author}`, 'book-author'));
  bookItem.appendChild(createBookElement('p', `# of Pages: ${book.pages}`, 'book-pages'));
  libraryDisplay.appendChild(bookItem);
}

function renderBooks() {
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
}

renderBooks();
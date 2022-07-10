const libraryDisplay = document.querySelector('.library-display');

let myLibrary = [
  
];

function addLocalStorage() {
  myLibrary = JSON.parse(localStorage.getItem('library')) || [];
  saveAndRenderBooks();
}

// Book constructor function 
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = true;
}

// Add book input data to myLibrary array
function addBookToArray() {
  let bookTitle = prompt("Add title");
  let bookAuthor = prompt("Add author");
  let bookPages = prompt("Add # of pages");
  let bookRead = prompt("Have you read the book?");
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead = true);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

// Function to create individual elements to be added to book item 
function createBookElement(elem, content, className) {
  const element = document.createElement(elem);
  element.textContent = content; 
  element.setAttribute('class', className);
  return element;
}

// Create edit icon
function createEditIcon(book) {
  const editIcon = document.createElement('img');
  editIcon.src = 'imgs/pencil_icon.svg';
  editIcon.setAttribute('class', 'edit-icon');
  editIcon.addEventListener('click', (e) => {
    console.log(book);
  })
  return editIcon;
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  saveAndRenderBooks();
}

function createBookItem(book, index) {
  // Create book item elements
  const bookItem = document.createElement('div');
  const labelSwitch = document.createElement('label');
  const inputSwitch = document.createElement('input');
  const spanSwitch = document.createElement('span');

  // Add toggle switch
  labelSwitch.setAttribute('class', 'switch');
  labelSwitch.innerText = 'Already read?';
  inputSwitch.setAttribute('type', 'checkbox');
  spanSwitch.setAttribute('class', 'slider round');

  // Set book item attributes
  bookItem.setAttribute('id', index);
  bookItem.setAttribute('key', index);
  bookItem.setAttribute('class', 'card book');

  // Add book data and append to book item
  bookItem.appendChild(createBookElement('h1', `Title: ${book.title}`, 'book-title'));
  bookItem.appendChild(createBookElement('p', `Author: ${book.author}`, 'book-author'));
  bookItem.appendChild(createBookElement('p', `# of Pages: ${book.pages}`, 'book-pages'));
  bookItem.appendChild(createBookElement('button', `X`, 'delete'));

  // Append remaining book item elements 
  bookItem.appendChild(createEditIcon(book));
  labelSwitch.appendChild(inputSwitch);
  labelSwitch.appendChild(spanSwitch);
  bookItem.appendChild(labelSwitch);

  bookItem.querySelector('.delete').addEventListener('click', () => {
    deleteBook(index);
  })

  // Append book item to main library display
  libraryDisplay.appendChild(bookItem);
}

// Render library display to page
function renderBooks() {
  libraryDisplay.textContent = "";
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
}

function saveAndRenderBooks() {
  localStorage.setItem("library", JSON.stringify(myLibrary));
  renderBooks();
}

addLocalStorage();


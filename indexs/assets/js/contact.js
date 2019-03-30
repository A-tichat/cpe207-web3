class Book {
    constructor(subject, name, msg, phone, email) {
      this.subject = subject;
      this.name = name;
      this.msg = msg;
      this.phone = phone;
      this.email = email;
    }
  }
  
  class UI {
    static displayBooks() {
       
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#send-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${book.subject}</td>
        <td>${book.name}</td>
        <td>${book.msg}</td>
        <td>Male</td>
        <td>${book.phone}</td>
        <td>${book.email}</td>
        <td><a href="#send-list" class="btn alert btn-sm delete"> X </a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
    static showAlert() {
      document.querySelector('#alertmsg').value = "Please fill in all fields";
    }
  
    static clearFields() {
      document.querySelector('#subject').value = '';
      document.querySelector('#name').value = '';
      document.querySelector('#msg').value = '';
      document.querySelector('#phone').value = '';
      document.querySelector('#email').value = '';
    }
  }
  
  class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(msg) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.msg === msg) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
  document.querySelector('#send-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const subject = document.querySelector('#subject').value;
    const name = document.querySelector('#name').value;
    const msg = document.querySelector('#msg').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;

    if(subject === '' || name === '' || msg === '' || phone === '' || email === '') {
      UI.showAlert();
    } else {
      const book = new Book(subject, name, msg, phone, email);
  
      UI.addBookToList(book);
  
      Store.addBook(book);
  
      UI.clearFields();
    }
  });
  
  document.querySelector('#send-list').addEventListener('click', (e) => {
    
    UI.deleteBook(e.target);
  
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const addNewButton = document.getElementById('addnew');
    const bookForm = document.getElementById('book-form');
    const libraryContainer = document.getElementById('library-container');
  
    // Book Class
    class Book {
      constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
      }
    }
  
    // Library Class
    class Library {
      constructor() {
        this.books = JSON.parse(localStorage.getItem('library')) || [];
      }
  
      addBook(title, author, pages, hasRead) {
        const book = new Book(title, author, pages, hasRead);
        this.books.push(book);
        this.save();
        this.render();
      }
  
      removeBook(index) {
        this.books.splice(index, 1);
        this.save();
        this.render();
      }
  
      toggleReadStatus(index) {
        this.books[index].hasRead = !this.books[index].hasRead;
        this.save();
        this.render();
      }
  
      save() {
        localStorage.setItem('library', JSON.stringify(this.books));
      }
  
      render() {
        libraryContainer.innerHTML = '';
        this.books.forEach((book, index) => {
          const bookCard = document.createElement('div');
          bookCard.classList.add('book-card');
          bookCard.innerHTML = `
            <button data-index="${index}" class="remove-book">×</button>
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p>
              <strong>Read:</strong> 
              <input type="checkbox" ${book.hasRead ? 'checked' : ''} data-index="${index}" class="toggle-read">
            </p>
          `;
          libraryContainer.appendChild(bookCard);
        });
  
        // Add event listeners for toggling read status
        document.querySelectorAll('.toggle-read').forEach((checkbox) => {
          checkbox.addEventListener('change', (e) => {
            const index = e.target.getAttribute('data-index');
            this.toggleReadStatus(index);
          });
        });
  
        // Add event listeners for removing books
        document.querySelectorAll('.remove-book').forEach((button) => {
          button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            this.removeBook(index);
          });
        });
      }
    }
  
    // Create an instance of the Library class
    const library = new Library();
  
    // Initialize the library with default books if empty
    if (library.books.length === 0) {
      library.addBook('The Hunger Games', 'Suzanne Collins', 374, true);
      library.addBook('Divergent', 'Veronica Roth', 487, false);
      library.addBook('Maze Runner', 'James Dashner', 375, true);
    } else {
      library.render();
    }
  
    // Toggle the book form
    addNewButton.addEventListener('click', () => {
      if (bookForm.style.display === 'none' || bookForm.style.display === '') {
        bookForm.style.display = 'grid';
        addNewButton.textContent = 'Close Form';
      } else {
        bookForm.style.display = 'none';
        addNewButton.textContent = '+ Add New';
      }
    });
  
    // Handle form submission
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = bookForm.querySelector('input[placeholder="Title"]').value;
      const author = bookForm.querySelector('input[placeholder="Author"]').value;
      const pages = bookForm.querySelector('input[placeholder="123"]').value;
      const hasRead = bookForm.querySelector('#has-read').checked;
  
      if (title && author && pages) {
        library.addBook(title, author, pages, hasRead);
        bookForm.reset();
        bookForm.style.display = 'none';
        addNewButton.textContent = '+ Add New';
      }
    });
  });
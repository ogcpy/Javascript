document.addEventListener('DOMContentLoaded', () => {
  const addNewButton = document.getElementById('addnew');
  const bookForm = document.getElementById('book-form');
  const libraryContainer = document.getElementById('library-container');
  
  let myLibrary = JSON.parse(localStorage.getItem('library')) || [];

  function Book(title, author, pages, hasRead) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.hasRead = hasRead;
  }

  function saveLibrary() {
      localStorage.setItem('library', JSON.stringify(myLibrary));
  }

  function addBookToLibrary(title, author, pages, hasRead) {
      const book = new Book(title, author, pages, hasRead);
      myLibrary.push(book);
      saveLibrary();
      renderLibrary();
  }

  function renderLibrary() {
      libraryContainer.innerHTML = '';
      myLibrary.forEach((book, index) => {
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

      document.querySelectorAll('.toggle-read').forEach((checkbox) => {
          checkbox.addEventListener('change', (e) => {
              const index = e.target.getAttribute('data-index');
              myLibrary[index].hasRead = e.target.checked;
              saveLibrary();
          });
      });

      document.querySelectorAll('.remove-book').forEach((button) => {
          button.addEventListener('click', (e) => {
              const index = e.target.getAttribute('data-index');
              myLibrary.splice(index, 1);
              saveLibrary();
              renderLibrary();
          });
      });
  }

  addNewButton.addEventListener('click', () => {
      if (bookForm.style.display === 'none' || bookForm.style.display === '') {
          bookForm.style.display = 'grid';
          addNewButton.textContent = 'Close Form';
      } else {
          bookForm.style.display = 'none';
          addNewButton.textContent = '+ Add New';
      }
  });

  bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = bookForm.querySelector('input[placeholder="Title"]').value;
      const author = bookForm.querySelector('input[placeholder="Author"]').value;
      const pages = bookForm.querySelector('input[placeholder="123"]').value;
      const hasRead = bookForm.querySelector('#has-read').checked;

      if (title && author && pages) {
          addBookToLibrary(title, author, pages, hasRead);
          bookForm.reset();
          bookForm.style.display = 'none';
          addNewButton.textContent = '+ Add New';
      }
  });

  if (myLibrary.length === 0) {
      addBookToLibrary('The Hunger Games', 'Suzanne Collins', 374, true);
      addBookToLibrary('Divergent', 'Veronica Roth', 487, false);
      addBookToLibrary('Maze Runner', 'James Dashner', 375, true);
  } else {
      renderLibrary();
  }
});

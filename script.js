console.log('Weekend project 7');
// First step

// Create an object

const listOfBooks = [
    {
        title: 'Night of the knight',
        author: 'Jeritiko',
        genre: 'Fantasy',
        pages: 230,
        id: Date.now(),
        read: true,

    },
    {
        title: 'The lord of the rings',
        author: 'William',
        genre: 'Story',
        pages: 340,
        id: Date.now(),
        read: false,

    },
    {
        title: 'Lolita',
        author: 'Vlamire',
        genre: 'Story',
        pages: 140,
        id: Date.now(),
        read: true,

    },
];


const bookForm = document.querySelector('.book_form');
const bookList = document.querySelector('.book_list');
const newBookLists = document.querySelector('.book-lists');

console.log(bookForm, bookList);

const bookLists = () => {
    
    const html = listOfBooks.map(book => {
        return `
        <li class="book_item" id="${book.id}">
            <span class="itemTitle">${book.title}</span>
            <span class="itemAuthor">${book.author}</span>
            <span class="itemGenre">${book.genre}</span>
            <span class="itemPages">${book.pages}</span>
            <input ${book.read ? 'checked' : ''} value="book.id" type="checkbox">
            <button class="delete_btn" aria-label="Remove" value="item.id">✖️</button>
        </li>
        `;
    }).join('');
    bookList.innerHTML = html;
}

 let myItems = [];
const handleToSubmit = e => {
    // debugger;

    e.preventDefault();
    const form = e.currentTarget;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const pages = form.pages.value;
    const read = form.status.value;
    
    console.log(title);
    
     const item = {
         title: `${title}`,
         author: `${author}`,
         genre: `${genre}`,
         pages: `${pages}`,
         id: Date.now(),
         read: `${read}`,
          
     };

     myItems.push(item);

     console.log(myItems);

     e.target.reset();

     bookList.dispatchEvent(new CustomEvent('itemUpdated'));
    
};

const newBookList = e => {
    e.preventDefault();
    const newhtml = myItems.map(item => `
        <li class="book_item" id="${item.id}">
            <span class="itemTitle">${item.title}</span>
            <span class="itemAuthor">${item.author}</span>
            <span class="itemGenre">${item.genre}</span>
            <span class="itemPages">${item.pages}</span>
            <input ${item.read === "Read" ? 'checked' : ''} value="book.id" type="checkbox">
            <button class="delete_btn" aria-label="Remove" value="item.id">✖️</button>
        </li>
        `).join('');
        newBookLists.innerHTML = newhtml;
    // bookList.insertAdjacentHTML('beforeend',newhtml);
    console.log(bookList);
}


// delete list

const handleDeleteList = (e) => {
    if(e.target.classList.contains('delete_btn')) {
        const deleteList = e.target;
        deleteList.closest('.book_item').remove();
    }
}


document.addEventListener('click', handleDeleteList);
window.addEventListener('DOMContentLoaded', bookLists);
bookForm.addEventListener('submit', handleToSubmit);
bookList.addEventListener('itemUpdated', newBookList);
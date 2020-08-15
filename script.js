console.log('Weekend project 7');
// First step

// Create an object

const listOfBooks = [
    {
        title: 'Night of the knight',
        author: 'Jeritiko',
        genre: 'Fantasy',
        pages: 230,

    },
    {
        title: 'The lord of the rings',
        author: 'William',
        genre: 'Story',
        pages: 340,

    },
    {
        title: 'Lolita',
        author: 'Vlamire',
        genre: 'Story',
        pages: 140,

    },
];


let myItems = [];

const bookForm = document.querySelector('.book_form');
const bookList = document.querySelector('.book_list');
console.log(bookForm, bookList);

const bookLists = () => {
    // let filterBooks = [...listOfBooks];
    
    const html = listOfBooks.map(book => {
        return `
        <li class="book_item">
            <span class="itemTitle">${book.title}</span>
            <span class="itemAuthor">${book.author}</span>
            <span class="itemGenre">${book.genre}</span>
            <span class="itemPages">${book.pages}</span>
            <input value="book.id" type="checkbox">
            <button class="delete_btn" aria-label="Remove" value="item.id">✖️</button>
        </li>
        `;
    }).join('');
    bookList.innerHTML = html;
}

 

// const handleToSubmit = e => {
//     e.preventDefault();
//     const title = e.currentTarget.item.value;
//     console.log(title);

//     if (!title) return;
//      const item = {
//          title,
//          id: Date.now(),
//          complete: false,
//      };

//      myItems.push(item);
//      console.log(`There are now ${myItems.length} item in your state`);
//      e.target.reset();
// };

// const displayItems = () => {
//     console.log(item);
//     const html = myItems.map(item => `<li class="book_item">
//     <span class="itemTitle">${item.title}</span>
//     <span class="itemAuthor">${item.author}</span>
// 	<span class="itemGenre">${item.genre}</span>
//     <span class="itemPages">${item.pages}</span>
//     <input value="${item.id}" ${item.complete ? 'checked' : ''} type="checkbox">
//     <button class="delete_btn" aria-label="Remove ${item.title}" value="${item.id}">✖️</button>
//     </li>`).join(' ');
//     console.log(html);
//     bookList.innerHTML = html;
// };

// bookForm.addEventListener('submit', handleToSubmit);
// bookList.addEventListener('click', displayItems);

window.addEventListener('DOMContentLoaded', bookLists);
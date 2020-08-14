console.log('Weekend project 7');

const bookForm = document.querySelector('.book_form');
const bookList = document.querySelector('.book_list');
console.log(bookForm, bookList);

let myItems = []; 

const handleToSubmit = e => {
    e.preventDefault();
    const title = e.currentTarget.item.value;
    console.log(title);

    if (!title) return;
     const item = {
         title,
         id: Date.now(),
         complete: false,
     };

     myItems.push(item);
     console.log(`There are now ${myItems.length} item in your state`);
     e.target.reset();
};

const displayItems = () => {
    console.log(item);
    const html = myItems.map(item => `<li class="book_item">
    <span class="itemTitle">${item.title}</span>
    <span class="itemAuthor">${item.author}</span>
	<span class="itemGenre">${item.genre}</span>
    <span class="itemPages">${item.pages}</span>
    <input value="${item.id}" ${item.complete ? 'checked' : ''} type="checkbox">
    <button class="delete_btn" aria-label="Remove ${item.title}" value="${item.id}">✖️</button>
    </li>`).join(' ');
    console.log(html);
    bookList.innerHTML = html;
};

bookForm.addEventListener('submit', handleToSubmit);
bookList.addEventListener('click', displayItems);
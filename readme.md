# WKP7 - Library

### Hey team!

Hope you are ready for a new challenge. I have a nice one for you this week. We're going to build a library management application. The application will consist on a form to add a book, and a table listing all the books. After submitting the form, the new book will appear on the book table.

### Here is the mockup of our library app.

![assets/wkp7-library.png](assets/wkp7-library.png)

[You can also access the design through figma.](https://www.figma.com/file/FoD2jZb5oOGZvTUMop0nbA/WKP7?node-id=1%3A2)

### A book needs those attributes :

-   A title
-   An author
-   A genre (Mystery, Thriller, Fiction, Non-fiction, Fantasy, Design, Memoirs...)
-   A number of pages
-   A status (Read or not)

### Requirements :

-   When users load the app for the first time, a list of 3 books minimum should already be present on the list. The list will always be generated dynamically with some state in the javascript.
-   Users should be able to change the read attribute status by clicking the checkbox (and the changes will be reflected in the app state)
-   Users should be able to delete a book from the list by clicking the trash icon (and reflect that in the app state as well)
-   When a user come back to the app with the same browser, they should see the same book list as it was, before they left the app. Save the current book list to your browser's _Local Storage_.

### Tips :

-   Focus on the features first, and if you have some time left, try to replicate this design.
-   Start by choosing the book data structure, and create a few of them in the code.
-   Focus on your basic app functionality first, and then try to save the state of your app to _Local Storage_.
-   I suggest you to look back to the Shopping List exercise we did together (Video 57). There is a lot of similarities between the exercise and this project 😉

### Good luck team 🙌

### A REPORT

#### Explanation 

- Since all necessary files were provided, I just convert those files to add my code. In index.html, `form` element is added which holds many `input` elements and `select` elements. As it said, at least three books are generated automatically generated frome javascript. And so I did that.

- *Accessing the DOM:* In script.js file, firstly I generate those three books that mantioned above and to get that works, I shoose an array object with three arrays inside of it. Each array has `title, author, genre, pages` keys and I added `id and read` keys. Then I used map method to loop through the arrays.

- I used same method and same element when wanting to add a new book butthe only difference is that I had to access the input and select values from the form.

- The itinerary method was used with the checbox, if it is `Read`, the checkbox is checked otherwise unchecked.

- Then to delete each item, I used an event delegation and look for the closest book item element to delete if its child button is clicked.

### What to improve

- If I wasn't stuck with something else, I am sure I could have done saving the state of my app to _Local Storage_. 

### What I learnt and the most challenging part

- I learnt one thing and it is very importent. I don't know but when the three book lists are automatically generated from js as an innerHTML, I had trouble when adding a new book list as an insertAdjacentHTNL beforeend. When I add one book list from form inputs, the output must be doubled not only one which I added. Amazinglly, if I use innerHTML with the new book list which means the new book list will replace the whole innerHTML, then it works very well and there is no double. So it leads me to use another `ul` as you see in my index.html so that I can use an innerHTML freely but I think it doesn't worth it.

### What to explain more

- I don't have many things to say but I want to know more the reason why I have double inputs even though I add book list once, but I used either `bookList.insertAdjacentHTML('beforeend',newhtml);` or `newBookLists.innerHTML+= newhtml;`? So I think you were right by messaging us: In the statement, I wrote this : a list of 3 books minimum should already be present on the list. 
In the end, it clashes with the fact that we want to use localStorage. 
So this is not a requirement anymore :-)

*Thank you!*




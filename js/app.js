document.addEventListener('DOMContentLoaded', () => {
  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

// delete all (add a button in index) then follow addEventListener ^^
  const deleteAllButtonClick = document.querySelector('#delete-all');
  deleteAllButtonClick.addEventListener('click', handleDeleteAllClick)

})
// ///HANDLER - form submit and reading list update

const handleFormSubmit = function (event) {
  console.log(event);
  event.preventDefault();
// add an item to the reading list when submitted
  const readingListItem = createReadingListItem(event.target);
//access the reading list with id reading-list
  const readingList = document.querySelector('#reading-list');
  // add the new item
  readingList.appendChild(readingListItem);

  event.target.reset();
};

const createReadingListItem = function (form) {
// create a list element to store the values
  const readingListItem = document.createElement('li');
// add the new item to the list element
  readingListItem.classList.add('reading-list-item');

// create elements to add values
// include: title value and reference e.g. h1
  const title = document.createElement('h2');
// get the title value as the text content
  title.textContent = form.title.value;
//add this to the reading list using append child function
  readingListItem.appendChild(title);

// follow same createElement coding
// include: author value
  const author = document.createElement('h3');
  author.textContent = form.author.value;
  readingListItem.appendChild(author);

// follow same createElement coding
// include: category value
const category = document.createElement('p');
category.textContent = form.category.value;
readingListItem.appendChild(category);

// remember to do the return ,
// else this error: Uncaught Error - not of type node
return readingListItem;

};

// HANDLER for delete All
const handleDeleteAllClick = function (event) {
  // console.log(event.target.value);
// what it is going to delete - all of the reading list
  const readingList = document.querySelector('#reading-list');
// look this up, but guess it points to the html
  readingList.innerHTML = '';
};

document.addEventListener('DOMContentLoaded', () => {
  //// console.log('JavaScript loaded'); use to check browser for initial set-up
  // eventListener for title name text input
  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  // eventListener for Reading List




});

///HANDLERS
const handleFormSubmit = function (event) {
  console.log(event);
};

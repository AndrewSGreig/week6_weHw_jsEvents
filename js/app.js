document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const handleFormSubmit = function(event){
    event.preventDefault();
    console.log('in the function');
    const holidayList = document.querySelector('#holiday-list');
    const newLi = document.createElement('li');
    newLi.textContent = `Your destination: ${event.target.location.value}, ${event.target.country.value}, ${event.target.continent.value}`;

    holidayList.appendChild(newLi);

    form.reset();
  }
  // add an event listener to the form
  // 1) get the form
  const form = document.querySelector('#new-item-form');

  // 2) attach the event listener for the submit event from the save button
  form.addEventListener('submit', handleFormSubmit);


  const handleDeleteAllClick = function(){
    const holidayList = document.querySelector('#holiday-list');
    while (holidayList.firstChild) holidayList.removeChild(holidayList.firstChild);
  }

  const newButton = document.createElement('button');
  document.querySelector('new-item-form');
  newButton.textContent = "delete all holidays!";
  newButton.setAttribute('id', 'delete-all');
  const body = document.querySelector('body');
  body.appendChild(newButton);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

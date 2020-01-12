var userTaskName = document.querySelector('.title-input');
var userTaskItem = document.querySelector('.task-item-input');
var searchBar = document.querySelector('.search-input');
var addTaskButton = document.querySelector('.task-button');
var searchButton = document.querySelector('.search-button');
var createTaskList = document.querySelector('.form-button')
var clearButton = document.querySelector('.clear-button');
var filterButton = document.querySelector('.filter-button');
var leftColumn = document.querySelector('.left-column');
var taskStagingArea = document.querySelector('.updated-task-box');
var createTaskButton = document.querySelector('.task-button');
var deleteTaskButton = document.querySelector('.task-button-clear');
var body= document.querySelector('body');

// Event listeners
leftColumn.addEventListener('keyup', enableAddTaskButton);
clearButton.addEventListener('click', clearInputField);
// createTaskList.addEventListener('click', addTaskToStagingArea)
createTaskButton.addEventListener('click', addTaskToStagingArea);
body.addEventListener('click', eventClickHandler);

//toggle state of all buttons left-section
function enableAddTaskButton() {
  createTaskButton.disabled = userTaskItem.value == "";
  clearButton.disabled = userTaskItem.value == "";
}

//Clear user input fields
function clearInputField() {
  userTaskItem.value = '';
  userTaskName.value = '';
  enableAddTaskButton();
}

//Add task item into staging area
function addTaskToStagingArea() {
  taskStagingArea.insertAdjacentHTML("beforeend",`<p><button class='task-button-clear'>X</button>${userTaskItem.value}</p>`);
}

// Global event click-handler left column
function eventClickHandler(e) {
  if(e.target.classList.contains('task-button-clear')) {
    removeTask();
  }
}

function removeTask() {
  event.target.closest("p").remove();
}

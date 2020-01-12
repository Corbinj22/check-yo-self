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

// Event listeners
leftColumn.addEventListener('keyup', enableAddTaskButton);
clearButton.addEventListener('click', clearInputField);
// createTaskList.addEventListener('click', addTaskToStagingArea)
createTaskButton.addEventListener('click', addTaskToStagingArea)


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

//Add task item to staging area
function addTaskToStagingArea() {
  taskStagingArea.insertAdjacentHTML("beforeend",`<p><button class='task-button-clear'>X</button>${userTaskItem.value}</p>`);
}

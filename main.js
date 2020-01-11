var userTaskName = document.querySelector('.title-input');
var userTaskItem = document.querySelector('.task-item-input');
var searchBar = document.querySelector('.search-input');
var addTaskButton = document.querySelector('.task-button');
var searchButton = document.querySelector('.search-button');
var createTaskButton = document.querySelector('.form-button')
var clearButton = document.querySelector('.clear-button');
var filterButton = document.querySelector('.filter-button');
var leftColumn = document.querySelector('.left-column');


// Event listeners
leftColumn.addEventListener('keyup', enableAddTaskButton);


//toggle state of all buttons left-section
function enableAddTaskButton() {
  createTaskButton.disabled = userTaskItem.value == "";
}

function addTaskToLeftSection() {
  

}

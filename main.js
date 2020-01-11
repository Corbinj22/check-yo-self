var userTaskName = document.querySelector('.title-input');
var userTaskItem = document.querySelector('.task-item-input');
var searchBar = document.querySelector('.search-input');
var addTaskButton = document.querySelector('.task-button');
var searchButton = document.querySelector('.search-button');
var createTaskButton = document.querySelector('.form-button')
var clearButton = document.querySelector('.clear-button');
var filterButton = document.querySelector('.filter-button');



function ableTaskButton() {
  if(userTaskItem.value !== "" || userTaskName.value !== "") {
    clearButton.disabled = false;
  }
}

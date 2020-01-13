var currentTaskList = new ToDoList();
var body= document.querySelector('body');
var searchBar = document.querySelector('.search-input');
var userTaskName = document.querySelector('.title-input');
var userTaskItem = document.querySelector('.task-item-input');
var searchButton = document.querySelector('.search-button');
var addTaskButton = document.querySelector('.task-button');
var createTaskCard = document.querySelector('.create-button')
var clearButton = document.querySelector('.clear-button');
var filterButton = document.querySelector('.filter-button');
var addTaskButton = document.querySelector('.task-button');
var leftColumn = document.querySelector('.left-column');
var taskStagingArea = document.querySelector('.updated-task-box');
var deleteTaskButton = document.querySelector('.task-button-clear');

// Event listener on input left column
leftColumn.addEventListener('keyup', function() {
enableAddTaskButton();
enableMakeTaskList();
});

// event listener for buttons left column
addTaskButton.addEventListener('click', function() {
  addTaskToStagingArea();
  enableMakeTaskList();
});

// clear all input left column
clearButton.addEventListener('click', clearInputField);
createTaskCard.addEventListener('click', generateTaskCard)
body.addEventListener('click', eventClickHandler);

// Global event click-handler left column
function eventClickHandler(e) {
  if(e.target.classList.contains('task-button-clear')) {
    removeTask();
  }
}

//Toggle state of buttons left-section
function enableAddTaskButton() {
  addTaskButton.disabled = userTaskItem.value == "";
  clearButton.disabled = userTaskItem.value == "";
}

//Clear user input fields
function clearInputField() {
  userTaskItem.value = '';
  enableAddTaskButton();
}

//Add task item into staging area
function addTaskToStagingArea() {
  var uniqueID = Date.now();
  var newTask = new Task(uniqueID, userTaskItem.value);
  currentTaskList.tasks.push(newTask);
  taskStagingArea.insertAdjacentHTML("beforeend",`<p id='${newTask.id}'><button class='task-button-clear'>X</button>${userTaskItem.value}</p>`);
  clearInputField();
}

// Delete indivdual task added to staging area
function removeTask() {
  var targetID = event.target.closest("p").id;
  currentTaskList.tasks.splice(currentTaskList.tasks.indexOf({id:targetID}, 1));
  // var targetTask = currentTaskList.tasks.find(task => task.id === targetID);
  event.target.closest("p").remove();
  enableMakeTaskList();
}

function removeTask() {
  var targetID = event.target.closest("p").id;
}

function enableMakeTaskList() {
if((userTaskName.value != '') && (currentTaskList.tasks.length > 0)) {
  createTaskCard.removeAttribute('disabled');
  } else {
  createTaskCard.setAttribute('disabled', '');
  }
}

// generates task card based on user input
function generateTaskCard() {
  
}

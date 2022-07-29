"use strict";

var _todoList = require("./todoList.js");

var _render = require("./render.js");

// algo
// 1 create functions that will set and get items from local storage
// 2 create an event for input field and for create-btn to add new task to localStorage.tasksList
// 3 cerate an event that will toggle done status in localStorage.tasksList
// 4 create functions that will add new elements in DOM using our localStorage array
// 5 create an event for window that will synchronize all storage changes if event.key === 'tasksList'
document.addEventListener('DOMContentLoaded', function () {
  // после загрузки DOM, отрисовываем элементы и добавляем функции кнопке и инпуту
  (0, _render.renderTasks)();
  (0, _todoList.initTodoListHandler)();
});

var onStorageChange = function onStorageChange(event) {
  console.log(event);

  if (event.key === 'tasksList') {
    (0, _render.renderTasks)();
  }
};

window.addEventListener('storage', onStorageChange); // при изменении Storage делаем функцию для всех
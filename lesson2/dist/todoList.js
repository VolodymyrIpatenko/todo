'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.initTodoListHandler = void 0;

var _createTask = require('./createTask.js');

var _updateTasks = require('./updateTasks.js');

var initTodoListHandler = function initTodoListHandler() {
  var createBtnElem = document.querySelector('.create-task-btn'); // выбираем кнопку создать с помощью DOM

  createBtnElem.addEventListener('click', _createTask.createTask); // при клике вызываем ф-ю создать задание

  var todoListElem = document.querySelector('.list'); // выбираем список ul

  todoListElem.addEventListener('click', _updateTasks.toggleTask); // при клике на чекбокс меняем статус done
};

exports.initTodoListHandler = initTodoListHandler;

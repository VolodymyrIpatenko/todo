"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

var _render = require("./render.js");

var _storage = require("./storage.js");

var createTask = function createTask() {
  var inputElem = document.querySelector('.task-input'); // выбираем инпут

  var text = inputElem.value; // переменная text содержит значение input.value

  if (!text) {
    return;
  }

  inputElem.value = '';
  var tasksList = (0, _storage.getItem)('tasksList') || []; // создаём список задач, берём с хранилища 'tasksList' или пустой массив если значение null

  var newTasksList = tasksList.concat({
    // обновляем старый список, добавляя в него новую задачу
    text: text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString()
  });
  (0, _storage.setItem)('tasksList', newTasksList);
  (0, _render.renderTasks)();
};

exports.createTask = createTask;
'use strict';

require('core-js/modules/es.object.keys.js');

require('core-js/modules/es.symbol.js');

require('core-js/modules/es.array.filter.js');

require('core-js/modules/es.object.to-string.js');

require('core-js/modules/es.object.get-own-property-descriptor.js');

require('core-js/modules/web.dom-collections.for-each.js');

require('core-js/modules/es.object.get-own-property-descriptors.js');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.toggleTask = void 0;

require('core-js/modules/es.array.map.js');

var _render = require('./render.js');

var _storage = require('./storage.js');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// input event
// output undefined
var toggleTask = function toggleTask(event) {
  var isCheckbox = event.target.classList.contains('list__item-checkbox'); // применяем дилегирование к объекту 'list'

  if (!isCheckbox) {
    return;
  }

  var tasksList = (0, _storage.getItem)('tasksList'); // присваиваем значение свойства localStorage.tasksList в переменную

  var newTasksList = tasksList.map(function (task) {
    // создаём новый массив newTasksList, с помощью map преобразовываем старый массив.
    // input task li element
    // output newTask or task
    if (task.id === event.target.dataset.id) {
      // в первом случае если id таска совпадают с id кликнутого ивента, то
      var done = event.target.checked; // присваиваем done значение event.done true or false

      return _objectSpread(
        _objectSpread({}, task),
        {},
        {
          // копия изначального объекта
          done: done,
          // новое значение done равносильно записи done: done,
          finishDate: done ? new Date().toISOString() : null, // добавляем новое свойство finishDate с датой подтверждения если done = true или null если done = false;
        },
      );
    }

    return task; // в другом случае возвращаем нетронутый элемент, таким каким он был.
  });
  (0, _storage.setItem)('tasksList', newTasksList); // localStorage присваиваем значение нового списка

  (0, _render.renderTasks)(); // заново отрисовываем список / re-render the list
};

exports.toggleTask = toggleTask;

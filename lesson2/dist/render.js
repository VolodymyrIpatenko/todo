'use strict';

require('core-js/modules/es.symbol.js');

require('core-js/modules/es.symbol.description.js');

require('core-js/modules/es.object.to-string.js');

require('core-js/modules/es.symbol.iterator.js');

require('core-js/modules/es.array.iterator.js');

require('core-js/modules/es.string.iterator.js');

require('core-js/modules/web.dom-collections.iterator.js');

require('core-js/modules/es.array.from.js');

require('core-js/modules/es.array.slice.js');

require('core-js/modules/es.function.name.js');

require('core-js/modules/es.regexp.exec.js');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.renderTasks = void 0;

require('core-js/modules/es.array.map.js');

require('core-js/modules/es.array.sort.js');

var _storage = require('./storage.js');

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var listElem = document.querySelector('.list'); // В этой части 'render.js' отрисовываем элементы на странице
// input object
// output object

var createCheckbox = function createCheckbox(_ref) {
  var done = _ref.done,
    id = _ref.id;
  // берём из объекта выбранные свойства
  var checkboxElem = document.createElement('input'); // cоздаём input типа чекбокс

  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.id = id; // в значение data-id присваиваем id

  checkboxElem.checked = done; // в свойство checked заносим значение done

  checkboxElem.classList.add('list__item-checkbox'); // добавляем класс

  return checkboxElem;
}; // input object
// output new object

var createListItem = function createListItem(_ref2) {
  var text = _ref2.text,
    done = _ref2.done,
    id = _ref2.id;
  // берём из объекта выбранные свойства
  var listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item'); // добавляем созданому элементу класс 'list__item'

  var checkboxElem = createCheckbox({
    done: done,
    id: id,
  }); // создаём чекбокс

  if (done) {
    listItemElem.classList.add('list__item_done'); // если done = true добавляем элементу списка класс 'list__item_done'
  }

  listItemElem.append(checkboxElem, text); // добавляем в элемент списка, элемент чекбокс и текст

  return listItemElem; // возвращаем полученый элемент
}; // input none
// output undefined

var renderTasks = function renderTasks() {
  var tasksList = (0, _storage.getItem)('tasksList') || []; // создаём список задач, берём с хранилища 'tasksList' или пустой массив если значение null

  listElem.innerHTML = ''; // обнуляем список ul '.list'

  var tasksElems = tasksList
    .sort(function (a, b) {
      return a.done - b.done;
    })
    .map(createListItem); // создаём новый массив тасков

  listElem.append.apply(listElem, _toConsumableArray(tasksElems)); // c помощью spread разоврачиваем массив и добавляем все элементы в ul список 'list'
};

exports.renderTasks = renderTasks;

var ListRenderer = require('./renderers/list');
var Handler = require('./handler');
var data = require('./data');

function removeAllClasses(className) {
  Array.prototype.forEach.call(document.querySelectorAll('.' + className), function (element) {
    element.classList.remove(className);
  });
}

function clearActive(hash) {
  removeAllClasses('active');
  document.querySelector('section[role=navigation] a[href="#'+hash +'"]').classList.add('active');
  document.getElementById(hash).classList.add('active');
}

function init() {
  var rooms = new ListRenderer('rooms', data.bh.rooms);
  var areas = new ListRenderer('areas', data.bh.areas);
  var handler = new Handler('room-details');

  rooms.render();
  areas.render();

  handler.init(clearActive);
}

window.addEventListener('load', init);

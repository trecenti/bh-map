var DetailView = require('./renderers/detail');
var data = require('./data');

module.exports = function (containerId) {
  var self = {};
  var container = document.getElementById(containerId);

  function clearPreviousView() {
    if (!container) { return; }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function addNewView(hash, roomData) {
    var view, template, roomView;

    template = document.getElementById('room-details-template');
    view = document.importNode(template.content, true);

    if (roomData) {
      roomView = new DetailView(view, roomData);
      container.appendChild(roomView.render());
    }
  }

  function changeView(hash, callback) {
    clearPreviousView();
    if (hash) {
      function byId(room) { return room.id === hash; }

      addNewView(hash, data.bh.rooms.filter(byId)[0]);
      callback(hash);
    }
  }

  self.init = function (afterChangeCallback) {
    window.addEventListener('hashchange', function (e) {

      var hash = e.newURL.split('#')[1];
      changeView(hash, afterChangeCallback);
    });

    changeView(window.location.hash.slice(1), afterChangeCallback);
  };

  return self;
};


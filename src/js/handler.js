var DetailView = require('./renderers/detail');

module.exports = function (containerId) {
  var self = {};
  var container = document.getElementById(containerId);

  function clearPreviousView() {
    if (!container) { return; }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function addNewView(hash, data) {
    var view, template, roomView;
    function byId(room) { return room.id === hash; }

    template = document.getElementById('room-details-template');
    view = document.importNode(template.content, true);

    if (data) {
      roomView = new DetailView(view, data);
      container.appendChild(roomView.render());
    }
  }

  function changeView(hash, callback) {
    clearPreviousView();
    if (hash) {
      addNewView(hash);
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

